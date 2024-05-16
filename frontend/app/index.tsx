import { Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

const Index = () => {
	const [token, setToken] = useState('');
	useEffect(() => {
		const userToken = SecureStore.getItem('token');
		if (userToken) {
			setToken(userToken);
		}
	}, []);

	if (token) {
		return <Redirect href='/home' />;
	}
	return <Redirect href='/main' />;
};

export default Index;
