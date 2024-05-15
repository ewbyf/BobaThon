import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Text, ScrollView, Button } from 'react-native';
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        <Button title="Navigate" onPress={() => router.push('../(preferences)/tastepreference')}></Button>
        <Text>hi</Text>
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
