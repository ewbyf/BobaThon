import { MenuButton } from '@/components/MenuButton';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: 'white'
		}
	};

	return (
		<ThemeProvider value={MyTheme}>
			<Stack
				screenOptions={{
					header: (props) => (
						<View
							style={{
								height: 100,
								backgroundColor: 'transparent',
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								alignItems: 'center',
								paddingTop: 40,
								paddingHorizontal: 20,
								justifyContent: 'space-between'
							}}
						>
							<Image source={require('../assets/images/DrinkSelection.png')} style={{ height: 50, width: 20 }} resizeMode='contain'></Image>
							<MenuButton />
						</View>
					),
					headerTransparent: false
				}}
			>
				<Stack.Screen name='(tabs)' options={{ headerShown: true }} />
				<Stack.Screen name='+not-found' options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	);
}

