import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Text, ScrollView, Button } from 'react-native';
import { router } from "expo-router";

export default function TastePreferenceScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Taste preferences</Text>
        <Button title="Navigate" onPress={() => router.push('/index')}></Button>
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
