import { IBoba } from '@/interfaces/interfaces';
import { Image } from 'expo-image';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { SharedValue, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const screenWidth = Dimensions.get('screen').width;
export const tinderCardWidth = screenWidth * 0.86;

interface BobaType {
	boba: IBoba;
	numOfBobas: number;
	index: number;
	activeIndex: SharedValue<number>;
	onResponse: (a: boolean) => void;
    swipe: string;
}

const BobaCard = ({ boba, numOfBobas, index, activeIndex, onResponse, swipe }: BobaType) => {
    useEffect(() => {
        if (Number(swipe[0]) === index) {
            if (swipe[1] == 'a') {
                translationX.value = withSpring(500, {
					velocity: 1000
				});
				activeIndex.value = withSpring(index + 1);
            }
            else if (swipe[1] == 'r') {
                translationX.value = withSpring(-500, {
					velocity: -1000
				});
				activeIndex.value = withSpring(index + 1);
            }
        }
    }, [swipe])

	const translationX = useSharedValue(0);

	const animatedCard = useAnimatedStyle(() => ({
		opacity: interpolate(activeIndex.value, [index - 1, index, index + 1], [1 - 1 / 5, 1, 1]),
		transform: [
			{
				scale: interpolate(activeIndex.value, [index - 1, index, index + 1], [0.95, 1, 1])
			},
			{
				translateY: interpolate(activeIndex.value, [index - 1, index, index + 1], [-25, 0, 0])
			},
			{
				translateX: translationX.value * 1.5
			},
			{
				rotateZ: `${interpolate(translationX.value, [-screenWidth / 2, 0, screenWidth / 2], [-15, 0, 15])}deg`
			}
		]
	}));

	const gesture = Gesture.Pan()
		.onChange((event) => {
			translationX.value = event.translationX;

			activeIndex.value = interpolate(Math.abs(translationX.value), [0, 500], [index, index + 0.8]);
		})
		.onEnd((event) => {
			if (Math.abs(event.velocityX) > 400) {
				translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
					velocity: event.velocityX
				});
				activeIndex.value = withSpring(index + 1);

				runOnJS(onResponse)(event.velocityX > 0);
			} else {
				translationX.value = withSpring(0);
			}
		});

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View
				style={[
					styles.card,
					animatedCard,
					{
						zIndex: numOfBobas - index
					}
				]}
			>
				<Image style={styles.image} source={boba.img} />
				{/* <LinearGradient
					colors={['transparent', 'rgba(0,0,0,0.8)']}
					style={[StyleSheet.absoluteFillObject, styles.overlay]}
				/> */}
				<View style={styles.footer}>
					<Text style={styles.name} numberOfLines={1}>{boba.name}</Text>
					<StarRatingDisplay rating={boba.stars} starStyle={{ marginHorizontal: 0, marginBottom: 6 }} starSize={20} color='#E9A898' />
					<Text style={styles.description} numberOfLines={2}>{boba.description}</Text>
				</View>
			</Animated.View>
		</GestureDetector>
	);
};

const styles = StyleSheet.create({
	card: {
		width: tinderCardWidth,
		aspectRatio: 1 / 1.67,
		borderRadius: 15,

		backgroundColor: 'white',
		position: 'absolute',

		// shadow
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
		gap: 10
	},
	image: {
		marginTop: 16,
		alignSelf: 'center',
		borderRadius: 15,
		height: '68%',
		width: '90%'
	},
	overlay: {
		top: '50%',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15
	},
	footer: {
		flex: 1,
		gap: 5,
		padding: 10,
		paddingLeft: 20
	},
	name: {
		fontSize: 24,
		fontFamily: 'OverpassBold',
		color: '#6F5C63'
	},
	description: {
		fontFamily: 'Overpass',
		color: '#6F5C63'
	}
});

export default BobaCard;
