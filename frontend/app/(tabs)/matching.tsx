import BobaCard from '@/components/BobaCard';
import Container from '@/components/Container';
import Left from '@/components/icons/Left';
import Right from '@/components/icons/Right';
import { bobaList } from '@/data/bobaList';
import { IBoba, IPreferences } from '@/interfaces/interfaces';
import { shuffle } from '@/lib/shuffle';
import { useCallback, useEffect, useState } from 'react';
import { ImageSourcePropType, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { runOnJS, useAnimatedReaction, useSharedValue } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import api from '@/services/axiosConfig';
import { getStorage } from '@/lib/storage';
import Match from '@/components/Match';
import First from '@/components/icons/First';
import Second from '@/components/icons/Second';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Loading from '@/components/Loading';
import BeforePref from '@/components/BeforePref';

export default function MatchingScreen() {
	const [bobas, setBobas] = useState<IBoba[]>([]);
	const activeIndex = useSharedValue(0);
	const [index, setIndex] = useState(0);
	const [refreshing, setRefreshing] = useState(false);
	const [swipe, setSwipe] = useState('0b');
	const focused = useIsFocused();
	const [init, setInit] = useState(true);
	const [hasSetPreferences, setHasSetPreferences] = useState(false);
	const [preferences, setPreferences] = useState<IPreferences>();
	const [match, setMatch] = useState(false);
    const [lastMatch, setLastMatch] = useState<ImageSourcePropType>();

	useAnimatedReaction(
		() => activeIndex.value,
		(value, prevValue) => {
			if (Math.floor(value) !== index) {
				runOnJS(setIndex)(Math.floor(value));
			}
		}
	);

	const onResponse = (res: boolean) => {
		if (res) {
			accept();
		}
	};

	useEffect(() => {
		if (focused) {
			resetBobaList();
		}
	}, [focused]);

	const resetBobaList = () => {
		const token = getStorage('token');
		api.get(`/me?token=${token}`)
			.then((resp) => {
				setHasSetPreferences(resp.data.hasSetPreferences);
				setPreferences(resp.data.preferences);
				api.get(`/matches?token=${token}`)
					.then((resp2) => {
						const matches = resp2.data.matches;
						let tempList = [...bobaList.filter((boba) => !matches.includes(boba.id))];
						shuffle(tempList);
						setBobas([...tempList]);
						setIndex(0);
						setSwipe('0b');
						activeIndex.value = 0;
						setInit(false);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const accept = () => {
		const boba = bobas[Math.floor(activeIndex.value)];
		if ((boba.tags.includes('Cold') && preferences?.cold) || (boba.tags.includes('Hot') && preferences?.hot)) {
			if ((preferences?.caffeineFree && boba.tags.includes('Caffeine-free')) || !preferences?.caffeineFree) {
				if ((preferences?.lactose && boba.tags.includes('Lactose-free')) || !preferences?.lactose) {
					let total = 0;
					let count = 0;
					if (preferences?.sweet) {
						total++;
						if (boba.tags.includes('Sweet')) {
							count++;
						}
					}
					if (preferences?.refreshing) {
						total++;
						if (boba.tags.includes('Refreshing')) {
							count++;
						}
					}
					if (preferences?.creamy) {
						total++;
						if (boba.tags.includes('Creamy')) {
							count++;
						}
					}
					if (preferences?.herbal) {
						total++;
						if (boba.tags.includes('Herbal')) {
							count++;
						}
					}
					if (preferences?.fruity) {
						total++;
						if (boba.tags.includes('Fruity')) {
							count++;
						}
					}
					if (preferences?.nutty) {
						total++;
						if (boba.tags.includes('Nutty')) {
							count++;
						}
					}
					if (count / total > 0.3) {
						// successful match!
						const token = getStorage('token');
						api.post('/matches', {
							token,
							match: bobas[Math.floor(activeIndex.value)].id,
						})
							.then((resp) => {
                                setLastMatch(bobas[Math.floor(activeIndex.value)].img);
								setMatch(true);
							})
							.catch((err) => {
								console.log(err);
							});
					}
				}
			}
		}
	};

	const onLeft = () => {
		setSwipe(activeIndex.value.toString() + 'r');
	};

	const onRight = () => {
		setSwipe(Math.floor(activeIndex.value).toString() + 'a');
		accept();
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			resetBobaList();
			setRefreshing(false);
		}, 2000);
	}, []);

	if (init) {
		return <Loading/>;
	}

	if (!hasSetPreferences) {
		return (
			<>
				<View style={{ position: 'absolute', top: 0, left: 0, zIndex: -2 }}>
					<BeforePref />
				</View>

				<Container title={"Let's go!"} background={false}>
					<View style={styles.box}>
						<First />
						<Text style={styles.header}>Set Up Preferences!</Text>
						<Second />
						<View style={styles.textCont}>
							<Text style={styles.header}>Get Personalized Recomendations</Text>
							<Text style={[styles.header, { marginTop: 5, marginBottom: 8 }]}>and</Text>
							<Text style={styles.header}>Match with the Boba of Your Dreams!</Text>
						</View>
						<TouchableOpacity
							onPress={() =>
								router.navigate({
									pathname: '/preferences',
								})
							}
							style={styles.btn}
						>
							<LinearGradient
								colors={['#EAC5A9', '#E88984']}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
							>
								<LinearGradient
									colors={['#E98C86', '#E0A694']}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={{
										backgroundColor: 'white',
										width: '100%',
										height: '100%',
										borderRadius: 13,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text style={{ fontFamily: 'OverpassBold', fontSize: 29, color: 'white' }}>Start</Text>
								</LinearGradient>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</Container>
			</>
		);
	}

	if (match) {
		return <Match img={lastMatch} setMatch={setMatch}></Match>;
	}

	if (bobas.length == 0 || index == bobas.length) {
		return (
			<Container title="Find Your Match">
				<ScrollView
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
					showsVerticalScrollIndicator={false}
					style={[styles.scrollView, { display: 'flex' }]}
					contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<Text>No bobas left! Consider increasing your radius</Text>
				</ScrollView>
			</Container>
		);
	}

	return (
		<Container title="Find Your Match">
			<View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
				{bobas.map((boba, i) => (
					<BobaCard key={boba.id} boba={boba} numOfBobas={bobas.length} index={i} activeIndex={activeIndex} onResponse={onResponse} swipe={swipe} />
				))}

				<TouchableOpacity style={styles.leftButton} onPress={onLeft}>
					<Left />
				</TouchableOpacity>
				<TouchableOpacity style={styles.rightButton} onPress={onRight}>
					<Right />
				</TouchableOpacity>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		height: '100%',
		width: '100%',
		display: 'flex',
	},
	leftButton: {
		position: 'absolute',
		bottom: '13%',
		left: -20,
		zIndex: 999,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
	rightButton: {
		position: 'absolute',
		bottom: '13%',
		right: -20,
		zIndex: 999,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
	// NO PREF SET
	box: {
		height: '100%',
		flex: 1,
		alignItems: 'center',
		width: '100%',
		marginTop: 20,
		gap: 30,
	},
	header: {
		color: 'white',
		fontFamily: 'OverpassBold',
		fontSize: 30,
		textAlign: 'center',
	},
	textCont: {},
	btn: {
		width: 150,
		height: 60,
		backgroundColor: 'white',
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
