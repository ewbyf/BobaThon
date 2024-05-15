import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type FormFieldProps = {
  label: string;
  value: string;
  setValue: (text: string) => void;
  isPassword: boolean;
};

const FormField = (props: FormFieldProps) => {
  return (
    <View>
      <Text>{props.label}</Text>
      {!props.isPassword && (
        <TextInput
          style={styles.input}
          onChangeText={props.setValue}
          value={props.value}
        />
      )}
      {props.isPassword && (
        <TextInput
          style={styles.input}
          onChangeText={props.setValue}
          value={props.value}
          secureTextEntry
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#CAD9A9",
    borderRadius: 6,
    height: 50,
    backgroundColor: "white",
    fontSize: 16,
    padding: 4,
  },
});

export default FormField;
