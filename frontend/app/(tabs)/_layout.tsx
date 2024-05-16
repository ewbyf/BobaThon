import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					left: 16,
					right: 16,
					bottom: 16,
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
					title: 'Explore',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="matching"
				options={{
					title: 'Matching',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="preferences"
				options={{
					title: 'Preferences',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="reviews"
				options={{
					title: 'Reviews',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="matches"
				options={{
					title: 'Matches',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
				}}
			/>
		</Tabs>
	);
}
