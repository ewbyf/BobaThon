import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";

type ButtonProps = {
  pressFunction: (event: GestureResponderEvent) => void;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.pressFunction}>
      <AntDesign name="rightcircle" size={70} color="#E9B7B6" />
    </TouchableOpacity>
  );
};

export default CustomButton;
