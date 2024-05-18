import { router } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import MainMenuBackground from '@/components/backgrounds/MainMenuBackground';

function UserScreen() {
	return (
        <>
            <View style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                    <MainMenuBackground></MainMenuBackground>
			</View>                    
            <Image source={require('@/assets/images/logo.png')} style={{position: 'absolute', top: '34%', left: '20%', width: 275, height: 275}}></Image>
            <SafeAreaView style={{ flex: 1 }}>
				<View style={styles.initial}>
					<TouchableOpacity style={styles.signinButton} onPress={() => router.push('/signin')}>
						<Text style={styles.text}>Log In</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.signupButton} onPress={() => router.push('/signup')}>
						<Text style={styles.text}>Register</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
        </>


	);
}

const styles = StyleSheet.create({
	initial: {
		margin: 8,
		marginTop: 'auto',
		marginBottom: 50,
		display: 'flex',
		alignItems: 'center',
		gap: 30,
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
		shadowOffset: { width: 0, height: 3 },
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
		shadowOffset: { width: 0, height: 3 },
	},
	text: {
		width: '100%',
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'OverpassBold',
		color: '#6F5C63',
	},
});

export default UserScreen;
