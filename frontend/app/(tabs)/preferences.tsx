import BobaImage from '@/components/BobaImage';
import CancelButton from '@/components/CancelButton';
import Container from '@/components/Container';
import EditButton from '@/components/EditButton';
import EditIcon from '@/components/EditIcon';
import GradientText from '@/components/GradientText';
import Loading from '@/components/Loading';
import MatchButton from '@/components/MatchButton';
import DefaultBackground from '@/components/backgrounds/DefaultBackground';
import PreferenceBackground from '@/components/backgrounds/PreferenceBackground';
import Flower from '@/components/icons/Flower';
import IceCube from '@/components/icons/IceCube';
import MarkerIcon from '@/components/icons/Marker';
import Strawberry from '@/components/icons/Strawberry';
import { getStorage } from '@/lib/storage';
import api from '@/services/axiosConfig';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import Toast from 'react-native-toast-message';

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
	const [hasSetPreferences, setHasSetPreferences] = useState(false);
	const [init, setInit] = useState(true);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		const token = getStorage('token');
		api.get(`/me?token=${token}`)
			.then((resp) => {
				setHasSetPreferences(resp.data.hasSetPreferences);
				if (resp.data.hasSetPreferences) {
					setSweet(resp.data.preferences.sweet);
					setRefreshing(resp.data.preferences.refreshing);
					setCreamy(resp.data.preferences.creamy);
					setHerbal(resp.data.preferences.herbal);
					setNutty(resp.data.preferences.nutty);
					setFruity(resp.data.preferences.fruity);
					setHot(resp.data.preferences.hot);
					setCold(resp.data.preferences.cold);
					setNutAllergy(resp.data.preferences.nutAllergy);
					setGlutenFree(resp.data.preferences.glutenFree);
					setSoyAllergy(resp.data.preferences.soyAllergy);
					setLactose(resp.data.preferences.lactose);
					setSugarFree(resp.data.preferences.sugarFree);
					setCaffeineFree(resp.data.preferences.caffeineFree);
					setLocation(resp.data.preferences.location);
				}
				setInit(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const savePreferences = () => {
		const token = getStorage('token');
		setPage(1);
		api.post('/preferences', {
			preferences: {
				sweet,
				refreshing,
				creamy,
				herbal,
				nutty,
				fruity,
				hot,
				cold,
				nutAllergy,
				glutenFree,
				soyAllergy,
				lactose,
				sugarFree,
				caffeineFree,
				location
			},
			token
		})
			.then((resp) => {
                Toast.show({
                    type: 'success',
                    text1: 'Preferences Saved',
                    text2: "You're ready to start matching!",
                    text1Style: {
                        fontSize: 15
                    },
                    text2Style: {
                        fontSize: 14
                    }
                });
            })
			.catch((err) => {
				console.log(err);
			});
	};

	const beginMatching = () => {
		const token = getStorage('token');
		api.post('/preferences', {
			preferences: {
				sweet,
				refreshing,
				creamy,
				herbal,
				nutty,
				fruity,
				hot,
				cold,
				nutAllergy,
				glutenFree,
				soyAllergy,
				lactose,
				sugarFree,
				caffeineFree,
				location
			},
			token
		})
			.then((resp) => {
				router.navigate('/matching');
				setHasSetPreferences(true);
				setPage(1);
                Toast.show({
                    type: 'success',
                    text1: 'Preferences Saved',
                    text2: "You're ready to start matching!",
                    text1Style: {
                        fontSize: 15
                    },
                    text2Style: {
                        fontSize: 14
                    }
                });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	if (init) {
		return <Loading/>;
	}

	if (hasSetPreferences) {
		return (
			<>
				{page != 1 ? (
					<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
						<PreferenceBackground></PreferenceBackground>
					</View>
				) : (
					<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
						<DefaultBackground></DefaultBackground>
					</View>
				)}

				<Container background={false} title={'Customize Profile'}>
					<BobaImage></BobaImage>
					{page == 1 && (
						<View style={[styles.editColumn]}>
							<TouchableOpacity style={styles.editPreferences} onPress={() => setEditing(!editing)}>
								<Text style={{ fontSize: 16, fontFamily: 'OverpassBold', color: '#6F5C63' }}>Edit Preferences</Text>
								<EditIcon></EditIcon>
							</TouchableOpacity>
							<View style={styles.editRow}>
								<TouchableOpacity style={styles.editBox} disabled={!editing} onPress={() => setPage(2)}>
									{editing && <EditButton style={{ position: 'absolute', top: -15, right: -15, width: 50, height: 50 }}></EditButton>}
									<Strawberry></Strawberry>
									<Text style={styles.editText}>Taste</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.editBox} disabled={!editing} onPress={() => setPage(3)}>
									{editing && <EditButton style={{ position: 'absolute', top: -15, right: -15, width: 50, height: 50 }}></EditButton>}
									<IceCube></IceCube>
									<Text style={styles.editText}>Temp</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.editRow}>
								<TouchableOpacity style={styles.editBox} disabled={!editing} onPress={() => setPage(4)}>
									{editing && <EditButton style={{ position: 'absolute', top: -15, right: -15, width: 50, height: 50 }}></EditButton>}
									<Flower></Flower>
									<Text style={styles.editText}>Dietary</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.editBox} disabled={!editing} onPress={() => setPage(5)}>
									{editing && <EditButton style={{ position: 'absolute', top: -15, right: -15, width: 50, height: 50 }}></EditButton>}
									<MarkerIcon></MarkerIcon>
									<Text style={styles.editText}>Location</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
					{page == 2 && (
						<>
							<View style={styles.sectionTitleContainer}>
								<Text style={styles.sectionTitleText}>TASTE</Text>
							</View>
							<View style={[styles.column]}>
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
					{page == 3 && (
						<>
							<View style={styles.sectionTitleContainer}>
								<Text style={styles.sectionTitleText}>TEMP</Text>
							</View>
							<View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 10 }]}>
								<TouchableOpacity onPress={() => setHot(!hot)} style={[styles.clickable, { height: 150, width: 120 }]}>
									{hot && <CancelButton />}
									<LinearGradient
										colors={hot ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: hot ? '100%' : '85%',
											height: hot ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: hot ? 'white' : '#6F5C63',
													fontFamily: hot ? 'OverpassBlack' : 'OverpassBold',
													fontSize: hot ? 20 : 16
												}
											]}
										>
											Hot
										</Text>
									</LinearGradient>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => setCold(!cold)} style={[styles.clickable, { height: 150, width: 120 }]}>
									{cold && <CancelButton />}
									<LinearGradient
										colors={cold ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: cold ? '100%' : '85%',
											height: cold ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: cold ? 'white' : '#6F5C63',
													fontFamily: cold ? 'OverpassBlack' : 'OverpassBold',
													fontSize: cold ? 20 : 16
												}
											]}
										>
											Cold
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</>
					)}
					{page == 4 && (
						<>
							<View style={styles.sectionTitleContainer}>
								<Text style={styles.sectionTitleText}>DIETARY</Text>
							</View>
							{/* <View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 30, flexWrap: 'wrap' }]}> */}
							<View style={styles.column}>
								<View style={styles.row}>
									<TouchableOpacity onPress={() => setGlutenFree(!glutenFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{glutenFree && <CancelButton />}
										<LinearGradient
											colors={glutenFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: glutenFree ? '100%' : '85%',
												height: glutenFree ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: glutenFree ? 'white' : '#6F5C63',
														fontFamily: glutenFree ? 'OverpassBlack' : 'OverpassBold',
														fontSize: glutenFree ? 20 : 16
													}
												]}
											>
												Gluten-free
											</Text>
										</LinearGradient>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setLactose(!lactose)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{lactose && <CancelButton />}
										<LinearGradient
											colors={lactose ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: lactose ? '100%' : '85%',
												height: lactose ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: lactose ? 'white' : '#6F5C63',
														fontFamily: lactose ? 'OverpassBlack' : 'OverpassBold',
														fontSize: lactose ? 20 : 16
													}
												]}
											>
												Lactose Intolerant
											</Text>
										</LinearGradient>
									</TouchableOpacity>
								</View>
								<View style={styles.row}>
									<TouchableOpacity onPress={() => setSoyAllergy(!soyAllergy)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{soyAllergy && <CancelButton />}
										<LinearGradient
											colors={soyAllergy ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: soyAllergy ? '100%' : '85%',
												height: soyAllergy ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: soyAllergy ? 'white' : '#6F5C63',
														fontFamily: soyAllergy ? 'OverpassBlack' : 'OverpassBold',
														fontSize: soyAllergy ? 20 : 16
													}
												]}
											>
												Soy Allergy
											</Text>
										</LinearGradient>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setNutAllergy(!nutAllergy)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{nutAllergy && <CancelButton />}
										<LinearGradient
											colors={nutAllergy ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: nutAllergy ? '100%' : '85%',
												height: nutAllergy ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: nutAllergy ? 'white' : '#6F5C63',
														fontFamily: nutAllergy ? 'OverpassBlack' : 'OverpassBold',
														fontSize: nutAllergy ? 20 : 16
													}
												]}
											>
												Nut Allergy
											</Text>
										</LinearGradient>
									</TouchableOpacity>
								</View>
								<View style={styles.row}>
									<TouchableOpacity onPress={() => setSugarFree(!sugarFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{sugarFree && <CancelButton />}
										<LinearGradient
											colors={sugarFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: sugarFree ? '100%' : '85%',
												height: sugarFree ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: sugarFree ? 'white' : '#6F5C63',
														fontFamily: sugarFree ? 'OverpassBlack' : 'OverpassBold',
														fontSize: sugarFree ? 20 : 16
													}
												]}
											>
												Sugar-free
											</Text>
										</LinearGradient>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setCaffeineFree(!caffeineFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
										{caffeineFree && <CancelButton />}
										<LinearGradient
											colors={caffeineFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
											style={{
												width: caffeineFree ? '100%' : '85%',
												height: caffeineFree ? '100%' : '85%',
												borderRadius: 15
											}}
										>
											<Text
												style={[
													styles.clickableText,
													{
														color: caffeineFree ? 'white' : '#6F5C63',
														fontFamily: caffeineFree ? 'OverpassBlack' : 'OverpassBold',
														fontSize: caffeineFree ? 20 : 16
													}
												]}
											>
												Caffeine-free
											</Text>
										</LinearGradient>
									</TouchableOpacity>
								</View>
							</View>
						</>
					)}
					{page == 5 && (
						<>
							<View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<View style={styles.sectionTitleContainer}>
									<Text style={styles.sectionTitleText}>LOCATION</Text>
								</View>
								<Text style={styles.locationText}>{location} miles</Text>
							</View>
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
									title='Yifang Taiwan Fruit Tea UW'
								/>
								<Marker
									coordinate={{
										latitude: 47.613455536257206,
										longitude: -122.31938328835254
									}}
									title='Drip Tea'
								/>
							</MapView>
						</>
					)}
					{page != 1 && (
						<View style={[styles.row, { marginTop: 'auto', marginBottom: 90 }]}>
							{page > 1 && (
								<TouchableOpacity onPress={() => setPage(1)} style={[styles.button]}>
									<LinearGradient
										colors={['#EAC5A9', '#E88984']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
									>
										<LinearGradient
											colors={['#E98C86', '#E0A694']}
											start={{ x: 0, y: 0 }}
											end={{ x: 1, y: 0 }}
											style={{
												backgroundColor: 'white',
												width: '100%',
												height: '100%',
												borderRadius: 13,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<Text style={{ fontFamily: 'OverpassBold', fontSize: 16, color: 'white' }}>BACK</Text>
										</LinearGradient>
									</LinearGradient>
								</TouchableOpacity>
							)}
							{(page == 2 && !sweet && !refreshing && !creamy && !herbal && !fruity && !nutty) ||
							(page == 3 && !hot && !cold) ||
							(page == 4 && !glutenFree && !lactose && !soyAllergy && !nutAllergy && !sugarFree && !caffeineFree) ? (
								<TouchableOpacity disabled style={[styles.button, { marginLeft: 'auto' }]}>
									<LinearGradient
										colors={['#E88985', '#EAC1A7']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
									>
										<View
											style={{
												backgroundColor: 'white',
												width: '100%',
												height: '100%',
												borderRadius: 13,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<GradientText style={{ fontFamily: 'OverpassBold', fontSize: 16 }}>SAVE</GradientText>
										</View>
									</LinearGradient>
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={() => savePreferences()} style={[styles.button, { marginLeft: 'auto' }]}>
									<LinearGradient
										colors={['#EAC5A9', '#E88984']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
									>
										<LinearGradient
											colors={['#E98C86', '#E0A694']}
											start={{ x: 0, y: 0 }}
											end={{ x: 1, y: 0 }}
											style={{
												backgroundColor: 'white',
												width: '100%',
												height: '100%',
												borderRadius: 13,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<Text style={{ fontFamily: 'OverpassBold', fontSize: 16, color: 'white' }}>SAVE</Text>
										</LinearGradient>
									</LinearGradient>
								</TouchableOpacity>
							)}
						</View>
					)}
				</Container>
			</>
		);
	}

	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
				<PreferenceBackground></PreferenceBackground>
			</View>
			<Container background={false} title={'Customize Profile'}>
				<BobaImage></BobaImage>

				{page < 5 && (
					<View>
						<Text style={[styles.title, { textAlign: 'center' }]}>What are you feeling today?</Text>
						<Text style={styles.description}>Customize your preference and let us find your perfect match!</Text>
					</View>
				)}
				{page == 5 && (
					<View>
						<Text style={[styles.title, { textAlign: 'center' }]}>Is this right?</Text>
					</View>
				)}

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
						<View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 10 }]}>
							<TouchableOpacity onPress={() => setHot(!hot)} style={[styles.clickable, { height: 150, width: 120 }]}>
								{hot && <CancelButton />}
								<LinearGradient
									colors={hot ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
									style={{
										width: hot ? '100%' : '85%',
										height: hot ? '100%' : '85%',
										borderRadius: 15
									}}
								>
									<Text
										style={[
											styles.clickableText,
											{
												color: hot ? 'white' : '#6F5C63',
												fontFamily: hot ? 'OverpassBlack' : 'OverpassBold',
												fontSize: hot ? 20 : 16
											}
										]}
									>
										Hot
									</Text>
								</LinearGradient>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setCold(!cold)} style={[styles.clickable, { height: 150, width: 120 }]}>
								{cold && <CancelButton />}
								<LinearGradient
									colors={cold ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
									style={{
										width: cold ? '100%' : '85%',
										height: cold ? '100%' : '85%',
										borderRadius: 15
									}}
								>
									<Text
										style={[
											styles.clickableText,
											{
												color: cold ? 'white' : '#6F5C63',
												fontFamily: cold ? 'OverpassBlack' : 'OverpassBold',
												fontSize: cold ? 20 : 16
											}
										]}
									>
										Cold
									</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</>
				)}
				{page == 3 && (
					<>
						<View style={styles.sectionTitleContainer}>
							<Text style={styles.sectionTitleText}>DIETARY</Text>
						</View>
						{/* <View style={[styles.row, { justifyContent: 'center', gap: 15, marginTop: 30, flexWrap: 'wrap' }]}> */}
						<View style={styles.column}>
							<View style={styles.row}>
								<TouchableOpacity onPress={() => setGlutenFree(!glutenFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{glutenFree && <CancelButton />}
									<LinearGradient
										colors={glutenFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: glutenFree ? '100%' : '85%',
											height: glutenFree ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: glutenFree ? 'white' : '#6F5C63',
													fontFamily: glutenFree ? 'OverpassBlack' : 'OverpassBold',
													fontSize: glutenFree ? 20 : 16
												}
											]}
										>
											Gluten-free
										</Text>
									</LinearGradient>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => setLactose(!lactose)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{lactose && <CancelButton />}
									<LinearGradient
										colors={lactose ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: lactose ? '100%' : '85%',
											height: lactose ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: lactose ? 'white' : '#6F5C63',
													fontFamily: lactose ? 'OverpassBlack' : 'OverpassBold',
													fontSize: lactose ? 20 : 16
												}
											]}
										>
											Lactose Intolerant
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
							<View style={styles.row}>
								<TouchableOpacity onPress={() => setSoyAllergy(!soyAllergy)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{soyAllergy && <CancelButton />}
									<LinearGradient
										colors={soyAllergy ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: soyAllergy ? '100%' : '85%',
											height: soyAllergy ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: soyAllergy ? 'white' : '#6F5C63',
													fontFamily: soyAllergy ? 'OverpassBlack' : 'OverpassBold',
													fontSize: soyAllergy ? 20 : 16
												}
											]}
										>
											Soy Allergy
										</Text>
									</LinearGradient>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => setNutAllergy(!nutAllergy)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{nutAllergy && <CancelButton />}
									<LinearGradient
										colors={nutAllergy ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: nutAllergy ? '100%' : '85%',
											height: nutAllergy ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: nutAllergy ? 'white' : '#6F5C63',
													fontFamily: nutAllergy ? 'OverpassBlack' : 'OverpassBold',
													fontSize: nutAllergy ? 20 : 16
												}
											]}
										>
											Nut Allergy
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
							<View style={styles.row}>
								<TouchableOpacity onPress={() => setSugarFree(!sugarFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{sugarFree && <CancelButton />}
									<LinearGradient
										colors={sugarFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: sugarFree ? '100%' : '85%',
											height: sugarFree ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: sugarFree ? 'white' : '#6F5C63',
													fontFamily: sugarFree ? 'OverpassBlack' : 'OverpassBold',
													fontSize: sugarFree ? 20 : 16
												}
											]}
										>
											Sugar-free
										</Text>
									</LinearGradient>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => setCaffeineFree(!caffeineFree)} style={[styles.clickable, { height: 50, width: 180 }]}>
									{caffeineFree && <CancelButton />}
									<LinearGradient
										colors={caffeineFree ? ['#E9B7B6', '#E89089'] : ['#F8E3E5', '#F9E6E3']}
										style={{
											width: caffeineFree ? '100%' : '85%',
											height: caffeineFree ? '100%' : '85%',
											borderRadius: 15
										}}
									>
										<Text
											style={[
												styles.clickableText,
												{
													color: caffeineFree ? 'white' : '#6F5C63',
													fontFamily: caffeineFree ? 'OverpassBlack' : 'OverpassBold',
													fontSize: caffeineFree ? 20 : 16
												}
											]}
										>
											Caffeine-free
										</Text>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</View>
					</>
				)}
				{page == 4 && (
					<>
						<View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<View style={styles.sectionTitleContainer}>
								<Text style={styles.sectionTitleText}>LOCATION</Text>
							</View>
							<Text style={styles.locationText}>{location} miles</Text>
						</View>
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
								title='Yifang Taiwan Fruit Tea UW'
							/>
							<Marker
								coordinate={{
									latitude: 47.613455536257206,
									longitude: -122.31938328835254
								}}
								title='Drip Tea'
							/>
						</MapView>
					</>
				)}
				{page == 5 && (
					<>
						<View style={[styles.row, { flexWrap: 'wrap', rowGap: 30 }]}>
							<View style={[styles.selectionColumn]}>
								<TouchableOpacity style={[styles.sectionTitleContainer, { marginRight: 0 }]} onPress={() => setPage(1)}>
									<Text style={styles.sectionTitleText}>TASTE</Text>
									<EditButton style={{ position: 'absolute', top: -15, right: -15, width: 40, height: 40 }}></EditButton>
								</TouchableOpacity>
								{sweet && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Sweet</Text>
									</View>
								)}
								{refreshing && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Refreshing</Text>
									</View>
								)}
								{creamy && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Creamy</Text>
									</View>
								)}
								{herbal && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Herbal</Text>
									</View>
								)}
								{fruity && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Fruity</Text>
									</View>
								)}
								{nutty && (
									<View style={[styles.selection, { width: 110 }]}>
										<Text style={styles.selectionText}>Nutty</Text>
									</View>
								)}
							</View>
							<View style={[styles.selectionColumn]}>
								<TouchableOpacity style={[styles.sectionTitleContainer, { marginRight: 0 }]} onPress={() => setPage(2)}>
									<Text style={styles.sectionTitleText}>TEMP</Text>
									<EditButton style={{ position: 'absolute', top: -15, right: -15, width: 40, height: 40 }}></EditButton>
								</TouchableOpacity>
								{hot && (
									<View style={styles.selection}>
										<Text style={styles.selectionText}>Hot</Text>
									</View>
								)}
								{cold && (
									<View style={styles.selection}>
										<Text style={styles.selectionText}>Cold</Text>
									</View>
								)}
							</View>
							<View style={[styles.selectionColumn]}>
								<TouchableOpacity style={[styles.sectionTitleContainer, { marginRight: 0 }]} onPress={() => setPage(3)}>
									<Text style={styles.sectionTitleText}>DIETARY</Text>
									<EditButton style={{ position: 'absolute', top: -15, right: -15, width: 40, height: 40 }}></EditButton>
								</TouchableOpacity>
								{glutenFree && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Gluten-free</Text>
									</View>
								)}
								{lactose && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Lactose</Text>
									</View>
								)}
								{soyAllergy && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Soy Allergy</Text>
									</View>
								)}
								{nutAllergy && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Nut Allergy</Text>
									</View>
								)}
								{sugarFree && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Sugar-free</Text>
									</View>
								)}
								{caffeineFree && (
									<View style={[styles.selection, { width: 125 }]}>
										<Text style={styles.selectionText}>Caffeine-free</Text>
									</View>
								)}
							</View>
							<View style={[styles.selectionColumn]}>
								<TouchableOpacity style={[styles.sectionTitleContainer, { marginRight: 0 }]} onPress={() => setPage(4)}>
									<Text style={styles.sectionTitleText}>LOCATION</Text>
									<EditButton style={{ position: 'absolute', top: -15, right: -15, width: 40, height: 40 }}></EditButton>
								</TouchableOpacity>
								<View style={styles.selection}>
									<Text style={styles.selectionText}>{location} miles</Text>
								</View>
							</View>
						</View>
						<View style={styles.matchContainer}>
							<Text style={styles.matchText}>MATCH ME!</Text>
							<TouchableOpacity onPress={() => beginMatching()}>
								<MatchButton></MatchButton>
							</TouchableOpacity>
						</View>
					</>
				)}
				{page < 5 && (
					<View style={[styles.row, { marginTop: 'auto', marginBottom: 90 }]}>
						{page == 1 ? (
							<TouchableOpacity disabled onPress={() => setPage(page - 1)} style={[styles.button]}>
								<LinearGradient
									colors={['#E88985', '#EAC1A7']}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
								>
									<View
										style={{
											backgroundColor: 'white',
											width: '100%',
											height: '100%',
											borderRadius: 13,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<GradientText style={{ fontFamily: 'OverpassBold', fontSize: 16 }}>BACK</GradientText>
									</View>
								</LinearGradient>
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={() => setPage(page - 1)} style={[styles.button]}>
								<LinearGradient
									colors={['#EAC5A9', '#E88984']}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
								>
									<LinearGradient
										colors={['#E98C86', '#E0A694']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{
											backgroundColor: 'white',
											width: '100%',
											height: '100%',
											borderRadius: 13,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text style={{ fontFamily: 'OverpassBold', fontSize: 16, color: 'white' }}>BACK</Text>
									</LinearGradient>
								</LinearGradient>
							</TouchableOpacity>
						)}
						{(page == 1 && !sweet && !refreshing && !creamy && !herbal && !fruity && !nutty) ||
						(page == 2 && !hot && !cold) ||
						(page == 3 && !glutenFree && !lactose && !soyAllergy && !nutAllergy && !sugarFree && !caffeineFree) ? (
							<TouchableOpacity disabled onPress={() => setPage(page + 1)} style={[styles.button, { marginLeft: 'auto' }]}>
								<LinearGradient
									colors={['#E88985', '#EAC1A7']}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
								>
									<View
										style={{
											backgroundColor: 'white',
											width: '100%',
											height: '100%',
											borderRadius: 13,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<GradientText style={{ fontFamily: 'OverpassBold', fontSize: 16 }}>NEXT</GradientText>
									</View>
								</LinearGradient>
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={() => setPage(page + 1)} style={[styles.button, { marginLeft: 'auto' }]}>
								<LinearGradient
									colors={['#EAC5A9', '#E88984']}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={{ padding: 2, width: '100%', height: '100%', borderRadius: 15 }}
								>
									<LinearGradient
										colors={['#E98C86', '#E0A694']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={{
											backgroundColor: 'white',
											width: '100%',
											height: '100%',
											borderRadius: 13,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text style={{ fontFamily: 'OverpassBold', fontSize: 16, color: 'white' }}>NEXT</Text>
									</LinearGradient>
								</LinearGradient>
							</TouchableOpacity>
						)}
					</View>
				)}
			</Container>
		</>

		// </ImageBackground>
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
		position: 'relative',
		fontFamily: 'Overpass',
		color: '#6F5C63'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	column: {
		display: 'flex',
		gap: 15,
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
		height: 40,
		backgroundColor: 'white',
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	map: {
		width: 200,
		height: 200,
		marginTop: -15
	},
	cancel: {
		position: 'absolute',
		top: -10,
		right: -10,
		zIndex: 3,
		height: 30,
		width: 30
	},
	locationText: {
		fontFamily: 'OverpassBold',
		fontSize: 20,
		color: '#6F5C63'
	},
	selectionColumn: {
		display: 'flex',
		alignItems: 'center',
		gap: 12
	},
	selection: {
		backgroundColor: '#F8E3E5',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 6,
		paddingHorizontal: 12,
		width: 100,
		height: 35,
		borderRadius: 20
	},
	selectionText: {
		fontSize: 16,
		fontFamily: 'OverpassBold',
		color: '#6F5C63'
	},
	matchContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	matchText: {
		fontFamily: 'OverpassBold',
		marginBottom: -5,
		fontSize: 20,
		color: '#6F5C63'
	},
	editPreferences: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
		backgroundColor: 'white',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		shadowRadius: 5,
		marginVertical: 10
	},
	editColumn: {
		display: 'flex',
		alignItems: 'center',
		gap: 15
	},
	editRow: {
		display: 'flex',
		flexDirection: 'row',
		gap: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	editBox: {
		backgroundColor: 'white',
		height: 125,
		width: 125,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	editText: {
		color: '#6F5C63',
		fontSize: 16,
		fontFamily: 'OverpassBold'
	}
});
