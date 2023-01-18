import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function BookCard(props) {
  return (
    <View style={style.cardContainer}>
			<View style={style.imageContainer}>
				<Image 
					source={{uri: props.thumbnail || ''}}
					style={style.imageThumbnail}
				/>
			</View>
			<View style={style.detailContainer}>
				<Text style={{color: colors.black}}>{props.title || 'Loading...'}</Text>
				<Text style={{color: colors.black}}>Halo</Text>
			</View>
    </View>
  )
}

const colors = {
	white: '#fff',
	black: '#000',
	primary: '#658864',
	secondary: '#B7B78A'
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
		flex: 4,
		backgroundColor: 'transparent',
	},
	imageThumbnail:{
		flex: 1,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},	
	detailContainer: {
		flex: 1,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		backgroundColor: 'white',
	}
});

export default BookCard;