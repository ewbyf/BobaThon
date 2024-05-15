import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React from "react";

type ButtonProps = {
  content: String;
  pressFunction: (event: GestureResponderEvent) => void;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.area} onPress={props.pressFunction}>
      <Text style={styles.text}>{props.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#F2D183",
    borderRadius: 10,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    // textAlign: "left",
    // width: "100%",
  },
});

export default CustomButton;
