import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './Header';
const Container = ({ children }: { children: any }) => {
	return (
		<LinearGradient
			colors={['#EACBAD', '#E9B7B6']}
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				height: '100%'
			}}
		>
			<SafeAreaView style={styles.container}>
                <Header></Header>
                {children}
            </SafeAreaView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		marginTop: 5,
		gap: 15
	}
});

export default Container;
