import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

function Splash() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Book Collection</Text>
      <Text style={style.subtitle}>Find Your Favorite Book!</Text>
    </View>
  );
}

const colors = {
  white: '#fff',
  primary: '#658864',
  secondary: '#B7B78A'
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '200',
    color: colors.white,
  }
});

export default Splash;