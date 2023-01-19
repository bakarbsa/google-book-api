import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

function BookCard(props) {
  return (
    <View style={style.cardContainer}>
      <View style={style.imageContainer}>
        {props.thumbnail && (
          <Image
            source={{uri: props.thumbnail}}
            style={style.imageThumbnail}
          />
        )}
      </View>
      <View style={style.detailContainer}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={{color: colors.primary, fontWeight: 'bold', fontSize:12}}>{props.name}</Text>
				<Text numberOfLines={1} ellipsizeMode='tail' style={{color: 'rgba(0,0,0,0.5)', fontSize: 12}}>{props.author}</Text>
      </View>
    </View>
  );
}

const colors = {
  white: '#fff',
  black: '#000',
  primary: '#658864',
  secondary: '#B7B78A',
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    borderRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    flex: 4.5,
    backgroundColor: 'transparent',
  },
  imageThumbnail: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailContainer: {
    flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingHorizontal: 10,
		paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
  },
});

export default BookCard;
