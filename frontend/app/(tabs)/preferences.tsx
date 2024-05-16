import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

export default function PreferenceScreen() {
	const [page, setPage] = useState(1);
	const [sweet, setSweet] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [creamy, setCreamy] = useState(false);
	const [herbal, setHerbal] = useState(false);
	const [nutty, setNutty] = useState(false);
	const [fruity, setFruity] = useState(false);
	const [hot, setHot] = useState(false);
	const [cold, setCold] = useState(false);
	const [nutAllergy, setNutAllergy] = useState(false);
	const [glutenFree, setGlutenFree] = useState(false);
	const [soyAllergy, setSoyAllergy] = useState(false);
	const [lactose, setLactose] = useState(false);
	const [sugarFree, setSugarFree] = useState(false);
	const [caffeineFree, setCaffeineFree] = useState(false);
	const [location, setLocation] = useState(5);

	return (
		<SafeAreaView style={styles.container}>
			<Image source={require('../../assets/images/DrinkSelection.png')} style={{ height: 150 }} resizeMode='contain'></Image>
			<Text style={[styles.title, { textAlign: 'center' }]}>What are you feeling today?</Text>
			<Text style={styles.description}>Customize your preference and let us find your perfect match!</Text>
			{page == 1 && (
				<>
					<View style={styles.sectionTitleContainer}>
						<Text style={styles.sectionTitleText}>TASTE</Text>
					</View>
					<View style={styles.column}>
						<View style={styles.row}>
							<TouchableOpacity onPress={() => setSweet(!sweet)} style={[styles.clickable, { backgroundColor: sweet ? 'blue' : 'grey' }]}>
								<Text>Sweet</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => setRefreshing(!refreshing)}
								style={[styles.clickable, { backgroundColor: refreshing ? 'blue' : 'grey' }]}
							>
								<Text>refreshing</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setCreamy(!creamy)} style={[styles.clickable, { backgroundColor: creamy ? 'blue' : 'grey' }]}>
								<Text>creamy</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.row}>
							<TouchableOpacity onPress={() => setHerbal(!herbal)} style={[styles.clickable, { backgroundColor: herbal ? 'blue' : 'grey' }]}>
								<Text>herbal</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setNutty(!nutty)} style={[styles.clickable, { backgroundColor: nutty ? 'blue' : 'grey' }]}>
								<Text>nutty</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setFruity(!fruity)} style={[styles.clickable, { backgroundColor: fruity ? 'blue' : 'grey' }]}>
								<Text>Fruity</Text>
							</TouchableOpacity>
						</View>
					</View>
				</>
			)}
			{page == 2 && (
				<>
					<View style={styles.sectionTitleContainer}>
						<Text style={styles.sectionTitleText}>TEMP</Text>
					</View>
					<View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 30 }]}>
						<TouchableOpacity
							onPress={() => setHot(!hot)}
							style={[styles.clickable, { backgroundColor: hot ? 'blue' : 'grey', height: 150, width: 150 }]}
						>
							<Text>Hot</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setCold(!cold)}
							style={[styles.clickable, { backgroundColor: cold ? 'blue' : 'grey', height: 150, width: 150 }]}
						>
							<Text>Cold</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
			{page == 3 && (
				<>
					<View style={styles.sectionTitleContainer}>
						<Text style={styles.sectionTitleText}>DIETARY RESTRICTIONS</Text>
					</View>
					<View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 30, flexWrap: 'wrap' }]}>
						<TouchableOpacity
							onPress={() => setNutAllergy(!nutAllergy)}
							style={[styles.clickable, { backgroundColor: nutAllergy ? 'blue' : 'grey', height: 60, width: 120 }]}
						>
							<Text>Nut allergy</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setGlutenFree(!glutenFree)}
							style={[styles.clickable, { backgroundColor: glutenFree ? 'blue' : 'grey', height: 60, width: 120 }]}
						>
							<Text>Gluten-free</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setSoyAllergy(!soyAllergy)}
							style={[styles.clickable, { backgroundColor: soyAllergy ? 'blue' : 'grey', height: 60, width: 120 }]}
						>
							<Text>Soy allergy</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
			{page == 4 && (
				<>
					<View style={styles.sectionTitleContainer}>
						<Text style={styles.sectionTitleText}>LOCATION</Text>
					</View>

					{/* <Slider value={location} onSlidingComplete={(value) => setLocation(value)} minimumValue={5} maximumValue={50} step={5} /> */}
					<Text>{location} miles</Text>
					<Slider
						style={{ width: '100%', height: 40 }}
						minimumValue={5}
						maximumValue={50}
						minimumTrackTintColor='#E88985'
						maximumTrackTintColor='#D7D7D7'
						thumbTintColor='#6F5C63'
						value={location}
						onValueChange={(e) => {
							setLocation(e);
						}}
						step={5}
					/>
					<MapView
						initialRegion={{
							latitude: 47.6545887800112,
							longitude: -122.30545611222443,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421
						}}
						style={styles.map}
					>
						<Circle
							center={{ latitude: 47.6545887800112, longitude: -122.30545611222443 }}
							radius={(location * 1609.34) / 2}
							fillColor='rgba(136, 206, 240, .5)'
							strokeColor='rgb(69, 156, 199)'
						/>
						<Marker
							coordinate={{
								latitude: 47.66737562827992,
								longitude: -122.31148955694742
							}}
							titleVisibility='visible'
							title='Yifang Taiwan Fruit Tea UW'
						/>
						<Marker
							coordinate={{
								latitude: 47.613455536257206,
								longitude: -122.31938328835254
							}}
							titleVisibility='visible'
							title='Drip Tea'
						/>
					</MapView>
				</>
			)}
			<View style={[styles.row, { marginTop: 'auto', marginBottom: 35 }]}>
				{page > 1 && (
					<TouchableOpacity onPress={() => setPage(page - 1)} style={[styles.button]}>
						<Text>back</Text>
					</TouchableOpacity>
				)}
				<TouchableOpacity onPress={() => setPage(page + 1)} style={[styles.button, { marginLeft: 'auto' }]}>
					<Text>next</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		padding: 20,
		marginHorizontal: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		width: '100%'
	},
	sectionTitleContainer: {
		backgroundColor: '#EAC9AF',
		marginRight: 'auto',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 10
	},
	sectionTitleText: {
		fontSize: 20,
		color: 'white',
        fontFamily: 'OverpassBlack'
	},
	description: {
		textAlign: 'center',
		maxWidth: '75%'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	column: {
		display: 'flex',
		gap: 20,
		width: '100%',
		marginTop: 10
	},
	clickable: {
		backgroundColor: 'grey',
		height: 100,
		width: 100,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		width: 100,
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	map: {
		width: 200,
		height: 200
	}
});
