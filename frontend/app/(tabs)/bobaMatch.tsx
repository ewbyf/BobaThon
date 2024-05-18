import BobaMatchContainer from '@/components/BobaMatchContainer';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BobaProfile from '@/components/BobaProfile';

function BobaMatch() {
	const [boba, setBoba] = useState<IBoba>();
	const [init, setInit] = useState(true);
	const { id } = useLocalSearchParams();
	const [selected, setSelected] = useState('origin');

	useEffect(() => {
		setBoba(bobaList.find((bob) => bob.id == Number(id)));
		setInit(false);
	}, []);

	if (init) {
		return null; // replace loading
	}

	return (
		<BobaMatchContainer title='Matches'>
			<Image source={boba?.img} style={styles.bobaImage}></Image>
            <BobaProfile boba={boba}/>
			{/* <Text style={styles.bobaName}>{boba?.name}</Text>
			<View style={styles.buttons}>
				<TouchableOpacity onPress={() => setSelected('origin')} style={[styles.clickable]}>
					<LinearGradient colors={selected === 'origin' ? ['#E9B2B0', '#E8948E'] : ['#EAC9AF', '#EAC9AF']} style={styles.buttonGradient}>
						<Text style={[styles.clickableText]}>ORIGIN</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setSelected('ingredients')} style={[styles.clickable]}>
					<LinearGradient colors={selected === 'ingredients' ? ['#E9B7B6', '#E89089'] : ['#EAC9AF', '#EAC9AF']} style={styles.buttonGradient}>
						<Text style={[styles.clickableText]}>INGREDIENTS</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setSelected('reviews')} style={[styles.clickable]}>
					<LinearGradient colors={selected === 'reviews' ? ['#E9B7B6', '#E89089'] : ['#EAC9AF', '#EAC9AF']} style={styles.buttonGradient}>
						<Text style={[styles.clickableText]}>REVIEWS</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
			<View style={styles.display}>
				<Text style={styles.displayText}>somehow display origin</Text>
			</View> */}
		</BobaMatchContainer>
	);
}

const styles = StyleSheet.create({
    bobaImage: {
		width: '100%',
		height: 400,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bobaName: {
		fontSize: 20,
        fontFamily: 'OverpassBold',
		color: '#6f5c63'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	clickable: {
		backgroundColor: 'transparent',
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	clickableText: {
		color: 'white',
		fontFamily: 'OverpassBlack',
		fontSize: 16
	},
	buttonGradient: {
		paddingVertical: 10,
		paddingHorizontal: 18,
		borderRadius: 15
	},
    display: {
		width: '100%',
		height: 230,
		backgroundColor: '#f9e4e5',
		color: '#89757b',
		borderRadius: 10,
		padding: 40,
		marginBottom: 50
	},
	displayText: {
		fontFamily: 'Overpass',
        fontSize: 15,
		color: '#6F5C63'
	},
});

export default BobaMatch;
