import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type BobaBlockType = {
  label: String;
};

const BobaBlock = (props: BobaBlockType) => {
  return (
    <View style={styles.blockBorder}>
      <View style={styles.bobaImageFrame}>
        <Image
          source={require("../../assets/images/brownsugarboba.png")}
          style={styles.bobaImage}
        />
      </View>
      <View style={styles.bobaDescription}>
        <Text style={styles.bobaName}>{props.label}</Text>
        <View>
          <Image
            source={require("../../assets/images/FiveStar.png")}
            style={styles.rating}
          />
          <Text style={styles.bobaInfo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={styles.positionInfo}>
          <View style={styles.moreInfoButton}>
            <Text style={styles.infoButtonText}>MORE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockBorder: {
    borderRadius: 15,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    paddingLeft: 45,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  bobaImageFrame: {
    backgroundColor: "#F8E3E5",
    borderRadius: 15,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  bobaImage: { height: 150, width: 60 },
  bobaDescription: {
    width: "80%",
  },
  bobaName: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 12,
    color: "#6f5c63",
    marginTop: 10,
  },
  rating: { marginBottom: 4, width: 100, height: 15 },
  bobaInfo: {
    color: "#6f5c63",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 17,
    width: 190,
  },
  positionInfo: { marginTop: 15, marginLeft: 95 },
  moreInfoButton: {
    borderColor: "#e88a84",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#e2a191",
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  infoButtonText: {
    color: "white",
    fontWeight: "700",
  },
});

export default BobaBlock;
