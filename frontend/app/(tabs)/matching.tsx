import BobaCard from '@/components/BobaCard';
import Container from '@/components/Container';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { interpolate, useAnimatedReaction, useDerivedValue, useSharedValue, withDecay, withSpring, runOnJS } from 'react-native-reanimated';

export default function MatchingScreen() {
	const [bobas, setBobas] = useState<IBoba[]>([]);
	const activeIndex = useSharedValue(0);
	const [index, setIndex] = useState(0);

	const [refreshing, setRefreshing] = useState(false);

	useAnimatedReaction(
		() => activeIndex.value,
		(value, prevValue) => {
			if (Math.floor(value) !== index) {
				runOnJS(setIndex)(Math.floor(value));
			}
		}
	);

	useEffect(() => {
		if (index > bobas.length - 3) {
			console.warn('Last 2 cards remining. Fetch more!');
			setBobas((bobs) => [...bobs, ...bobs.reverse()]);
		}
	}, [index]);

	const onResponse = (res: boolean) => {
		console.log('on Response: ', res);
	};

	// TODO: FIX BUG WITH SPACING ON TOP OF SCROLLVIEW

	const resetBobaList = () => {
		setBobas(bobaList);
		// remove previously matched bobas
		// shuffle(bobas);
		setIndex(0);
	};

	useEffect(() => {
		resetBobaList();
	}, []);

	// if (bobas.length == 0 || index == bobas.length) {
	// 	return (
	// 		<Container title="Find Your Boba">
	// 			<ScrollView
	// 				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
	// 				showsVerticalScrollIndicator={false}
	// 				style={[styles.scrollView, { display: 'flex' }]}
	// 				contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
	// 			>
	// 				<Text>No bobas left! Consider increasing your radius</Text>
	// 			</ScrollView>
	// 		</Container>
	// 	);
	// }

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Stack.Screen options={{ headerShown: false }} />

			{bobas.map((boba, i) => (
				<BobaCard boba={boba} numOfBobas={bobas.length} index={i} activeIndex={activeIndex} onResponse={onResponse} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({});
