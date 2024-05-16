import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HomeLogo from '@/components/navigation/HomeLogo';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

import HomeSelect from '@/components/navigation/HomeSelect';
import StarLogo from '@/components/navigation/StarLogo';
import StarSelect from '@/components/navigation/StarSelect';
import PfpSelect from '@/components/navigation/PfpSelect';
import PfpLogo from '@/components/navigation/PfpLogo';
import MsgSelect from '@/components/navigation/MsgSelect';
import MsgLogo from '@/components/navigation/MsgLogo';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					left: 16,
					right: 16,
					bottom: 19,
					backgroundColor: '#FFFFFF',
					elevation: 24,
					height: 100,
					borderRadius: 45,
					// padding: 10,
					shadowOffset: {
						width: 0,
						height: 12,
					},
					shadowOpacity: 0.58,
					shadowRadius: 16.0,
				},

				tabBarActiveTintColor: Colors['light'].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (focused ? <HomeSelect /> : <HomeLogo />),
				}}
			/>
			<Tabs.Screen
				name="reviews"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <StarSelect /> : <StarLogo />),
				}}
			/>
			<Tabs.Screen
				name="matching"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
				}}
			/>

			<Tabs.Screen
				name="matches"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <MsgSelect /> : <MsgLogo />),
				}}
			/>

			<Tabs.Screen
				name="preferences"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (focused ? <PfpSelect /> : <PfpLogo />),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	imgTab: {
		height: 37,
		width: 40,
	},
});
