import Container from '@/components/Container';
import Loading from '@/components/Loading';
import SearchBar from '@/components/SearchBar';
import DefaultBackground from '@/components/backgrounds/DefaultBackground';
import BobaBlock from '@/components/matches/BobaBlock';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BeforePref from '@/components/BeforePref';
import { Text } from 'react-native';
import MatchButton from '@/components/MatchButton';

export default function FavoritesScreen() {
	const [favorites, setFavorites] = useState<IBoba[]>([]);
	const [init, setInit] = useState(true);
	const focused = useIsFocused();

	useEffect(() => {
		const token = getStorage('token');
		api.get(`/favorites?token=${token}`)
			.then((resp) => {
				let arr = [];
				for (let i = 0; i < resp.data.favorites.length; i++) {
					let temp = bobaList.find((boba) => boba.id === resp.data.favorites[i]);
					if (temp) {
						arr.push(temp);
					}
				}

				setFavorites([...arr]);
				setInit(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [focused]);

	if (init) {
		return <Loading />;
	}

	if (favorites.length == 0) {
		return (
			<>
				<View style={{ position: 'absolute', top: 0, left: 0, zIndex: -2 }}>
					<BeforePref />
				</View>

				<Container title={'Favorites'} background={false}>
					<View style={styles.box}>
						<Text style={styles.header}>No favorites yet!</Text>
						<MatchButton />

						<View style={styles.textCont}>
							<Text style={styles.header}>Explore Boba</Text>
							<Text style={[styles.header, { marginTop: 5, marginBottom: 8 }]}>and</Text>
							<Text style={styles.header}>Save the Drinks You Love!</Text>
						</View>
					</View>
				</Container>
			</>
		);
	}

	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<DefaultBackground></DefaultBackground>
			</View>
			<Container title="Favorites" scroll>
				<SearchBar />
				<View style={styles.separate}>
					{favorites.map((fav, i) => (
						<BobaBlock key={i} boba={fav} favorites></BobaBlock>
					))}
				</View>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	separate: {
		display: 'flex',
		gap: 20,
		width: '100%',
		alignItems: 'center',
		paddingBottom: 50,
	},
	box: {
		height: '100%',
		flex: 1,
		alignItems: 'center',
		width: '100%',
		marginTop: '30%',

		gap: 30,
	},
	header: {
		color: 'white',
		fontFamily: 'OverpassBold',
		fontSize: 30,
		textAlign: 'center',
	},
	textCont: {},
});
