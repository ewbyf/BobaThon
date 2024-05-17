import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";

import BobaMatchHeader from "./BobaMatchHeader";
const BobaMatchContainer = ({
  children,
  background,
  title,
}: {
  children: any;
  background?: boolean;
  title: string;
}) => {
  if (background === undefined || background === true) {
    return (
      <LinearGradient
        colors={["#EACBAD", "#E9B7B6"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      >
        <SafeAreaView style={styles.container}>
          <BobaMatchHeader title={title}></BobaMatchHeader>
          {children}
        </SafeAreaView>
      </LinearGradient>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <BobaMatchHeader title={title}></BobaMatchHeader>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    left: 5,
    top: 55,
  },
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 5,
    gap: 15,
    zIndex: 5,
  },
});

export default BobaMatchContainer;
