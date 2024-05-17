import { IReview } from '@/interfaces/interfaces';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const Review = ({ review }: { review: IReview }) => {
	return (
		<View style={styles.post}>
			<View style={{ width: '45%', height: '100%', borderRadius: 25 }}>
				<Image source={review.img} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 25 }}></Image>
			</View>

			<View style={styles.postContent}>
				<Text style={styles.title}>{review.name}</Text>
				<Text style={styles.name}>{review.author}</Text>
				<StarRatingDisplay rating={review.stars} starStyle={{ marginHorizontal: 0, marginTop: 3, marginBottom: 8 }} starSize={20} color='#E9A898' />
				<Text style={styles.description}>{review.content}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontFamily: 'OverpassBold',
		textAlign: 'left',
		width: '100%',
		color: '#6F5C63'
	},
	post: {
		width: 350,
		height: 250,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.25,
		shadowRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 15,
		alignItems: 'center',
		gap: 10,
		padding: 15
	},
	postContent: {
		display: 'flex',
		justifyContent: 'flex-start',
		height: '100%',
		flex: 1,
		paddingVertical: 10
	},
	name: {
		fontSize: 16,
		fontFamily: 'OverpassLight',
		textAlign: 'left',
		color: '#6F5C63',
		marginLeft: 3
	},
	description: {
		fontSize: 16,
		fontFamily: 'OverpassLight',
		color: '#6F5C63'
	}
});

export default Review;
