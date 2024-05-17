import HomeLogo from '@/components/navigation/HomeLogo';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@/constants/Colors';

import BobaSelect from '@/components/navigation/BobaSelect';
import HomeSelect from '@/components/navigation/HomeSelect';
import MsgLogo from '@/components/navigation/MsgLogo';
import MsgSelect from '@/components/navigation/MsgSelect';
import PfpLogo from '@/components/navigation/PfpLogo';
import PfpSelect from '@/components/navigation/PfpSelect';
import StarLogo from '@/components/navigation/StarLogo';
import StarSelect from '@/components/navigation/StarSelect';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					paddingBottom: 0,
					position: 'absolute',
					left: 16,
					right: 16,
					bottom: 19,
					backgroundColor: '#FFFFFF',
					display: 'flex',
					alignItems: 'center',
					elevation: 20,
					height: 80,
					borderRadius: 37.5,
					paddingHorizontal: 10,
					shadowOffset: {
						width: 0,
						height: 12
					},
					shadowOpacity: 0.58,
					shadowRadius: 16.0
				},

				tabBarActiveTintColor: Colors['light'].tint,
				headerShown: false,
				tabBarShowLabel: false
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (focused ? <HomeSelect /> : <HomeLogo />)
				}}
			/>
			<Tabs.Screen
				name='reviews'
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <StarSelect /> : <StarLogo />)
				}}
			/>
			<Tabs.Screen
				name='matching'
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (
						<View
							style={{
								shadowOffset: {
									width: 0,
									height: 4
								},
								shadowOpacity: 0.25,
								shadowRadius: 4
							}}
						>
							<LinearGradient
								colors={['#E78481', '#EACBAD']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={{
									height: 75,
									width: 75,
									marginBottom: 50,
									borderRadius: 100,
									paddingRight: 3,
									paddingBottom: 2,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									shadowOffset: {
										width: 0,
										height: 4
									},
									shadowOpacity: 0.25,
									shadowRadius: 4
								}}
							>
								<BobaSelect></BobaSelect>
							</LinearGradient>
						</View>
					)
				}}
			/>

			<Tabs.Screen
				name='matches'
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <MsgSelect /> : <MsgLogo />)
				}}
			/>

			<Tabs.Screen
				name='preferences'
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <PfpSelect /> : <PfpLogo />)
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	imgTab: {
		height: 37,
		width: 40
	}
});
