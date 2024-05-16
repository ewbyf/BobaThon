import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

	const [loaded] = useFonts({
		OverpassExtraLight: require('../assets/fonts/Overpass-ExtraLight.ttf'),
		OverpassLight: require('../assets/fonts/Overpass-Light.ttf'),
		Overpass: require('../assets/fonts/Overpass-Regular.ttf'),
		OverpassMedium: require('../assets/fonts/Overpass-Medium.ttf'),
		OverpassSemiBold: require('../assets/fonts/Overpass-SemiBold.ttf'),
		OverpassBold: require('../assets/fonts/Overpass-Bold.ttf'),
		OverpassExtraBold: require('../assets/fonts/Overpass-ExtraBold.ttf'),
		OverpassBlack: require('../assets/fonts/Overpass-Black.ttf')
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack initialRouteName='/' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='(auth)' options={{ headerShown: false }} />
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen name='+not-found' options={{ headerShown: false }} />
		</Stack>
	);
}
