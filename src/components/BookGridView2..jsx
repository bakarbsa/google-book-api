import React, {useEffect, useState} from 'react';
import BookCard from './BookCard';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import axios from 'axios';

const BookGridView2 = () => {
  const [books, setBooks] = useState([]);
  const [statusCode, setStatusCode] = useState(null);
  const [title, setTitle] = useState('Hewan');

  const getBooks = async () => {
    const items = [];
    await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title)
      .then((res) => {
        setStatusCode(res.status);
        const totalItems = res.data.totalItems <= 20 ? res.data.totalItems : 20;
        for (let i = 0; i < totalItems; i++) {
          const item = res.data.items[i];
          items.push(item);
        }
        setBooks(items);
      })
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={styles.container}>
      {statusCode == 200 && books.length > 0
        ? <FlatList
            data={books}
            renderItem={({book}) => (
              book !== undefined && book.volumeInfo !== undefined
              ? <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 5,
                  }}>
                  <View style={styles.cardContainer}>
                    <BookCard name={book.volumeInfo.title || 'Test'} thumbnail={'https://picsum.photos/200/300' }/>
                  </View>
                </View>
              : <Text style={{color: 'red', textAlign: 'center'}}>Loading...</Text>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        : <Text style={{color: 'red', textAlign: 'center'}}>Mohon Tunggu</Text>
      }
    </View>
  );
};
export default BookGridView2;

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