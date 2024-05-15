import { router } from 'expo-router';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<Text>A</Text>
				<Text>B</Text>
			</View>
			<TextInput placeholder='Search' style={styles.searchbar}></TextInput>
			<Button title='Navigate' onPress={() => router.push('../(preferences)/tastepreference')}></Button>
			<Text style={styles.title}>Latest matches</Text>
			<Text style={styles.title}>Popular Reviews</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		padding: 20,
		marginHorizontal: 20,
		marginTop: 60,
		gap: 15
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%'
	},
	searchbar: {
		borderWidth: 1.5,
		borderColor: 'grey',
		borderRadius: 50,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: '100%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		width: '100%'
	}
});

