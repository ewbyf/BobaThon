import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { Redirect, router } from "expo-router";

function SignIn() {
  return (
    <SafeAreaView>
      <Button
        title="Continue To Signin/Signout"
        onPress={() => router.push("/signin")}
      />
    </SafeAreaView>
  );
}

export default SignIn;
