import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

const BackArrow = () => (
	<Ionicons
		name='chevron-back-outline'
		size={30}
		color='white'
		style={styles.backArrow}
		onPress={() => {
			router.navigate('/')
		}}
	/>
);

const styles = StyleSheet.create({
	backArrow: {
		position: 'absolute',
		left: 20,
		bottom: '50%',
		marginBottom: -15,
		zIndex: 10
	}
});

export default BackArrow;
