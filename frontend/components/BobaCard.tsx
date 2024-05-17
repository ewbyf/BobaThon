import Container from '@/components/Container';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { shuffle } from '@/lib/shuffle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export const bobaCardWidth = Dimensions.get('screen').width * 0.8;

const BobaCard = ({ boba, numOfBobas, curIndex }: { boba: IBoba; numOfBobas: number; curIndex: number }) => {
	return (
		<View style={styles.card}>
			<Image source={boba.img} style={[StyleSheet.absoluteFillObject, styles.image]} resizeMode="contain"></Image>
			<View style={styles.imgFooter}>
				<Text style={styles.name}>{boba.name}</Text>
			</View>
		</View>

		// <ScrollView
		// 	style={styles.scrollView}
		// 	snapToInterval={600}
		// 	showsVerticalScrollIndicator={false}
		// 	snapToAlignment="start"
		// 	decelerationRate={0.9}
		// 	disableIntervalMomentum={true}
		// 	contentContainerStyle={{ justifyContent: 'flex-start' }}>
		// 	<View style={styles.card}>
		// 		<Image source={boba.img} style={styles.image} resizeMode="contain"></Image>
		// 		<TouchableOpacity
		// 			style={styles.reject} //</View>onPress={reject}
		// 		>
		// 			<Ionicons size={28} name="close-outline" color="white"></Ionicons>
		// 		</TouchableOpacity>
		// 		<TouchableOpacity
		// 			style={styles.accept} //</View>onPress={match}
		// 		>
		// 			<Ionicons size={28} name="checkmark-outline" color="white"></Ionicons>
		// 		</TouchableOpacity>
		// 	</View>
		// 	<View style={styles.aboutSection}>
		// 		<View style={styles.descriptionContainer}>
		// 			<Text>Matcha {boba.name}</Text>
		// 		</View>
		// 	</View>
		//</ScrollView>
	);
};

//

const styles = StyleSheet.create({
	card: {
		width: bobaCardWidth,
		aspectRatio: 1 / 1.67,
		borderRadius: 18,
		overflow: 'hidden',

		// name
		justifyContent: 'flex-end',
		// shadow
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
	},
	image: {
		borderRadius: 18,
	},
	imgFooter: {
		padding: 10,
	},
	name: {
		fontFamily: 'OverpassBol',
		fontSize: 24,
		color: 'white',
	},
});

// const styles = StyleSheet.create({
// 	scrollView: {
// 		height: bobaCardWidth * 4,
// 		width: bobaCardWidth,
// 		display: 'flex',
// 	},
// 	card: {
// 		backgroundColor: 'grey',
// 		width: '100%',
// 		display: 'flex',
// 		borderRadius: 15,
// 		marginBottom: 30,
// 	},
// 	image: {
// 		height: 450,
// 	},

// 	reject: {
// 		height: 65,
// 		width: 65,
// 		backgroundColor: 'red',
// 		position: 'absolute',
// 		bottom: -20,
// 		left: 10,
// 		borderRadius: 100,
// 		shadowOffset: { width: 0, height: 3 },
// 		shadowColor: 'black',
// 		shadowRadius: 4,
// 		shadowOpacity: 0.5,
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	accept: {
// 		height: 65,
// 		width: 65,
// 		backgroundColor: 'lightgreen',
// 		position: 'absolute',
// 		bottom: -20,
// 		right: 10,
// 		borderRadius: 100,
// 		shadowOffset: { width: 0, height: 3 },
// 		shadowColor: 'black',
// 		shadowRadius: 4,
// 		shadowOpacity: 0.5,
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	aboutSection: {
// 		height: 600,
// 	},
// 	descriptionContainer: {
// 		height: 200,
// 		width: '100%',
// 		backgroundColor: 'grey',
// 		borderRadius: 20,
// 	},
// });

export default BobaCard;
