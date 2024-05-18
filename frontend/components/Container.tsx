import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import MenuModal from './MenuModal';

const Container = ({ children, background, title, scroll }: { children: any; background?: boolean; title: string; scroll?: boolean }) => {
	const [modalOpen, setModalOpen] = useState(false);

	if (scroll) {
		return (
			<SafeAreaView>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ height: '100%', paddingHorizontal: 20, display: 'flex' }}
					contentContainerStyle={{ alignItems: 'center', gap: 20, paddingBottom: 50 }}
				>
					<MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
					<Header title={title} setModal={setModalOpen}></Header>
					{children}
				</ScrollView>
			</SafeAreaView>
		);
	}

	if (background === undefined || background === true) {
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
					<MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
					<Header title={title} setModal={setModalOpen}></Header>
					{children}
				</SafeAreaView>
			</LinearGradient>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			<MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
			<Header title={title} setModal={setModalOpen}></Header>
			{children}
		</SafeAreaView>
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
		gap: 15,
		zIndex: 5
	}
});

export default Container;
