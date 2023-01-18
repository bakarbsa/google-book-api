import React, {useEffect, useState} from 'react';
import BookCard from './BookCard';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import { getBooksByTitle } from '../api/BookAPI';

const BookGridView = (props) => {
  const [books, setBooks] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setPending(true);
    setError(false);
    setErrorMessage(null);
    getBooksByTitle(setBooks, setPending, setError, setErrorMessage, props.title || 'Hewan');
  }, [props.title]);

  // useEffect(() => {
  //   if (books) {
  //     console.log('====LOG BOOKS======');
  //     console.log(books);
  //     console.log('====LOG BOOK 1=====');
  //     console.log(books[0]);
  //   }
  // }, [pending]);

  return (
    pending
    ? <Text style={{color: 'black'}}>Loading 1 ...</Text>
    : error
      ? <Text style={{color: 'black'}}>{errorMessage}</Text>
      : books
        ? <View style={styles.container}>
            <FlatList
              data={books}
              renderItem={({book}) => (
                book !== undefined && book.volumeInfo !== undefined && book.volumeInfo.title !== undefined && book.volumeInfo.imageLinks.thumbnail !== undefined
                ? <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      margin: 5,
                    }}>
                    <View style={styles.cardContainer}>
                      <BookCard name={book.volumeInfo.title} thumbnail={book.volumeInfo.imageLinks.thumbnail}/>
                    </View>
                  </View>
                : <Text style={{color: 'black'}}>Loading2...</Text>
              )}
              numColumns={2}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={false}
            />
          </View>
        : <Text style={{color: 'black'}}>Error</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 250,
  },
});

export default BookGridView;