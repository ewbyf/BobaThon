import Container from '@/components/Container';
import { StyleSheet, Text, TextInput } from 'react-native';

export default function HomeScreen() {
	return (
		<Container>
			{/* <View style={styles.row}>
			    <Button title='Navigate' onPress={() => router.push('../(preferences)/tastepreference')}></Button>
				<Text>B</Text>
			</View> */}
			<TextInput placeholder='Search' style={styles.searchbar}></TextInput>
			<Text style={styles.title}>Latest matches</Text>
			<Text style={styles.title}>Popular Reviews</Text>
		</Container>
	);
}

const styles = StyleSheet.create({
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
