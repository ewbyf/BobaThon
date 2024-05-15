import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function MatchingScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} snapToInterval={600} showsVerticalScrollIndicator={false} snapToAlignment='center' decelerationRate={.9} disableIntervalMomentum={true}>
				<View style={styles.card}>
					<Image source={require('../../assets/images/DrinkSelection.png')} style={{ height: 450 }} resizeMode='contain'></Image>
                    <TouchableOpacity style={styles.reject}>
                        <Ionicons size={28} name="close-outline" color='white'></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accept}>
                    <Ionicons size={28} name="checkmark-outline" color='white'></Ionicons>
                    </TouchableOpacity>
				</View>
				<View style={styles.aboutSection}>
					<View style={styles.descriptionContainer}></View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		marginTop: 5,
		gap: 15
	},
	scrollView: {
		height: '100%',
		width: '100%',
		display: 'flex'
	},
	card: {
		backgroundColor: 'grey',
		width: '100%',
		display: 'flex',
		borderRadius: 15,
        marginBottom: 30,
	},
    reject: {
        height: 65,
        width: 65,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: -20,
        left: 10,
        borderRadius: 100,
        shadowOffset: {width: 0, height: 3},
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOpacity: .5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accept: {
        height: 65,
        width: 65,
        backgroundColor: 'lightgreen',
        position: 'absolute',
        bottom: -20,
        right: 10,
        borderRadius: 100,
        shadowOffset: {width: 0, height: 3},
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOpacity: .5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
	aboutSection: {
		height: 600,
	},
	descriptionContainer: {
		height: 200,
		width: '100%',
		backgroundColor: 'grey',
        borderRadius: 20,
	}
});
