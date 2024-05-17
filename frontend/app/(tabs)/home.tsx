import Container from '@/components/Container';
import ExploreBackground from '@/components/backgrounds/ExploreBackground';
import { bobaList } from '@/data/bobaList';
import { reviewList } from '@/data/reviewList';
import { IBoba } from '@/interfaces/interfaces';
import { Images } from '@/lib/images';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function HomeScreen() {
	const width = Dimensions.get('window').width;
	const [latestMatches, setLatestMatches] = useState<IBoba[]>([]);

	useEffect(() => {
		const token = getStorage('token');
		api.get(`/matches?token=${token}`)
			.then((resp) => {
				setLatestMatches([...bobaList.filter((boba) => resp.data.matches.includes(boba.id))]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<ExploreBackground></ExploreBackground>
			</View>

			<Container title='Explore Boba' explore={true}>
				<TextInput placeholder='Search' style={styles.searchbar}></TextInput>
				<Carousel
					loop
					width={width}
					height={200}
					autoPlay={true}
					data={[Images.bobaAd1, Images.bobaAd2]}
					scrollAnimationDuration={1000}
					autoPlayInterval={5000}
					renderItem={({ item }) => (
						<View
							style={{
								flex: 1,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginHorizontal: 15,
								borderRadius: 25,
								height: 200
							}}
						>
							<Image source={item} style={{ width: '100%', height: '100%', borderRadius: 25 }} resizeMode='cover'></Image>
						</View>
					)}
				/>
				<Text style={styles.title}>Your Latest Matches</Text>
				{latestMatches.length === 0 && <Text>No matches yet!</Text>}
				<View>
					<Text style={[styles.title, { paddingLeft: 20 }]}>Popular Posts</Text>
					<ScrollView
						horizontal
						snapToInterval={350}
						snapToAlignment='start'
                        decelerationRate="fast"
						style={{ display: 'flex', paddingVertical: 20, paddingHorizontal: 20, width: width }}
						contentContainerStyle={{ gap: 20, paddingRight: 40 }}
					>
						{reviewList.map((review) => (
							<View style={styles.post}>
								<View style={{ width: '45%', height: '100%', borderRadius: 25 }}>
									<Image source={review.img} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 25 }}></Image>
								</View>

								<View style={styles.postContent}>
									<Text style={styles.title}>{review.name}</Text>
									<Text style={styles.name}>{review.author}</Text>
									<StarRatingDisplay
										rating={review.stars}
										starStyle={{ marginHorizontal: 0, marginTop: 3, marginBottom: 8 }}
										starSize={20}
										color='#E9A898'
									/>
									<Text style={styles.description}>{review.content}</Text>
								</View>
							</View>
						))}
					</ScrollView>
				</View>

				<Button onPress={() => router.navigate('/main')} title='aa'></Button>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%'
	},
	searchbar: {
		borderWidth: 1.5,
		borderColor: 'grey',
		borderRadius: 50,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: '100%'
	},
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
		paddingVertical: 10
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
	}
});
