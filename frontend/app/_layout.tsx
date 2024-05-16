import { MenuButton } from '@/components/MenuButton';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Image, View } from 'react-native';


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

				<Stack
					// screenOptions={{
					// 	header: (props) => (
					// 		<View
					// 			style={{
					// 				height: 100,
					// 				backgroundColor: 'transparent',
					// 				display: 'flex',
					// 				flexDirection: 'row',
					// 				width: '100%',
					// 				alignItems: 'center',
					// 				paddingTop: 40,
					// 				paddingHorizontal: 20,
					// 				justifyContent: 'space-between'
					// 			}}
					// 		>
					// 			<Image source={require('../assets/images/DrinkSelection.png')} style={{ height: 50, width: 20 }} resizeMode='contain'></Image>
					// 			<MenuButton />
					// 		</View>
					// 	),
					// 	headerTransparent: false
					// }}
				>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen name='+not-found' options={{ headerShown: false }} />
				</Stack>
	

	);
}

