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
import { GradientButton } from "@/components/GradientButton";
import api from "@/services/axiosConfig";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        <View style={styles.formInputs}>
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

        <View style={styles.signin}>
          <CustomButton pressFunction={handleSignIn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  initial: {
    margin: 8,
    marginTop: 300,
  },
  formInputs: {
    display: "flex",
    gap: 25,
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
  signin: {
    marginLeft: 270,
    marginTop: 40,
  },
  signup: {
    width: "100%",
    textAlign: "center",
    marginTop: 13,
    color: "#6f5c63",
  },
  signupText: {
    color: "#6f5c63",
    fontWeight: "600",
  },
});

export default SignIn;
