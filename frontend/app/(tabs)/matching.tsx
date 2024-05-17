import BobaCard from '@/components/BobaCard';
import Container from '@/components/Container';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { shuffle } from '@/lib/shuffle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCallback, useEffect, useState } from 'react';
import { Image, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { SwipeGesture } from 'react-native-swipe-gesture-handler';

export default function MatchingScreen() {
	const [bobas, setBobas] = useState<IBoba[]>([]);
	const [index, setIndex] = useState(0);
	const [refreshing, setRefreshing] = useState(false);

	// TODO: FIX BUG WITH SPACING ON TOP OF SCROLLVIEW


	const resetBobaList = () => {
		setBobas(bobaList);
		// remove previously matched bobas
		shuffle(bobas);
		setIndex(0);
	};

	useEffect(() => {
		resetBobaList();
	}, []);

	const reject = () => {
		setIndex(index + 1);
	};

	const match = () => {
		setIndex(index + 1);
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			resetBobaList();
			setRefreshing(false);
		}, 2000);
	}, []);

	if (bobas.length == 0 || index == bobas.length) {
		return (
			<Container>
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
		<Container>
			
				<View style={styles.contCard}>
					<BobaCard boba={bobas[index]} />
				</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	contCard: {
		height: '100%',
		width: '100%',
	},
	scrollView: {
		height: '100%',
		width: '100%',
		display: 'flex',
	},
	card: {
		backgroundColor: 'grey',
		width: '100%',
		display: 'flex',
		borderRadius: 15,
		marginBottom: 30,
	},
	reject: {
		height: 65,
		width: 65,
		backgroundColor: 'red',
		position: 'absolute',
		bottom: -20,
		left: 10,
		borderRadius: 100,
		shadowOffset: { width: 0, height: 3 },
		shadowColor: 'black',
		shadowRadius: 4,
		shadowOpacity: 0.5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	accept: {
		height: 65,
		width: 65,
		backgroundColor: 'lightgreen',
		position: 'absolute',
		bottom: -20,
		right: 10,
		borderRadius: 100,
		shadowOffset: { width: 0, height: 3 },
		shadowColor: 'black',
		shadowRadius: 4,
		shadowOpacity: 0.5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	aboutSection: {
		height: 600,
	},
	descriptionContainer: {
		height: 200,
		width: '100%',
		backgroundColor: 'grey',
		borderRadius: 20,
	},
});
