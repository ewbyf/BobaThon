import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MenuButton } from "./MenuButton";

import { router } from "expo-router";

import Flower from "./icons/Flower";
const BobaMatchHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        // style={styles.backArrow}
        onPress={() => {
          router.navigate("/matches");
        }}
      >
        <Ionicons name="chevron-back-outline" size={30} color="#6f5c63" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <MenuButton></MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "OverpassExtraBold",
    fontSize: 24,
    color: "#6F5C63",
    textAlign: "center",
    flex: 1,
  },
});

export default BobaMatchHeader;
