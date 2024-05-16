import CancelButton from '@/components/CancelButton';
import Container from '@/components/Container';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import BobaImage from '@/components/BobaImage';

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
		<ImageBackground
			source={require('../../assets/images/preferencebg.png')}
			style={styles.imgBg}
			imageStyle={{
				resizeMode: 'stretch'
			}}
		>
			<Container background={false}>
				{/* <Image source={require('../../assets/images/brownsugarboba.png')} style={{ height: 210 }} resizeMode='contain'></Image> */}
                <BobaImage></BobaImage>
				<View>
					<Text style={[styles.title, { textAlign: 'center' }]}>What are you feeling today?</Text>
					<Text style={styles.description}>Customize your preference and let us find your perfect match!</Text>
				</View>

				{page == 1 && (
					<>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleText}>TASTE</Text>
						</View>
						<View style={styles.column}>
							<View style={styles.row}>
								<TouchableOpacity onPress={() => setSweet(!sweet)} style={[styles.clickable]}>
									{sweet && <CancelButton />}
									<LinearGradient
										colors={sweet ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: sweet ? '100%' : '85%',
											height: sweet ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: sweet ? 'white' : '#6F5C63',
													fontFamily: sweet ? 'OverpassBlack' : 'OverpassBold',
													fontSize: sweet ? 20 : 16
												}
											]}
										>
											Sweet
										</Text>
									</LinearGradient>
								</TouchableOpacity>
                                <TouchableOpacity onPress={() => setRefreshing(!refreshing)} style={[styles.clickable]}>
									{refreshing && <CancelButton />}
									<LinearGradient
										colors={refreshing ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: refreshing ? '100%' : '85%',
											height: refreshing ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: refreshing ? 'white' : '#6F5C63',
													fontFamily: refreshing ? 'OverpassBlack' : 'OverpassBold',
													fontSize: refreshing ? 20 : 16
												}
											]}
										>
											Refreshing
										</Text>
									</LinearGradient>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => setCreamy(!creamy)} style={[styles.clickable]}>
									{creamy && <CancelButton />}
									<LinearGradient
										colors={creamy ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: creamy ? '100%' : '85%',
											height: creamy ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: creamy ? 'white' : '#6F5C63',
													fontFamily: creamy ? 'OverpassBlack' : 'OverpassBold',
													fontSize: creamy ? 20 : 16
												}
											]}
										>
											Creamy
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
							<View style={styles.row}>
                            <TouchableOpacity onPress={() => setHerbal(!herbal)} style={[styles.clickable]}>
									{herbal && <CancelButton />}
									<LinearGradient
										colors={herbal ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: herbal ? '100%' : '85%',
											height: herbal ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: herbal ? 'white' : '#6F5C63',
													fontFamily: herbal ? 'OverpassBlack' : 'OverpassBold',
													fontSize: herbal ? 20 : 16
												}
											]}
										>
											Herbal
										</Text>
									</LinearGradient>
								</TouchableOpacity>
                                <TouchableOpacity onPress={() => setNutty(!nutty)} style={[styles.clickable]}>
									{nutty && <CancelButton />}
									<LinearGradient
										colors={nutty ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: nutty ? '100%' : '85%',
											height: nutty ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: nutty ? 'white' : '#6F5C63',
													fontFamily: nutty ? 'OverpassBlack' : 'OverpassBold',
													fontSize: nutty ? 20 : 16
												}
											]}
										>
											Nutty
										</Text>
									</LinearGradient>
								</TouchableOpacity>
                                <TouchableOpacity onPress={() => setFruity(!fruity)} style={[styles.clickable]}>
									{fruity && <CancelButton />}
									<LinearGradient
										colors={fruity ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: fruity ? '100%' : '85%',
											height: fruity ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: fruity ? 'white' : '#6F5C63',
													fontFamily: fruity ? 'OverpassBlack' : 'OverpassBold',
													fontSize: fruity ? 20 : 16
												}
											]}
										>
											Fruity
										</Text>
									</LinearGradient>
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
				<View style={[styles.row, { marginTop: 'auto', marginBottom: 30 }]}>
					{page > 1 && (
						<TouchableOpacity onPress={() => setPage(page - 1)} style={[styles.button]}>
							<Text>back</Text>
						</TouchableOpacity>
					)}
					<TouchableOpacity onPress={() => setPage(page + 1)} style={[styles.button, { marginLeft: 'auto' }]}>
						<Text>next</Text>
					</TouchableOpacity>
				</View>
			</Container>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontFamily: 'OverpassBold',
		color: '#6F5C63',
		textAlign: 'left',
		width: '100%'
	},
	imgBg: {
		width: '100%',
		height: '100%'
	},
	sectionTitleContainer: {
		backgroundColor: '#EAC9AF',
		marginRight: 'auto',
		paddingTop: 6,
		paddingBottom: 3,
		paddingHorizontal: 18,
		borderRadius: 12,
		display: 'flex',
		zIndex: 3,
		position: 'relative'
	},
	sectionTitleText: {
		fontSize: 20,
		color: 'white',
		fontFamily: 'OverpassBlack',
		zIndex: 3,
		position: 'relative'
	},
	description: {
		textAlign: 'center',
		maxWidth: '75%',
		zIndex: 3,
		position: 'relative'
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
		marginTop: 5
	},
	clickable: {
		backgroundColor: 'transparent',
		height: 110,
		width: 110,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	clickableText: {
		marginTop: 'auto',
		marginHorizontal: 'auto',
		marginBottom: 10
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
	},
	cancel: {
		position: 'absolute',
		top: -10,
		right: -10,
		zIndex: 3,
		height: 30,
		width: 30
	}
});
