import Container from '@/components/Container';
import ExploreBackground from '@/components/backgrounds/ExploreBackground';
import { Images } from '@/lib/images';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import { IBoba } from '@/interfaces/interfaces';
import { bobaList } from '@/data/bobaList';

export default function HomeScreen() {
	const width = Dimensions.get('window').width;
	const [latestMatches, setLatestMatches] = useState<IBoba[]>([]);

	useEffect(() => {
		const token = getStorage('token');
        api.get(`/me?token=${token}`)
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
								height: 200,
							}}
						>
							<Image source={item} style={{ width: '100%', height: '100%', borderRadius: 25 }} resizeMode='cover'></Image>
						</View>
					)}
				/>
				<Text style={styles.title}>Your Latest Matches</Text>
                {(!latestMatches || latestMatches.length === 0) && <Text>No matches yet!</Text>}
				<Text style={styles.title}>Popular Posts</Text>
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
	}
});
