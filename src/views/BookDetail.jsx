import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

function BookDetail({route, navigation}) {
  const { title, thumbnail, author, description, publisher, pageCount } = route.params;
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView style={style.container}>
        <View style={{flexDirection: 'row', gap: 5, marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <View style={{height: 30, width: 30, justifyContent: 'center'}}>
              <Text style={style.title}>{'  <'}</Text>
            </View>
          </TouchableOpacity>
          <Text style={style.title}>Book Detail</Text>
        </View>

        {/* Content */}
        <View style={{flexDirection: 'row', gap: 15}}>
          <Image source={{uri: thumbnail}} style={style.imageThumbnail} />
          <View style={{flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: colors.secondary,}}>{title}</Text>
            <Text style={{marginTop: 7, fontWeight: '700', fontSize: 15, color: 'rgba(0,0,0,0.6)'}}>{author}</Text>
            <Text style={{marginTop: 2, fontWeight: '700', fontSize: 15, color: 'rgba(0,0,0,0.6)'}}>{publisher}</Text>
            <Text style={{marginTop: 7, fontWeight: '700', fontSize: 13, color: 'rgba(0,0,0,0.4)'}}>{pageCount} Halaman</Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 17, color: colors.black, fontWeight: 'bold'}}>Tentang buku ini</Text>
          <Text style={{marginTop: 13, fontSize: 15, color: colors.black, lineHeight: 19}}>{description}</Text>
        </View>

        <View style={{marginVertical: 40}} />
      </ScrollView>
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
    paddingTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.primary,
  },
  imageThumbnail: {
    backgroundColor: 'black',
    height: 200,
    width: 140,
    borderRadius: 10
  }
});

export default BookDetail;