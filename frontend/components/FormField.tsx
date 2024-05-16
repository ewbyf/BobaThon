import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type FormFieldProps = {
  label: string;
  value: string;
  setValue: (text: string) => void;
  isPassword: boolean;
  placeholder: string;
};

const FormField = (props: FormFieldProps) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      {!props.isPassword && (
        <TextInput
          style={styles.input}
          onChangeText={props.setValue}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#6f5c63"
        />
      )}
      {props.isPassword && (
        <TextInput
          style={styles.input}
          onChangeText={props.setValue}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#6f5c63"
          secureTextEntry
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#6F5C63",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    fontFamily: 'Overpass'
  },
  input: {
    borderRadius: 10,
    height: 60,
    backgroundColor: "#f9e5e4",
    color: "#6F5C63",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: 'OverpassExtraLight',
    padding: 4,
    paddingLeft: 15,
    marginLeft: 40,
    marginRight: 40,
  },
});

export default FormField;
