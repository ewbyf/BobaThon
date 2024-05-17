import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
	return (
		<View style={styles.searchbar}>
			<Ionicons name='search-outline' color='#98858A' size={24}></Ionicons>
			<TextInput placeholder='Search for boba...' style={styles.innerSearch}></TextInput>
		</View>
	);
};

const styles = StyleSheet.create({
	searchbar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 50,
		paddingHorizontal: 20,
		paddingVertical: 12.5,
		width: '100%',
		backgroundColor: '#F8E3E5'
	},
	innerSearch: {
		flex: 1,
		paddingLeft: 10,
		fontFamily: 'Overpass',
		fontSize: 14,
		color: '#6F5C63'
	}
});

export default SearchBar;
