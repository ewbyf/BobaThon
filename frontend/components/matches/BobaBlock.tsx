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
      <Text style={styles.bobaName}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockBorder: {
    borderColor: "black",
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bobaImage: { height: 150, width: 60 },
  bobaName: {
    width: "100%",
    textAlign: "center",
  },
});

export default BobaBlock;
