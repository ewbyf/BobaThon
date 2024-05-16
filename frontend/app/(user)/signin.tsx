import BackArrow from '@/components/BackArrow';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import SignInBackground from '@/components/SignInBackground';
import api from '@/services/axiosConfig';
import { router } from 'expo-router';

import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { save } from '@/lib/storage';

function SignIn() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSignIn = async () => {
		try {
			const response = await api.post('/login', {
				email: email,
				password: password
			});
			save('token', response.data.token);
			router.navigate('/home');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
				<SignInBackground></SignInBackground>
			</View>
			<SafeAreaView style={{ flex: 1 }}>
				<KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
					<View style={styles.header}>
						<BackArrow></BackArrow>
					</View>
					<View style={styles.formInputs}>
						<FormField label='Email' placeholder='Enter your email' value={email} setValue={setEmail} isPassword={false} />

						<FormField label='Password' placeholder='Enter your password' value={password} setValue={setPassword} isPassword={true} />
					</View>
					<Text style={styles.signup}>
						Don't have an account?{' '}
						<Text style={styles.signupText} onPress={() => router.navigate('/signup')}>
							Sign Up
						</Text>
					</Text>

					<View style={styles.signin}>
						<CustomButton pressFunction={handleSignIn} />
					</View>
				</KeyboardAwareScrollView>

				{/* </View> */}
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 50
	},
	formInputs: {
		display: 'flex',
		gap: 25,
		marginTop: 'auto'
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
