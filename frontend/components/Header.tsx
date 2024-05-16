import { StyleSheet, View } from 'react-native';
import { MenuButton } from './MenuButton';
const Header = () => {
	return (
		<View style={styles.header}>
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
	}
});

export default Header;
