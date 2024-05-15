import { Image, StyleSheet, Platform, SafeAreaView } from "react-native";

import { Text, ScrollView } from "react-native";
import BobaBlock from "@/components/matches/BobaBlock";

export default function MatchesScreen() {
  //use a useeffect to constantly update the bobas
  return (
    <SafeAreaView style={styles.container}>
      {}
      {/*add a bobablock per each match */}
      <BobaBlock label="first one" />
      <BobaBlock label="second one" />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",

    padding: 20,
  },
});
