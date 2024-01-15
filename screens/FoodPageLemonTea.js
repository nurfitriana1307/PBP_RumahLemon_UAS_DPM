import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import CartSection from "../components/CartSection";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FoodPageLemonTea = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.foodPageLemonTea, styles.foodLayout]}>
      <View style={[styles.foodPageLemonTeaChild, styles.foodPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector261.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector271.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector161.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector171.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector281.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.foodPageLemonTeaItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-5451.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector91.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector291.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector301.png")}
      />
      <Image
        style={[styles.vectorIcon15, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector141.png")}
      />
      <Image
        style={[styles.foodPageLemonTeaInner, styles.foodPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-567.png")}
      />
      <View style={[styles.rectangleView, styles.foodPosition]} />
      <Text style={styles.lemonTea}>Lemon Tea</Text>
      <Text style={[styles.sisaStock20, styles.sisaStock20Typo]}>
        Sisa stock 20
      </Text>
      <Text style={[styles.minumanTehDenganContainer, styles.sisaStock20Typo]}>
        <Text style={styles.minumanTehDenganContainer1}>
          Minuman teh dengan ekstrak 100% lemon asli dari kebun sendiri.{" "}
          SEGAR,SEHAT,BEBAS BAHAN KIMIA,PENGAWET,DAN PEMANIS BUATAN.
        </Text>
      </Text>
      <Text style={styles.k}>8k</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <StatusdefaultUkuranbesarImage
        dimensionCode={require("../assets/component-121.png")}
        statusdefaultUkuranbesarIPosition="absolute"
        statusdefaultUkuranbesarITop={26}
        statusdefaultUkuranbesarILeft={313}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-110.png")}
      />
      <CartSection
        onRectanglePressablePress={() => navigation.navigate("Keranjang")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  foodPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIconPosition: {
    right: "92.08%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  sisaStock20Typo: {
    fontSize: FontSize.size_sm,
    left: 18,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  foodPageLemonTeaChild: {
    top: 0,
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  vectorIcon: {
    height: "0.01%",
    width: "0.05%",
    top: "2.37%",
    right: "12.13%",
    bottom: "97.62%",
    left: "87.82%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "23.35%",
    width: "40.79%",
    top: "85%",
    right: "88.69%",
    bottom: "-8.35%",
    left: "-29.49%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "7.38%",
    width: "15.82%",
    top: "81.61%",
    right: "79.64%",
    bottom: "11.01%",
    left: "4.54%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "6.67%",
    width: "11.82%",
    top: "79.67%",
    right: "88.72%",
    bottom: "13.66%",
    left: "-0.54%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "8.98%",
    width: "15.33%",
    top: "55.68%",
    bottom: "35.34%",
    left: "-7.41%",
  },
  vectorIcon5: {
    height: "2.84%",
    width: "5.95%",
    top: "54.37%",
    right: "88.67%",
    bottom: "42.78%",
    left: "5.38%",
    position: "absolute",
  },
  vectorIcon6: {
    height: "2.57%",
    width: "4.44%",
    top: "53.63%",
    bottom: "43.8%",
    left: "3.49%",
  },
  vectorIcon7: {
    height: "12.67%",
    width: "30.23%",
    top: "63.15%",
    right: "-16.85%",
    bottom: "24.18%",
    left: "86.62%",
    position: "absolute",
  },
  vectorIcon8: {
    height: "4.16%",
    width: "10.05%",
    top: "60.23%",
    right: "6.36%",
    bottom: "35.62%",
    left: "83.59%",
    position: "absolute",
  },
  vectorIcon9: {
    height: "3.55%",
    width: "8.26%",
    top: "61.35%",
    right: "11.72%",
    bottom: "35.09%",
    left: "80.03%",
    position: "absolute",
  },
  foodPageLemonTeaItem: {
    height: "22.78%",
    width: "51.23%",
    top: "83.2%",
    right: "-15.49%",
    bottom: "-5.98%",
    left: "64.26%",
    position: "absolute",
  },
  vectorIcon10: {
    height: "13.67%",
    width: "27.72%",
    top: "31.85%",
    right: "-12.9%",
    bottom: "54.48%",
    left: "85.18%",
    position: "absolute",
  },
  vectorIcon11: {
    height: "4.51%",
    width: "9.28%",
    top: "30.21%",
    right: "-19.08%",
    bottom: "65.27%",
    left: "109.79%",
    position: "absolute",
  },
  vectorIcon12: {
    height: "3.76%",
    width: "7.85%",
    top: "28.67%",
    right: "-16.26%",
    bottom: "67.57%",
    left: "108.41%",
    position: "absolute",
  },
  vectorIcon13: {
    height: "14.14%",
    width: "25.46%",
    top: "36.53%",
    right: "83.08%",
    bottom: "49.34%",
    left: "-8.54%",
    position: "absolute",
  },
  vectorIcon14: {
    height: "4.6%",
    width: "8.97%",
    top: "34.22%",
    right: "77.92%",
    bottom: "61.18%",
    left: "13.1%",
    position: "absolute",
  },
  vectorIcon15: {
    height: "3.93%",
    width: "7.31%",
    top: "32.77%",
    right: "81.41%",
    bottom: "63.29%",
    left: "11.28%",
    position: "absolute",
  },
  foodPageLemonTeaInner: {
    top: 88,
    height: 347,
  },
  rectangleView: {
    top: 434,
    backgroundColor: Color.colorPalegoldenrod,
    height: 410,
  },
  lemonTea: {
    top: 463,
    left: 16,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.5,
    color: Color.colorGray_700,
    width: 259,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  sisaStock20: {
    top: 503,
    letterSpacing: 0.3,
    color: Color.colorGold_200,
    width: 160,
    height: 12,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    left: 18,
  },
  minumanTehDenganContainer1: {
    width: "100%",
  },
  minumanTehDenganContainer: {
    top: 543,
    lineHeight: 15,
    color: Color.colorGray_800,
    width: 351,
  },
  k: {
    top: 453,
    left: 317,
    fontSize: FontSize.size_31xl,
    letterSpacing: 1,
    lineHeight: 50,
    fontFamily: FontFamily.heiReina,
    color: Color.colorLimegreen,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "5.13%",
    top: "5.57%",
    right: "91.03%",
    bottom: "91.47%",
    width: "3.85%",
    height: "2.96%",
    position: "absolute",
  },
  groupIcon: {
    height: "5.33%",
    width: "10%",
    top: "3.79%",
    right: "23.59%",
    bottom: "90.88%",
    left: "66.41%",
    position: "absolute",
  },
  foodPageLemonTea: {
    flex: 1,
    width: "100%",
  },
});

export default FoodPageLemonTea;
