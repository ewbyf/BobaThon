import Container from '@/components/Container';
import Loading from '@/components/Loading';
import NoMatchesYet from '@/components/NoMatchesYet';
import Review from '@/components/Review';
import SearchBar from '@/components/SearchBar';
import ExploreBackground from '@/components/backgrounds/ExploreBackground';
import { bobaList } from '@/data/bobaList';
import { reviewList } from '@/data/reviewList';
import { IBoba } from '@/interfaces/interfaces';
import { Images } from '@/lib/images';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import { useIsFocused } from '@react-navigation/native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

export default function HomeScreen() {
	const width = Dimensions.get('window').width;
	const [latestMatches, setLatestMatches] = useState<IBoba[]>([]);
	const focused = useIsFocused();
    const [init, setInit] = useState(true);

	useEffect(() => {
		const token = getStorage('token');
		api.get(`/matches?token=${token}`)
			.then((resp) => {
				let arr = [];
				for (let i = resp.data.matches.length - 1; i >= 0; i--) {
					let temp = bobaList.find((boba) => boba.id === resp.data.matches[i]);
					if (temp) {
						arr.push(temp);
					}
				}

				setLatestMatches([...arr]);
                setInit(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [focused]);

    if (init) {
        return <Loading />;
    }

	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<ExploreBackground></ExploreBackground>
			</View>

			<Container title='BobaBliss' scroll>
				<SearchBar />
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
							key={item}
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
							<Image source={item} style={{ width: '100%', height: '100%', borderRadius: 25 }}></Image>
						</View>
					)}
				/>
				<View style={{ flex: 1 }}>
					<Text style={[styles.title, { paddingLeft: 20 }]}>Discover Boba</Text>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ display: 'flex', paddingVertical: 20, paddingHorizontal: 20, width: width }}
						contentContainerStyle={{ gap: 20, paddingRight: 40 }}
					>
						{bobaList.map((boba) => (
							<TouchableOpacity
								key={boba.id}
								style={{ width: 100, height: 100, borderRadius: 15 }}
								onPress={() =>
									router.navigate({
										pathname: '/bobaMatch',
										params: { id: boba.id, back: '/home' }
									})
								}
							>
								<Image source={boba.img} style={{ height: '100%', width: '100%', borderRadius: 15 }}></Image>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
				{latestMatches.length === 0 && (
					<>
						<Text style={[styles.title]}>Your Latest Matches</Text>
						<NoMatchesYet />
					</>
				)}
				{latestMatches.length > 0 && (
					<View style={{ flex: 1 }}>
						<Text style={[styles.title, { paddingLeft: 20 }]}>Your Latest Matches</Text>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							style={{ display: 'flex', paddingVertical: 20, paddingHorizontal: 20, width: width }}
							contentContainerStyle={{ gap: 20, paddingRight: 40 }}
						>
							{latestMatches.map((match) => (
								<TouchableOpacity
									key={match.id}
									style={{ width: 100, height: 100, borderRadius: 15 }}
									onPress={() =>
										router.navigate({
											pathname: '/bobaMatch',
											params: { id: match.id, back: '/home' }
										})
									}
								>
									<Image source={match.img} style={{ height: '100%', width: '100%', borderRadius: 15 }}></Image>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				)}
				<View>
					<Text style={[styles.title, { paddingLeft: 20 }]}>Popular Posts</Text>
					<ScrollView
						showsVerticalScrollIndicator={false}
						// showsHorizontalScrollIndicator={false}
						// snapToInterval={370}
						// snapToAlignment='start'
						// decelerationRate='fast'
						style={{ display: 'flex', paddingVertical: 20, paddingHorizontal: 20, width: width }}
						contentContainerStyle={{ gap: 20, paddingBottom: 25, alignItems: 'center' }}
					>
						{reviewList.map((review) => (
							<Review review={review} key={review.content} home></Review>
						))}
					</ScrollView>
				</View>
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
	},
	matchesRow: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		gap: 20
	}
});
