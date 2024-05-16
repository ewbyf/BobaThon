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

function UserScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/SignUp.png")}
      imageStyle={{ resizeMode: "cover" }}
      style={{ height: "100%", width: "100%" }}
    >
      <SafeAreaView>
        <View style={styles.initial}>
          <View style={styles.signinButton}>
            <Text style={styles.text} onPress={() => router.push("/signin")}>
              Log In
            </Text>
          </View>
          <View style={styles.signupButton}>
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
    marginTop: 500,
    display: "flex",
    gap: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
  signinButton: {
    borderRadius: 30,
    height: 60,
    backgroundColor: "#ffffff",
    color: "#6f5c63",
    fontSize: 16,
    padding: 4,
    marginLeft: 90,
    marginRight: 90,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  signupButton: {
    borderRadius: 30,
    height: 60,
    backgroundColor: "#f8e5e3",
    color: "#6f5c63",
    fontSize: 16,
    padding: 4,
    marginLeft: 90,
    marginRight: 90,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default UserScreen;
