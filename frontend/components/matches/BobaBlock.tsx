import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type BobaBlockType = {
  label: String;
};

const BobaBlock = (props: BobaBlockType) => {
  return (
    <View style={styles.blockBorder}>
      <Image
        source={require("../../assets/images/DrinkSelection.png")}
        style={styles.bobaImage}
      />
      <View style={styles.bobaDescription}>
        <Text style={styles.bobaName}>{props.label}</Text>
        <View>
          <Image></Image>
          <Text>Dummy Text</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockBorder: {
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 2,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    padding: 30,
  },
  bobaImage: { height: 150, width: 60 },
  bobaDescription: { width: "80%" },
  bobaName: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 15,
  },
});

export default BobaBlock;
