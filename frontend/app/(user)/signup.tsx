import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
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
      <View style={styles.initial}>
        <Text>Sign Up to (Insert App name)</Text>

        <FormField
          label="Name"
          value={name}
          setValue={setName}
          isPassword={false}
        />
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
        <FormField
          label="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          isPassword={true}
        />

        <View style={styles.signup}>
          <CustomButton content="Sign Up" pressFunction={handleSignUp} />
        </View>

        <Text style={styles.signin}>
          Already have an account?{" "}
          <Text
            style={styles.signinText}
            onPress={() => router.push("/signin")}
          >
            Sign In
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
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
  signup: {
    marginTop: 10,
    marginBottom: 2,
  },
  signin: {
    width: "100%",
    textAlign: "center",
    marginTop: 3,
  },
  signinText: {
    color: "#F2D183",
  },
});

export default SignUp;
