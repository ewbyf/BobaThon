import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoMatchesYet = () => (
	<View style={styles.cont}>
		<Text style={styles.text}>Oops! No matches yet! Start swiping to get recommendations and find a match!</Text>
		<TouchableOpacity
			style={styles.btn}
			onPress={() =>
				router.navigate({
					pathname: '/matching'
				})
			}
		>
			<LinearGradient
				colors={['#E88C86', '#EAC2A8']}
				start={{ x: 0, y: 0.5 }}
				style={{
					width: '100%',
					height: '100%',
					borderRadius: 20,
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 25,
					paddingVertical: 12
				}}
			>
				<Text style={styles.btnText}>Find a match!</Text>
			</LinearGradient>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	cont: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		gap: 10
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 45,
		backgroundColor: '#F7E2E6',
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
		elevation: 3,
		marginBottom: 10
	},
	btnText: {
		color: '#6F5C63',
		fontFamily: 'OverpassBold',
		fontSize: 16
	},
	text: {
		fontSize: 16,
		color: '#6F5C63',
		fontFamily: 'Overpass',
		textAlign: 'center'
	}
});

export default NoMatchesYet;
