import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.area}>
      <Text style={styles.text}>Custom Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#F2D183",
    borderRadius: 10,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Gill Sans, sans-serif",
  },
});

export default CustomButton;
