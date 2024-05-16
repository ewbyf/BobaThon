import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";

import { Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Container from "@/components/Container";
import BobaBlock from "@/components/matches/BobaBlock";

export default function MatchesScreen() {
  //use a useeffect to constantly update the bobas
  return (
    <Container>
      {}
      {/*add a bobablock per each match */}
      <View style={styles.searchbar}>
        <Ionicons name="search" size={30} color="#a38f93" />
        <TextInput
          placeholder="Search for Boba"
          placeholderTextColor="#a38f93"
        ></TextInput>
      </View>
      <View style={styles.separateMatches}>
        <BobaBlock label="first one" />
        <BobaBlock label="second one" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  separateMatches: {
    display: "flex",
    gap: 20,
  },
  searchbar: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    borderColor: "grey",
    backgroundColor: "#f9e4e4",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "90%",
    height: 50,
  },
});
