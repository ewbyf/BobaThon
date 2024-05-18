import BackArrow from "@/components/BackArrow";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import SignUpBackground from "@/components/backgrounds/SignUpBackground";
import api from "@/services/axiosConfig";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { save } from "@/lib/storage";
import Toast from "react-native-toast-message";

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
      save("token", response.data.token);
      Toast.show({
        type: "success",
        text1: "Account Created",
        text2: "Welcome to BobaBliss!",
        text1Style: {
            fontSize: 15
        },
        text2Style: {
            fontSize: 14
        }
      });
      router.navigate("/home");
    } catch (error) {
      console.log("ERROR");
      Toast.show({
        type: "error",
        text1: "Registration Failed",
        text2: "Make sure all input fields are filled out correctly",
        text1Style: {
            fontSize: 15
        },
        text2Style: {
            fontSize: 14
        }
      });
      console.log(error);
    }
  };
  return (
    <>
      <View style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <SignUpBackground></SignUpBackground>
      </View>

      <SafeAreaView style={{ flex: 1, zIndex: 2 }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.header}>
            <BackArrow></BackArrow>
          </View>
          <View style={styles.formInputs}>
            <FormField
              label="Name"
              placeholder="Enter your name"
              value={name}
              setValue={setName}
              isPassword={false}
            />
            <FormField
              label="Email"
              placeholder="Enter your email"
              value={email}
              setValue={setEmail}
              isPassword={false}
            />
            <FormField
              label="Password"
              placeholder="Enter your password"
              value={password}
              setValue={setPassword}
              isPassword={true}
            />
            <FormField
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              isPassword={true}
            />
          </View>

          <Text style={styles.signin}>
            Already have an account?{" "}
            <Text
              style={styles.signinText}
              onPress={() => router.navigate("/signin")}
            >
              Sign In
            </Text>
          </Text>

          <View style={styles.signup}>
            <CustomButton pressFunction={handleSignUp} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
    // <ImageBackground source={require('../../assets/images/signupbg.png')} imageStyle={{ resizeMode: 'cover' }} style={{ height: '100%', width: '100%' }}>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
  },

  formInputs: {
    display: "flex",
    gap: 25,
    marginTop: "auto",
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "lightblue",
    textDecorationColor: "white",
  },
  signup: {
    marginLeft: 270,
    marginTop: 40,
  },
  signin: {
    width: "100%",
    textAlign: "center",
    marginTop: 13,
    color: "#6f5c63",
  },
  signinText: {
    color: "#6f5c63",
    fontWeight: "600",
  },
});

export default SignUp;
