import Container from '@/components/Container';
import { Images } from '@/lib/images';
import { router } from 'expo-router';
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function HomeScreen() {
	const width = Dimensions.get('window').width;
	return (
		<Container title='Explore Boba'>
			{/* <View style={styles.row}>
			    <Button title='Navigate' onPress={() => router.push('../(preferences)/tastepreference')}></Button>
				<Text>B</Text>
			</View> */}
			<TextInput placeholder='Search' style={styles.searchbar}></TextInput>
			<Carousel
				loop
				width={width}
                height={200}
				autoPlay={true}
				data={[Images.bobaAd1, Images.bobaAd2]}
				scrollAnimationDuration={1000}
				autoPlayInterval={5000}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
                            backgroundColor: 'red',
                            height: 200
						}}
					>
						<Image source={item} style={{ width: '100%', height: '100%' }} resizeMode='contain'></Image>
					</View>
				)}
                style={{margin: 0, height: 200, backgroundColor: 'blue', display: 'flex'}}
			/>
			<Text style={styles.title}>Latest matches</Text>
			<Text style={styles.title}>Popular Reviews</Text>
			<Button onPress={() => router.navigate('/main')} title='aa'></Button>
		</Container>
	);
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%'
	},
	searchbar: {
		borderWidth: 1.5,
		borderColor: 'grey',
		borderRadius: 50,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: '100%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		width: '100%'
	}
});
