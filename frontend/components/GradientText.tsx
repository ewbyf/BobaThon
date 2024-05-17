import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TextProps } from 'react-native';

const GradientText = (props: TextProps) => {
	return (
		<MaskedView maskElement={<Text {...props} />} >
			<LinearGradient colors={['#E88985', '#EAC1A7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
				<Text {...props} style={[props.style, { opacity: 0 }]} />
			</LinearGradient>
		</MaskedView>
	);
};

export default GradientText;
