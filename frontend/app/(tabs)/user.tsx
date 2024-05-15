import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Redirect, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import api from "@/services/axiosConfig";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      //Do smth with token
      console.log("SUCESS");
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <SafeAreaView>
      <View style={styles.initial}>
        <Text>Log in to (Insert App Name)</Text>

        <FormField
          label="Email"
          value={email}
          setValue={setEmail}
          isPassword={false}
        />

        <FormField
          label="Password"
          value={password}
          setValue={setPassword}
          isPassword={true}
        />

        <View style={styles.signin}>
          <CustomButton content="Sign in" pressFunction={handleSignIn} />
        </View>
        <Text style={styles.signup}>
          Don't have an account?{" "}
          <Text
            style={styles.signupText}
            onPress={() => router.push("/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
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
  signin: {
    marginTop: 10,
    marginBottom: 2,
  },
  signup: {
    width: "100%",
    textAlign: "center",
    marginTop: 3,
  },
  signupText: {
    color: "#F2D183",
  },
});

export default SignIn;
