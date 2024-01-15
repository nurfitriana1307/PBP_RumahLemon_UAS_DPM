import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CartSection = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupItemPosition}>
        <Image
          style={[styles.groupChild, styles.arrowIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
        <View style={styles.groupItemPosition}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Pressable
            style={styles.groupInner}
            onPress={onRectanglePressablePress}
          />
          <Text style={styles.keranjang}>Keranjang</Text>
        </View>
      </View>
      <Image
        style={[styles.arrowIcon, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowIconLayout: {
    height: 15,
    top: 31,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupItemPosition: {
    top: 0,
    height: 67,
    width: 392,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 229,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMoccasin_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  groupIcon: {
    height: "59.7%",
    width: "10.2%",
    top: "11.94%",
    right: "11.48%",
    bottom: "28.36%",
    left: "78.32%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupInner: {
    top: 8,
    left: 37,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGold_200,
    width: 220,
    height: 45,
    position: "absolute",
  },
  keranjang: {
    top: 23,
    left: 55,
    fontSize: FontSize.size_xl,
    lineHeight: 15,
    fontFamily: FontFamily.roboto,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  arrowIcon: {
    left: 235,
  },
  groupParent: {
    top: 781,
    height: 67,
    width: 392,
    left: 0,
    position: "absolute",
  },
});

export default CartSection;
