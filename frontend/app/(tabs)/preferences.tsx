import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PreferenceScreen() {
	const [sweet, setSweet] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [creamy, setCreamy] = useState(false);
	const [herbal, setHerbal] = useState(false);
	const [nutty, setNutty] = useState(false);
	const [fruity, setFruity] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<Image source={require('../../assets/images/DrinkSelection.png')} style={{ height: 150 }} resizeMode='contain'></Image>
			<Text style={[styles.title, { textAlign: 'center' }]}>What are you feeling today?</Text>
			<Text style={styles.description}>Customize your preference and let us find your perfect match!</Text>
			<Text style={styles.title}>Taste</Text>
			<View style={styles.column}>
				<View style={styles.row}>
					<TouchableOpacity onPress={() => setSweet(!sweet)} style={[styles.clickable, { backgroundColor: sweet ? 'blue' : 'grey' }]}>
						<Text>Sweet</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setRefreshing(!refreshing)} style={[styles.clickable, { backgroundColor: refreshing ? 'blue' : 'grey' }]}>
						<Text>refreshing</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setCreamy(!creamy)} style={[styles.clickable, { backgroundColor: creamy ? 'blue' : 'grey' }]}>
						<Text>creamy</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity onPress={() => setHerbal(!herbal)} style={[styles.clickable, { backgroundColor: herbal ? 'blue' : 'grey' }]}>
						<Text>herbal</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setNutty(!nutty)} style={[styles.clickable, { backgroundColor: nutty ? 'blue' : 'grey' }]}>
						<Text>nuttty</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setFruity(!fruity)} style={[styles.clickable, { backgroundColor: fruity ? 'blue' : 'grey' }]}>
						<Text>Fruity</Text>
					</TouchableOpacity>
				</View>
			</View>
            <View style={[styles.row, {marginTop: 'auto', marginBottom: 35}]}>
                <TouchableOpacity onPress={() => {}} style={[styles.button]}>
                    <Text>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={[styles.button, {marginLeft: 'auto'}]}>
                    <Text>next</Text>
                </TouchableOpacity>
            </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		padding: 20,
		marginHorizontal: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		width: '100%'
	},
	description: {
		textAlign: 'center',
		maxWidth: '75%'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
        width: '100%',
	},
	column: {
		display: 'flex',
		gap: 20,
		width: '100%',
		marginTop: 10
	},
	clickable: {
		backgroundColor: 'grey',
		height: 100,
		width: 100,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
    }
});
