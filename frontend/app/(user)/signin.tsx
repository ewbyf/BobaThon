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

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log("before fetch");
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    console.log("after fetch");
    console.log("HELLOOO");
    console.log(await response.json());
    setUsername("");
    setPassword("");
  };
  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign in" onPress={handleSignIn} />
      <Button
        title="Don't have an account?"
        onPress={() => router.push("/signup")}
      ></Button>
      {/* <Text>Don't have an account?</Text>
      <Text onPress={() => router.push("/signup")}>Click here</Text>{" "} */}
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

export default SignIn;
