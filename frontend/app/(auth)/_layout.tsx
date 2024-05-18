import { Stack } from 'expo-router';

const AuthLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='main' options={{ headerShown: false }} />
			<Stack.Screen name='signin' options={{ headerShown: false }} />
			<Stack.Screen name='signup' options={{ headerShown: false }} />
		</Stack>
	);
};

export default AuthLayout;
