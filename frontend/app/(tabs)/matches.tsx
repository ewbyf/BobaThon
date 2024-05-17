import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";

import { Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Container from "@/components/Container";
import BobaBlock from "@/components/matches/BobaBlock";
import api from "@/services/axiosConfig";
import * as SecureStore from "expo-secure-store";

type Boba = {
  name: String;
  description: String;
  store: String;
  // img: Images.SweetTaroSagoLatte,
  tags: String[];
  cost: String;
  stars: number;
  popularToppings: String[];
  reviews: String[];
};

export default function MatchesScreen() {
  const [matches, setMatches] = useState<Boba[]>([]);

  async function getMatches() {
    const response = await api.get("/matches", {
      params: { token: "617d6beb-a61f-42ee-9f6a-de6ce8083609" },
    });
    setMatches(response.data.matches);
  }

  function startShowingMessage() {
    setInterval(getMatches, 10000);
  }

  startShowingMessage;

  //use a useeffect to constantly update the bobas
  return (
    <Container title="Matches">
      {/*add a bobablock per each match */}
      <View style={styles.searchbar}>
        <Ionicons name="search" size={30} color="#a38f93" />
        <TextInput
          placeholder="Search for Boba"
          placeholderTextColor="#a38f93"
          style={styles.searchInput}
        ></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.separateMatches}>
          {matches.map((match: Boba, i) => (
            <BobaBlock
              label={match.name}
              rating={3}
              description={match.description}
              key={i}
            />
          ))}
          <Text onPress={() => getMatches()}>press this </Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  separateMatches: {
    display: "flex",
    gap: 20,
    width: "100%",
    alignItems: "center",
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
  searchInput: {
    color: "#a38f93",
  },
});
