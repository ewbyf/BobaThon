import BackArrow from '@/components/BackArrow';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import api from '@/services/axiosConfig';
import { router } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function SignIn() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSignIn = async () => {
		try {
			const response = await api.post('/login', {
				email: email,
				password: password
			});

			//Do smth with token
			console.log('SUCESS');
		} catch (error) {
			console.log('ERROR');
			console.log(error);
		}

		setEmail('');
		setPassword('');
	};
	return (
		<ImageBackground source={require('../../assets/images/SignUp2.png')} imageStyle={{ resizeMode: 'cover' }} style={{ height: '100%', width: '100%' }}>
			<SafeAreaView>
				<View style={styles.header}>
					<BackArrow></BackArrow>
				</View>
				<View style={styles.initial}>
					<View style={styles.formInputs}>
						<FormField label='Email' value={email} setValue={setEmail} isPassword={false} />

						<FormField label='Password' value={password} setValue={setPassword} isPassword={true} />
					</View>
					<Text style={styles.signup}>
						Don't have an account?{" "}
						<Text style={styles.signupText} onPress={() => router.push('/signup')}>
							Sign Up
						</Text>
					</Text>

					<View style={styles.signin}>
						<CustomButton pressFunction={handleSignIn} />
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 50
	},
	initial: {
		margin: 8,
		marginTop: 300
	},
	formInputs: {
		display: 'flex',
		gap: 25
	},
	input: {
		borderWidth: 1,
		height: 50,
		backgroundColor: 'lightblue',
		textDecorationColor: 'white'
	},
	signin: {
		marginLeft: 270,
		marginTop: 40
	},
	signup: {
		width: '100%',
		textAlign: 'center',
		marginTop: 13,
		color: '#6f5c63'
	},
	signupText: {
		color: '#6f5c63',
		fontWeight: '600'
	}
});

export default SignIn;
