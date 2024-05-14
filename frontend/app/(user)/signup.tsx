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
import api from "@/services/axiosConfig";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await api.post("/signup", {
        name: name,
        email: email,
        password: password,
      });
      const data = await response;
      console.log(data.data);
      console.log(data.status);
      console.log("SUCESS");
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />

      <Button
        title="Already have an account?"
        onPress={() => router.push("/signin")}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
});

export default SignUp;
