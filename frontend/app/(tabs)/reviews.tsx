import Container from '@/components/Container';
import Review from '@/components/Review';
import SearchBar from '@/components/SearchBar';
import DefaultBackground from '@/components/backgrounds/DefaultBackground';
import { reviewList } from '@/data/reviewList';
import { StyleSheet, View } from 'react-native';

export default function ReviewsScreen() {
	return (
		<>
			<View style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
				<DefaultBackground></DefaultBackground>
			</View>
			<Container title='Reviews' scroll>
				<SearchBar />
                <View style={styles.separate}>
				{reviewList.map((review, i) => (
					<Review review={review} key={i}></Review>
				))}
                </View>

			</Container>
		</>
	);
}

const styles = StyleSheet.create({
    separate: {
		display: 'flex',
		gap: 20,
		width: '100%',
		alignItems: 'center',
        paddingBottom: 50,
	},
});
