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
        <Text>Hello</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.signin}>Sign In</Text>
        <CustomButton />
        <Button title="Sign in" onPress={handleSignIn} />
        <Button
          title="Don't have an account?"
          onPress={() => router.push("/signup")}
        ></Button>
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
    backgroundColor: "#F2D183",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
