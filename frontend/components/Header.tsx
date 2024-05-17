import { StyleSheet, View, Text } from 'react-native';
import { MenuButton } from './MenuButton';
import Flower from './icons/Flower';
const Header = ({ title }: { title: string }) => {
	return (
		<View style={styles.header}>
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
		justifyContent: 'space-between',
	},
    title: {
        fontFamily: 'OverpassExtraBold',
        fontSize: 24,
        color: '#6F5C63',
        textAlign: 'center',
        flex: 1,
    }
});

export default Header;
