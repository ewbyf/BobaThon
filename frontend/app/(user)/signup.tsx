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

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Sign in" onPress={handleSignUp} />

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
