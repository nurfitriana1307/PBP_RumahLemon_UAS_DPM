import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Basedonthegivencontext = () => {
  return (
    <View style={styles.rectangleParent}>
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={styles.maduLebahLiar}>Madu lebah liar 250 gram</Text>
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Text style={[styles.text, styles.textLayout]}>1</Text>
      <Text style={[styles.items, styles.itemsTypo]}>1 Items</Text>
      <Text style={[styles.rp40000, styles.rp40000Typo]}>RP.40000</Text>
      <Image
        style={[styles.rectangleIcon, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Text style={[styles.leFame200ml, styles.leFame200mlTypo]}>
        Le fame 200ml
      </Text>
      <View style={[styles.rectangleView, styles.groupChild1Position]} />
      <View style={[styles.groupChild1, styles.groupChild1Position]} />
      <Text style={[styles.text1, styles.textLayout]}>2</Text>
      <Text style={[styles.items1, styles.itemsTypo]}>2 Items</Text>
      <Text style={[styles.rp72000, styles.rp72000Position]}>RP.72000</Text>
      <Image
        style={[styles.groupChild2, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.bodyScrubLe, styles.rp105000Position]}>
        Body scrub le fame
      </Text>
      <View style={[styles.groupChild3, styles.groupChildPosition]} />
      <View style={[styles.groupChild4, styles.groupChildPosition]} />
      <Text style={[styles.text2, styles.textLayout]}>3</Text>
      <Text style={[styles.items2, styles.itemsTypo]}>3 Items</Text>
      <Text style={[styles.rp105000, styles.rp105000Position]}>RP.105000</Text>
      <Text style={[styles.v, styles.vTypo]}>v</Text>
      <Text style={[styles.v1, styles.vTypo]}>v</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 100,
    width: 100,
    left: 17,
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    width: 12,
    backgroundColor: Color.colorGold_200,
    top: 202,
    position: "absolute",
  },
  textLayout: {
    height: 14,
    width: 14,
    fontFamily: FontFamily.trajanPro,
    left: 320,
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  itemsTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    lineHeight: 50,
    textAlign: "left",
    position: "absolute",
  },
  rp40000Typo: {
    width: 60,
    left: 296,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  leFame200mlTypo: {
    width: 154,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    left: 135,
  },
  groupChild1Position: {
    top: 87,
    height: 2,
    width: 12,
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  rp72000Position: {
    top: 20,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rp105000Position: {
    top: 258,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildPosition: {
    top: 325,
    height: 2,
    width: 12,
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  vTypo: {
    width: 10,
    color: Color.colorGray_900,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.8,
    fontSize: FontSize.size_21xl,
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 119,
  },
  maduLebahLiar: {
    lineHeight: 20,
    width: 122,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    top: 139,
    left: 135,
    position: "absolute",
  },
  groupItem: {
    left: 302,
  },
  groupInner: {
    left: 335,
  },
  text: {
    top: 198,
  },
  items: {
    top: 162,
    left: 134,
  },
  rp40000: {
    lineHeight: 50,
    width: 60,
    left: 296,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    top: 139,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
  },
  leFame200ml: {
    top: 20,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    left: 302,
  },
  groupChild1: {
    left: 335,
  },
  text1: {
    top: 83,
  },
  items1: {
    top: 39,
    left: 135,
    color: Color.colorGray_200,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rp72000: {
    width: 60,
    left: 296,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  groupChild2: {
    top: 238,
  },
  bodyScrubLe: {
    width: 154,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    left: 135,
  },
  groupChild3: {
    left: 302,
  },
  groupChild4: {
    left: 335,
  },
  text2: {
    top: 321,
  },
  items2: {
    top: 277,
    left: 135,
    color: Color.colorGray_200,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rp105000: {
    width: 60,
    left: 296,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  v: {
    top: 6,
    left: 0,
    height: 6,
  },
  v1: {
    top: 124,
    left: 1,
    height: 4,
  },
  rectangleParent: {
    top: 135,
    left: 16,
    width: 356,
    height: 338,
    position: "absolute",
  },
});

export default Basedonthegivencontext;
