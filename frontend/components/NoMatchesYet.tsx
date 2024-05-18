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
					pathname: '/preferences',
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
		gap: 20,
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 45,
		width: '45%',
		backgroundColor: '#F7E2E6',
		borderRadius: 27,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	btnText: {
		color: '#6F5C63',
		fontFamily: 'OverpassBold',
		fontSize: 18.4,
	},
	text: {
		fontSize: 18,
		color: '#6F5C63',
		fontFamily: 'Overpass',
		width: '89%',
	},
});

export default NoMatchesYet;
