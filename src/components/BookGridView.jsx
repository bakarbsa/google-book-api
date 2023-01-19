import React, {useEffect, useState} from 'react';
import BookCard from './BookCard';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity
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
    ? <View style={{flex: 1}}>
        <ActivityIndicator size="large" style={{flex: 1}}/>
      </View>
    : error
      ? <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>{errorMessage}</Text>
        </View>
      : books
        ? books.length === 0 
          ? <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>Buku tidak ditemukan</Text>
            </View>
          : <View style={styles.container}>
              <FlatList
                data={books}
                renderItem={(book) => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('BookDetail', {
                        title: book.item.volumeInfo.title,
                        thumbnail: book.item.volumeInfo.imageLinks.thumbnail,
                        author: book.item.volumeInfo.authors[0],
                        description: book.item.volumeInfo.description,
                        publisher: book.item.volumeInfo.publisher,
                        pageCount: book.item.volumeInfo.pageCount,
                      })}
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 5,
                      }}>
                      <View style={styles.cardContainer}>
                        <BookCard name={book.item.volumeInfo.title} author={book.item.volumeInfo.authors[0]} thumbnail={book.item.volumeInfo.imageLinks.thumbnail}/>
                      </View>
                    </TouchableOpacity>
                )
                }}
                numColumns={2}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
              />
            </View>
        : <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>Tidak dapat melakukan request</Text>
          </View>
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
    height: 280,
  },
});

export default BookGridView;