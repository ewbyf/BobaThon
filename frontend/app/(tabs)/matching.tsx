import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';

import { Text, ScrollView } from 'react-native';

export default function MatchingScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',

		padding: 20,
	},
});
