import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Toast />
    </Stack>
  );
};

export default AuthLayout;
