import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { shuffle } from '@/lib/shuffle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCallback, useEffect, useState } from 'react';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    }

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
			<SafeAreaView style={styles.container}>
				<ScrollView
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    showsVerticalScrollIndicator={false}
					style={[styles.scrollView, { display: 'flex' }]}
                    contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
				>
					<Text>No bobas left! Consider increasing your radius</Text>
				</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				snapToInterval={600}
				showsVerticalScrollIndicator={false}
				snapToAlignment='start'
				decelerationRate={0.9}
				disableIntervalMomentum={true}
                contentContainerStyle={{justifyContent: 'flex-start'}}
			>
				<View style={styles.card}>
					<Image source={require('../../assets/images/DrinkSelection.png')} style={{ height: 450 }} resizeMode='contain'></Image>
					<TouchableOpacity style={styles.reject} onPress={reject}>
						<Ionicons size={28} name='close-outline' color='white'></Ionicons>
					</TouchableOpacity>
					<TouchableOpacity style={styles.accept} onPress={match}>
						<Ionicons size={28} name='checkmark-outline' color='white'></Ionicons>
					</TouchableOpacity>
				</View>
				<View style={styles.aboutSection}>
					<View style={styles.descriptionContainer}>
                        <Text>{bobas[index].name}</Text>
                    </View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		marginTop: 5,
		gap: 15
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
		alignItems: 'center'
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
		alignItems: 'center'
	},
	aboutSection: {
		height: 600
	},
	descriptionContainer: {
		height: 200,
		width: '100%',
		backgroundColor: 'grey',
		borderRadius: 20
	}
});
