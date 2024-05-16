import BackArrow from '@/components/BackArrow';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import api from '@/services/axiosConfig';
import { router } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSignUp = async () => {
		try {
			const response = await api.post('/signup', {
				name: name,
				email: email,
				password: password
			});
			const data = await response;
			console.log(data.data);
			console.log(data.status);
			console.log('SUCESS');
		} catch (error) {
			console.log('ERROR');
			console.log(error);
		}

		setName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};
	return (
		<ImageBackground source={require('../../assets/images/SignUp2.png')} imageStyle={{ resizeMode: 'cover' }} style={{ height: '100%', width: '100%' }}>
			<SafeAreaView>
				<View style={styles.header}>
					<BackArrow></BackArrow>
				</View>

				<View style={styles.initial}>
					<View style={styles.formInputs}>
						<FormField label='Name' value={name} setValue={setName} isPassword={false} />
						<FormField label='Email' value={email} setValue={setEmail} isPassword={false} />
						<FormField label='Password' value={password} setValue={setPassword} isPassword={true} />
						<FormField label='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} isPassword={true} />
					</View>

					<Text style={styles.signin}>
						Already have an account?{" "}
						<Text style={styles.signinText} onPress={() => router.push('/signin')}>
							Sign In
						</Text>
					</Text>

					<View style={styles.signup}>
						<CustomButton pressFunction={handleSignUp} />
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
		marginTop: 50
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
	signup: {
		marginLeft: 270,
		marginTop: 40
	},
	signin: {
		width: '100%',
		textAlign: 'center',
		marginTop: 13,
		color: '#6f5c63'
	},
	signinText: {
		color: '#6f5c63',
		fontWeight: '600'
	}
});

export default SignUp;
