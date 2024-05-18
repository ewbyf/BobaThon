import Container from '@/components/Container';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MatchBackground from './backgrounds/MatchBackground';
import Heart from './icons/Heart';

const Match = ({ img, setMatch }: { img: ImageSourcePropType | undefined; setMatch: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<MatchBackground></MatchBackground>
			</View>
			<Container title='Find Your Match' background={false}>
				<Text style={styles.title}>IT'S A MATCH!</Text>
				<Heart style={{ shadowRadius: 5, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 } }} />
				<View style={styles.shadow}>
					<LinearGradient colors={['#E88D87', '#EAC4A9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient}>
						<Image source={img} contentFit='cover' style={{ height: '100%', width: '100%', borderRadius: 250 }}></Image>
					</LinearGradient>
				</View>

				<View style={styles.initial}>
					<TouchableOpacity
						style={styles.signinButton}
						onPress={() => {
							router.navigate('/matches');
							setMatch(false);
						}}
					>
						<Text style={styles.text}>Match History</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.signupButton} onPress={() => setMatch(false)}>
						<Text style={styles.text}>Keep Swiping</Text>
					</TouchableOpacity>
				</View>
			</Container>
		</>
	);
};

const styles = StyleSheet.create({
	gradient: {
		width: 250,
		height: 250,
		borderRadius: 250,
		padding: 5
	},
	shadow: {
		shadowRadius: 20,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 2 }
	},
	title: {
		color: 'white',
		fontFamily: 'OverpassExtraBold',
		fontSize: 36,
		shadowRadius: 5,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 }
	},
	initial: {
		margin: 8,
		marginTop: 'auto',
		marginBottom: 100,
		display: 'flex',
		alignItems: 'center',
		gap: 20
	},
	signinButton: {
		borderRadius: 30,
		height: 65,
		width: 210,
		backgroundColor: '#ffffff',
		color: '#6f5c63',
		fontSize: 16,
		fontWeight: '500',
		padding: 4,
		marginLeft: 80,
		marginRight: 80,
		justifyContent: 'center',
		shadowOpacity: 0.25,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 3 }
	},
	signupButton: {
		borderRadius: 30,
		height: 65,
		width: 210,
		backgroundColor: '#f8e5e3',
		color: '#6f5c63',
		fontSize: 16,
		fontWeight: '500',
		padding: 4,
		marginLeft: 80,
		marginRight: 80,
		justifyContent: 'center',
		shadowOpacity: 0.25,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 3 }
	},
	text: {
		width: '100%',
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'OverpassBold',
		color: '#6F5C63'
	}
});

export default Match;
