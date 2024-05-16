import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

type ButtonProps = {
	pressFunction: (event: GestureResponderEvent) => void;
};

const CustomButton = (props: ButtonProps) => {
	return (
		<TouchableOpacity onPress={props.pressFunction}>
			<LinearGradient
				colors={['#EACBAD', '#E9B7B6']}
				style={
					{
                        height: 70,
                        width: 70,
                        borderRadius: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
					}
				}
			>
				<Ionicons
					size={36}
					style={[{ marginLeft: 5, marginTop: -3 }]}
					name='chevron-forward-outline'
                    color="white"
					// onPress={() => {
					// 	router.push('/');
					// }}
				/>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomButton;
