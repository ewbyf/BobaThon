import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Container from '@/components/Container';
import DefaultBackground from '@/components/backgrounds/DefaultBackground';
import BobaBlock from '@/components/matches/BobaBlock';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Loading from '@/components/Loading';

export default function MatchesScreen() {
	const [matches, setMatches] = useState<IBoba[]>([]);
	const [init, setInit] = useState(true);
	const focused = useIsFocused();

	useEffect(() => {
		if (focused) {
			const token = getStorage('token');
			if (token) {
				api.get(`matches?token=${token}`)
					.then((resp) => {
						let arr = [];
						for (let i = 0; i < resp.data.matches.length; i++) {
							let temp = bobaList.find((boba) => boba.id === resp.data.matches[i]);
							if (temp) {
								arr.push(temp);
							}
						}

						setMatches([...arr]);
						setInit(false);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	}, [focused]);

	if (init) {
		return <Loading/>;
	}

	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<DefaultBackground></DefaultBackground>
			</View>
			<Container title='Matches' scroll>
				<View style={styles.searchbar}>
					<Ionicons name='search' size={30} color='#a38f93' />
					<TextInput placeholder='Search for Boba' placeholderTextColor='#a38f93' style={styles.searchInput}></TextInput>
				</View>
				<View style={styles.separateMatches}>
					{matches.map((match: IBoba, i) => (
						<BobaBlock boba={match} key={i} />
					))}
				</View>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		width: '100%'
	},
	separateMatches: {
		display: 'flex',
		gap: 20,
		width: '100%',
		alignItems: 'center',
		paddingBottom: 50
	},
	searchbar: {
		display: 'flex',
		flexDirection: 'row',
		gap: 3,
		borderColor: 'grey',
		backgroundColor: '#f9e4e4',
		borderRadius: 15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: '90%',
		height: 50
	},
	searchInput: {
		color: '#a38f93'
	}
});
