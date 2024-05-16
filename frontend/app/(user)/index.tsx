import { router } from 'expo-router';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function UserScreen() {
	return (
		<ImageBackground
			source={require('../../assets/images/mainmenu.png')}
			imageStyle={{ resizeMode: 'cover' }}
			style={{ height: '100%', width: '100%' }}
		>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.initial}>
					<TouchableOpacity style={styles.signinButton} onPress={() => router.push('/signin')}>
						<Text style={styles.text}>Log In</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.signupButton} onPress={() => router.push('/signup')}>
						<Text style={styles.text}>Register</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.signupButton} onPress={() => router.push('/home')}>
						<Text style={styles.text}>temp</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	initial: {
		margin: 8,
		marginTop: 'auto',
		marginBottom: 50,
		display: 'flex',
		gap: 30
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
		shadowColor: 'rgba(0, 0, 0)',
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
		shadowColor: 'rgba(0, 0, 0)',
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

export default UserScreen;
