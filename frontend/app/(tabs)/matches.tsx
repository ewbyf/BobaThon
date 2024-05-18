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
import DefaultBackground from "@/components/backgrounds/DefaultBackground";
import * as SecureStore from "expo-secure-store";

type Boba = {
  id: number;
  name: string;
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

  let id: NodeJS.Timeout;

  // const promisifedPingApi = new Promise((resolve, reject) => {
  //   id = setInterval(async () => {
  //     const response = await api.get("/matches", {
  //       params: { token: "617d6beb-a61f-42ee-9f6a-de6ce8083609" },
  //     });
  //     resolve(response.data);
  //   }, 3000);
  // });

  // Promise.race([
  //   promisifedPingApi,
  //   new Promise((_, reject) => {
  //     setTimeout(() => reject("Timeout!"), 1000);
  //   }),
  // ])
  //   .then((res) => {
  //     console.log("response: ", res);
  //     clearInterval(id);
  //   })
  //   .catch((e) => {
  //     console.error("error: ", e);
  //     clearInterval(id);
  //   });

  async function getMatches() {
    // api
    //   .get("/matches", {
    //     params: { token: "617d6beb-a61f-42ee-9f6a-de6ce8083609" },
    //   })
    //   .then((response) => {
    //     setMatches(response.data.matches);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       // The server responded with a status code outside the 2xx range
    //       console.log("Error response:", error.response);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       console.log("Error request:", error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an error
    //       console.log("Error message:", error.message);
    //     }
    //   });

    try {
      const response = await api.get("/matches", {
        params: { token: "617d6beb-a61f-42ee-9f6a-de6ce8083609" },
      });
      setMatches(response.data.matches);
    } catch (error) {
      console.log(error);
    }
  }

  getMatches();
  // setInterval(getMatches, 10000);

  return (
    <>
      <View style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
        <DefaultBackground></DefaultBackground>
      </View>
      <Container title="Matches" scroll>
        {/*add a bobablock per each match */}
        <View style={styles.searchbar}>
          <Ionicons name="search" size={30} color="#a38f93" />
          <TextInput
            placeholder="Search for Boba"
            placeholderTextColor="#a38f93"
            style={styles.searchInput}
          ></TextInput>
        </View>
        <View style={styles.separateMatches}>
          {matches.map((match: Boba, i) => (
            <BobaBlock
              id={match.id}
              label={match.name}
              rating={3}
              description={match.description}
              key={i}
            />
          ))}
        </View>
      </Container>
    </>
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
