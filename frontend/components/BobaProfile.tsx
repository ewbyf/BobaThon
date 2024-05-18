import { IBoba } from '@/interfaces/interfaces';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Review from './Review';

const BobaProfile = ({ boba, noBorder }: { boba: IBoba | undefined, noBorder ?: boolean }) => {
	if (boba) {
		return (
			<View style={[styles.container, {borderRadius: noBorder ? 0 : 15, paddingTop: noBorder ? 10 : 30}]}>
				<View>
					<Text style={styles.title}>{boba.name}</Text>
					<StarRatingDisplay rating={boba.stars} starStyle={{ marginHorizontal: 0, marginBottom: 10 }} starSize={20} color='#E9A898' />
					<Text style={styles.description}>{boba.description}</Text>
				</View>
				<View>
					<Text style={styles.title}>Categories</Text>
					<View style={styles.row}>
						{boba.tags.map((tag) => (
							<View key={tag} style={styles.tagContainer}>
								<Text style={styles.tagText}>{tag}</Text>
							</View>
						))}
					</View>
				</View>
				<View>
					<Text style={styles.title}>Popular Toppings</Text>
					<View style={styles.row}>
						{boba.popularToppings.map((tag) => (
							<View key={tag} style={styles.tagContainer}>
								<Text style={styles.tagText}>{tag}</Text>
							</View>
						))}
					</View>
				</View>
				<View>
					<Text style={styles.title}>Location</Text>
					<View style={styles.row}>
						<View style={styles.tagContainer}>
							<Text style={styles.tagText}>{boba.store}</Text>
						</View>
					</View>
				</View>
                <View>
					<Text style={styles.title}>What People Say</Text>
					<View style={styles.row}>
						{boba.reviews.map((review, i) => (
							// <Review review={review} key={i}></Review>
                            <View style={styles.review}>
                                <Text style={styles.tagText}>{review.author}</Text>
                                <StarRatingDisplay rating={review.stars} starStyle={{ marginHorizontal: 0, marginTop: 2, marginBottom: 7.5 }} starSize={20} color='#E9A898' />
                                <Text style={styles.description}>{review.content}</Text>
                            </View>
						))}
					</View>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		paddingHorizontal: 20,
		paddingVertical: 30,
		backgroundColor: 'white',
		width: '100%',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
		gap: 30,
	},
	title: {
		fontFamily: 'OverpassBold',
		fontSize: 20,
		color: '#6F5C63',
		marginBottom: 10
	},
	description: {
		fontFamily: 'Overpass',
		fontSize: 15,
		color: '#6F5C63'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
		flexWrap: 'wrap',
		rowGap: 10
	},
	tagContainer: {
		paddingVertical: 6,
		paddingHorizontal: 15,
		backgroundColor: '#F8E3E5',
		borderRadius: 15
	},
	tagText: {
		fontFamily: 'OverpassBold',
		fontSize: 16,
		color: '#6F5C63'
	},
    review: {
        display: 'flex',
        backgroundColor: '#fceee4bf',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 25,
        // shadowOffset: {
		// 	width: 0,
		// 	height: 4
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 6,
    }
});

export default BobaProfile;
