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

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // api
    //   .post("/login", { email: email, password: password })
    //   .then(())
    //   .catch((e) => console.log(e));
    try {
      console.log("hello");
      const tmp = await fetch("https://bobathon.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      console.log(await tmp.json());
      const response = await api.post("/login", {
        email: email,
        password: password,
      });
      // const data = await response;
      // console.log(data.data);
      // console.log(data.status);
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
