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
				{reviewList.map((review) => (
					<Review review={review}></Review>
				))}
			</Container>
		</>
	);
}

const styles = StyleSheet.create({});
