import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
import { Redirect, router } from "expo-router";

function SignIn() {
  return (
    <ImageBackground
      source={require("../../assets/images/SignUp.png")}
      imageStyle={{ resizeMode: "cover" }}
      style={{ height: "100%", width: "100%" }}
    >
      <SafeAreaView>
        <View style={styles.initial}>
          <View style={styles.buttons}>
            <Text style={styles.text} onPress={() => router.push("/signin")}>
              Log In
            </Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.text} onPress={() => router.push("/signup")}>
              Register
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  initial: {
    margin: 8,
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
  buttons: {
    shadowRadius: 0,
    borderRadius: 30,
    borderWidth: 1,
    height: 50,
    backgroundColor: "#f9e5e4",
    color: "#6f5c63",
    fontSize: 16,
    fontWeight: "500",
    padding: 4,
    marginLeft: 80,
    marginRight: 80,
    justifyContent: "center",
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
});

export default SignIn;
