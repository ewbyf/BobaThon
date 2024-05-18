import BackArrow from "@/components/BackArrow";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import api from "@/services/axiosConfig";
import { router } from "expo-router";
import SignInBackground from "@/components/SignInBackground";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLocalSearchParams } from "expo-router";
import BobaMatchContainer from "@/components/BobaMatchContainer";
import { bobaInfoList } from "@/data/bobaInfoList";
import { bobaList } from "@/data/bobaList";

import { save } from "@/lib/storage";

function BobaMatch() {
  const [originColor, setOriginColor] = useState("#eac9af");
  const [ingredientsColor, setIngredientsColor] = useState("#eac9af");
  const [reviewColor, setReviewColor] = useState("#eac9af");
  const [bobaImage, setBobaImage] = useState();
  const [originContent, setOriginContent] = useState("");
  const [ingredientsContent, setIngredientsContent] = useState<string[]>([]);

  function changeOriginColor() {
    if (originColor == "#eac9af") {
      setOriginColor("#e8a29d");
      setIngredientsColor("#eac9af");
      setReviewColor("#eac9af");
    }
  }
  function changeIngredientColor() {
    if (ingredientsColor == "#eac9af") {
      setOriginColor("#eac9af");
      setIngredientsColor("#e8a29d");
      setReviewColor("#eac9af");
    }
  }
  function changeReviewColor() {
    if (reviewColor == "#eac9af") {
      setOriginColor("#eac9af");
      setIngredientsColor("#eac9af");
      setReviewColor("#e8a29d");
    }
  }

  const item = useLocalSearchParams();
  console.log(item);

  // console.log(bobaInfoList);

  function getContent() {
    bobaInfoList.forEach((bobaInfo) => {
      if (bobaInfo.bobaId == parseInt(item.bobaId as string)) {
        console.log(bobaInfo);
        setBobaImage(bobaList[bobaInfo.bobaId].img);
        setOriginContent(bobaInfo.origin);
        setIngredientsContent(bobaInfo.ingredients);
      }
    });
  }

  useEffect(() => getContent(), [item.bobaId]);

  return (
    <>
      <View style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <SignInBackground></SignInBackground>
      </View>
      <BobaMatchContainer title="Matches">
        <View style={styles.bobaImage}>
          <Text style={styles.bobaName}>{item.boba}</Text>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={bobaImage}
          ></Image>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            id="originButton"
            style={[styles.button, { backgroundColor: originColor }]}
            onPress={changeOriginColor}
          >
            <Text style={styles.buttonText}>ORIGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            id="ingredientsButton"
            style={[styles.button, { backgroundColor: ingredientsColor }]}
            onPress={changeIngredientColor}
          >
            <Text style={styles.buttonText}>INGREDIENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            id="reviewsButton"
            style={[styles.button, { backgroundColor: reviewColor }]}
            onPress={changeReviewColor}
          >
            <Text style={styles.buttonText}>REVIEWS</Text>
          </TouchableOpacity>
        </View>
        {originColor != "#eac9af" && (
          <View style={styles.display}>
            <Text style={[styles.displayText, styles.info]}>
              {originContent}
            </Text>
          </View>
        )}
        {ingredientsColor != "#eac9af" && (
          <View style={styles.display}>
            <View style={styles.displayText}>
              {ingredientsContent.map((ingredient, i) => (
                <Text style={styles.info} key={i}>
                  - {ingredient}
                </Text>
              ))}
            </View>
          </View>
        )}
        {reviewColor != "#eac9af" && (
          <View style={styles.display}>
            <Text style={styles.displayText}>somehow display reviews</Text>
          </View>
        )}
      </BobaMatchContainer>
    </>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%", borderRadius: 25 },
  bobaName: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
    color: "#6f5c63",
  },
  bobaImage: {
    width: "90%",
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  display: {
    width: "90%",
    height: 230,
    backgroundColor: "#f9e4e5",
    color: "#89757b",
    borderRadius: 10,
    padding: 40,
  },
  displayText: {
    display: "flex",
    flexDirection: "column",
  },
  info: {
    color: "#89757b",
    fontWeight: "500",
  },
});

export default BobaMatch;
