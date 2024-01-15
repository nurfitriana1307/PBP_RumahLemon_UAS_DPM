import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const OverlayReview = ({ onClose }) => {
  return (
    <View style={[styles.overlayReview, styles.overlayReviewLayout]}>
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Image
        style={[styles.overlayReviewChild, styles.overlayChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
      <Image
        style={[styles.overlayReviewItem, styles.overlayChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
      <Image
        style={[styles.overlayReviewInner, styles.overlayChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
      <Image
        style={[styles.starIcon, styles.overlayChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
      <Image
        style={[styles.overlayReviewChild1, styles.overlayChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-6.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.writeReviews}>Write reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayReviewLayout: {
    height: 120,
    width: 247,
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 118,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  overlayChildLayout: {
    height: 37,
    width: 33,
    top: 21,
    position: "absolute",
  },
  groupChild: {
    top: 2,
    left: 8,
    backgroundColor: Color.colorGold_200,
    width: 239,
  },
  groupItem: {
    backgroundColor: Color.colorMoccasin_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 240,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    position: "absolute",
    height: 120,
    width: 247,
  },
  overlayReviewChild: {
    left: 37,
  },
  overlayReviewItem: {
    left: 70,
  },
  overlayReviewInner: {
    left: 103,
  },
  starIcon: {
    left: 136,
  },
  overlayReviewChild1: {
    left: 169,
  },
  rectangleView: {
    top: 65,
    left: 49,
    backgroundColor: "rgba(180, 149, 5, 0.5)",
    width: 142,
    height: 30,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  writeReviews: {
    top: 55,
    left: 85,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    lineHeight: 50,
    fontFamily: FontFamily.baskervilleOldFace,
    color: "rgba(0, 0, 0, 0.45)",
    textAlign: "left",
    position: "absolute",
  },
  overlayReview: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default OverlayReview;
