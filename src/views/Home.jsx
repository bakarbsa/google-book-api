import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import BookGridView from '../components/BookGridView';

function Home() {
  const [title, setTitle] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={style.container}>
        <Text style={style.subtitle}>Find & Enjoy</Text>
        <Text style={style.title}>Collection</Text>
        <TextInput 
          placeholder='Cari buku, misalkan "Hewan"'
          placeholderTextColor='rgba(0, 0, 0, 0.3)'
          defaultValue={title}
          onChangeText={newTitle => setTitle(newTitle)}
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <BookGridView title={title}/>
      </View>
    </View>
  );
}

const colors = {
  white: '#fff',
  black: '#000',
  primary: '#658864',
  secondary: '#B7B78A'
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20, 
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.primary,
  },
  searchBox: {
    marginTop: 10,
    paddingHorizontal: 10,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
  },
});

export default Home;