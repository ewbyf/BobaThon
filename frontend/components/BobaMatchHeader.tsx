import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuButton } from './MenuButton';

import { router } from 'expo-router';

const BobaMatchHeader = ({ title, back }: { title: string, back: string }) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={{width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
				onPress={() => {
					router.navigate(back)
				}}
			>
				<Ionicons name='chevron-back-outline' size={30} color='#6f5c63' />
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
			<MenuButton></MenuButton>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 60,
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		fontFamily: 'OverpassExtraBold',
		fontSize: 24,
		color: '#6F5C63',
		textAlign: 'center',
		flex: 1,
		right: 15
	}
});

export default BobaMatchHeader;
