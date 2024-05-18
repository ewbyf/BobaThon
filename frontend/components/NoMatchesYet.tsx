import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import {} from 'expo-router';
import { router } from 'expo-router';
import { LinearGradient } from 'react-native-svg';

const NoMatchesYet = () => (
	<View style={styles.cont}>
		<Text style={styles.text}>Oops! No matches yet! Start swiping to get recommendations and find a match!</Text>
		<TouchableOpacity
			style={styles.btn}
			onPress={() =>
				router.navigate({
					pathname: '/matching',
				})
			}
		>
			<Text style={styles.btnText}>Find a match!</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	cont: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
	},
	btn: {
		height: 20,
		backgroundColor: 'green',
	},
	btnText: {
		color: '#6F5C63',
		fontFamily: 'OverpassBold',
		fontSize: 16,
	},
	text: {
		fontSize: 18,
		color: '#6F5C63',
		fontFamily: 'Overpass',
		width: '89%',
	},
});

export default NoMatchesYet;
