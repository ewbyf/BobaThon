import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

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
import BeforePref from '@/components/BeforePref';
import MatchButton from '@/components/MatchButton';

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
		return <Loading />;
	}

	if (matches.length == 0) {
		return (
			<>
				<View style={{ position: 'absolute', top: 0, left: 0, zIndex: -2 }}>
					<BeforePref />
				</View>

				<Container title={'Matches'} background={false}>
					<View style={styles.box}>
						<Text style={styles.header}>No mathces yet!</Text>
						<MatchButton />

						<View style={styles.textCont}>
							<Text style={styles.header}>Start Swiping</Text>
							<Text style={[styles.header, { marginTop: 5, marginBottom: 8 }]}>and</Text>
							<Text style={styles.header}>Find Your Perfect Drink!</Text>
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
			<Container title="Matches" scroll>
				<View style={styles.searchbar}>
					<Ionicons name="search" size={30} color="#a38f93" />
					<TextInput placeholder="Search for Boba" placeholderTextColor="#a38f93" style={styles.searchInput}></TextInput>
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
		width: '100%',
	},
	separateMatches: {
		display: 'flex',
		gap: 20,
		width: '100%',
		alignItems: 'center',
		paddingBottom: 50,
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
		height: 50,
	},
	searchInput: {
		color: '#a38f93',
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
