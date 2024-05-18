import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import BobaMatchHeader from './BobaMatchHeader';
import SignInBackground from './backgrounds/SignInBackground';

const BobaMatchContainer = ({ children, background, title, back }: { children: any; background?: boolean; title: string, back: string }) => {
	if (background === undefined || background === true) {
		return (
			<>
				<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
					<SignInBackground></SignInBackground>
				</View>

				<SafeAreaView>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{ height: '100%', paddingHorizontal: 20, display: 'flex' }}
						contentContainerStyle={{ alignItems: 'center', gap: 20, paddingBottom: 80 }}
					>
						<BobaMatchHeader title={title} back={back}></BobaMatchHeader>
						{children}
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			<BobaMatchHeader title={title} back={back}></BobaMatchHeader>
			{children}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	backArrow: {
		position: 'absolute',
		left: 5,
		top: 55
	},
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		marginTop: 5,
		gap: 15,
		zIndex: 5
	}
});

export default BobaMatchContainer;
