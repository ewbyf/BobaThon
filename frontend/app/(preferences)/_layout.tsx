import { Stack } from "expo-router";

const PreferenceLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="tastepreference" options={{ headerShown: false }} />
        {/* <Stack.Screen name="signup" options={{ headerShown: false }} /> */}
      </Stack>
    </>
  );
};

export default PreferenceLayout;
