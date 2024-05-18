import { IBoba } from '@/interfaces/interfaces';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Image } from 'expo-image';

const BobaBlock = ({ boba }: { boba: IBoba }) => {
	return (
		<TouchableOpacity
			style={styles.post}
			onPress={() =>
				router.navigate({
					pathname: '/bobaMatch',
					params: { id: boba.id }
				})
			}
		>
			<View style={{ width: '45%', height: '100%', borderRadius: 25 }}>
				<Image source={boba.img} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 25 }}></Image>
			</View>

			<View style={styles.postContent}>
				<Text style={styles.title}>{boba.name}</Text>
				<StarRatingDisplay rating={boba.stars} starStyle={{ marginHorizontal: 0, marginTop: 3, marginBottom: 8 }} starSize={20} color='#E9A898' />
				<Text style={styles.description}>{boba.description}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontFamily: 'OverpassBold',
		textAlign: 'left',
		width: '100%',
		color: '#6F5C63'
	},
	post: {
		width: 350,
		height: 250,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.25,
		shadowRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 15,
		alignItems: 'center',
		gap: 10,
		padding: 15
	},
	postContent: {
		display: 'flex',
		justifyContent: 'flex-start',
		height: '100%',
		flex: 1,
		paddingTop: 10
	},
	name: {
		fontSize: 16,
		fontFamily: 'OverpassLight',
		textAlign: 'left',
		color: '#6F5C63',
		marginLeft: 3
	},
	description: {
		fontSize: 16,
		fontFamily: 'OverpassLight',
		color: '#6F5C63'
	},
	moreInfoButton: {
		borderColor: '#e88a84',
		borderWidth: 2,
		borderRadius: 10,
		backgroundColor: '#e2a191',
		padding: 8,
		width: 80,
		alignItems: 'center',
		marginTop: 'auto',
		marginLeft: 'auto'
	},
	infoButtonText: {
		color: 'white',
		fontWeight: '700'
	},
	button: {
		width: 100,
		height: 40,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 'auto',
		marginTop: 'auto'
	}
});

export default BobaBlock;
