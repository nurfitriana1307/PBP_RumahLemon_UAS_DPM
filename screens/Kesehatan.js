import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Kesehatan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.kesehatan, styles.kesehatanLayout]}>
      <View style={[styles.kesehatanChild, styles.kesehatanLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector71.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.kesehatanItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-54.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector91.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector131.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector141.png")}
      />
      <Pressable
        style={styles.menu}
        onPress={() => navigation.navigate("Beranda")}
      >
        <Text style={[styles.menu1, styles.menu1FlexBox]}>MENU</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.groupChild, styles.wrapperLayout]} />
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("FoodPageChiaseedOragani")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-3.png")}
            />
          </Pressable>
          <Text style={[styles.k, styles.kTypo]}>20K</Text>
        </View>
        <Pressable
          style={[styles.container, styles.containerPosition]}
          onPress={() => navigation.navigate("FoodPageMaduLebahLiar")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-4.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupItem, styles.containerPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Text style={[styles.k1, styles.kTypo]}>40K</Text>
        <Text style={[styles.k2, styles.kTypo]}>120K</Text>
      </View>
      <Image
        style={[styles.kesehatanInner, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Text style={[styles.kesehatan1, styles.kesehatan1Typo]}>Kesehatan</Text>
      <Pressable
        style={[styles.kecantikan, styles.minumanPosition]}
        onPress={() => navigation.navigate("Kecantikan")}
      >
        <Text style={[styles.kecantikan1, styles.kesehatan1Typo]}>
          Kecantikan
        </Text>
      </Pressable>
      <Pressable
        style={[styles.minuman, styles.minumanPosition]}
        onPress={() => navigation.navigate("Minuman")}
      >
        <Text style={[styles.kecantikan1, styles.kesehatan1Typo]}>Minuman</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.rectangleIcon, styles.kesehatan1Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Pressable style={styles.frame} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <Text style={[styles.k3, styles.kTypo]}>150K</Text>
      <Text style={[styles.k4, styles.kTypo]}>50K</Text>
      <StatusdefaultUkuranbesarImage
        dimensionCode={require("../assets/component-1.png")}
        statusdefaultUkuranbesarIPosition="absolute"
        statusdefaultUkuranbesarITop={26}
        statusdefaultUkuranbesarILeft={313}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-110.png")}
      />
      <StatusdefaultHomeoffSear
        dimensionCode={require("../assets/group-99.png")}
        statusdefaultHomeoffSearPosition="absolute"
        statusdefaultHomeoffSearTop={772}
        statusdefaultHomeoffSearLeft={0}
        statusdefaultHomeoffSearWidth={390}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kesehatanLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  iconLayout1: {
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
  menu1FlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorLimegreen,
  },
  parentLayout: {
    width: 359,
    position: "absolute",
  },
  wrapperLayout: {
    height: 180,
    width: 150,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  kTypo: {
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorLimegreen,
    lineHeight: 50,
    position: "absolute",
  },
  containerPosition: {
    left: 6,
    height: 180,
    width: 150,
    position: "absolute",
  },
  kesehatan1Typo: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
  },
  minumanPosition: {
    top: 88,
    position: "absolute",
  },
  kesehatan1Position: {
    left: 24,
    position: "absolute",
  },
  kesehatanChild: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  vectorIcon: {
    height: "23.35%",
    width: "40.79%",
    top: "85%",
    right: "88.69%",
    bottom: "-8.35%",
    left: "-29.49%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "7.38%",
    width: "15.82%",
    top: "81.61%",
    right: "79.64%",
    bottom: "11.01%",
    left: "4.54%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "6.67%",
    width: "11.82%",
    top: "79.67%",
    right: "88.72%",
    bottom: "13.66%",
    left: "-0.54%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "8.98%",
    width: "15.33%",
    top: "55.68%",
    bottom: "35.34%",
    left: "-7.41%",
  },
  vectorIcon4: {
    height: "2.84%",
    width: "5.95%",
    top: "54.37%",
    right: "88.67%",
    bottom: "42.78%",
    left: "5.38%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "2.57%",
    width: "4.44%",
    top: "53.63%",
    bottom: "43.8%",
    left: "3.49%",
  },
  vectorIcon6: {
    height: "12.67%",
    width: "30.23%",
    top: "63.15%",
    right: "-16.85%",
    bottom: "24.18%",
    left: "86.62%",
    position: "absolute",
  },
  vectorIcon7: {
    height: "4.16%",
    width: "10.05%",
    top: "60.23%",
    right: "6.36%",
    bottom: "35.62%",
    left: "83.59%",
    position: "absolute",
  },
  vectorIcon8: {
    height: "3.55%",
    width: "8.26%",
    top: "61.35%",
    right: "11.72%",
    bottom: "35.09%",
    left: "80.03%",
    position: "absolute",
  },
  kesehatanItem: {
    height: "22.78%",
    width: "51.23%",
    top: "83.2%",
    right: "-15.49%",
    bottom: "-5.98%",
    left: "64.26%",
    position: "absolute",
  },
  vectorIcon9: {
    height: "13.67%",
    width: "27.72%",
    top: "31.85%",
    right: "-12.9%",
    bottom: "54.48%",
    left: "85.18%",
    position: "absolute",
  },
  vectorIcon10: {
    height: "4.51%",
    width: "9.28%",
    top: "30.21%",
    right: "-19.08%",
    bottom: "65.27%",
    left: "109.79%",
    position: "absolute",
  },
  vectorIcon11: {
    height: "3.76%",
    width: "7.85%",
    top: "28.67%",
    right: "-16.26%",
    bottom: "67.57%",
    left: "108.41%",
    position: "absolute",
  },
  vectorIcon12: {
    height: "14.14%",
    width: "25.46%",
    top: "36.53%",
    right: "83.08%",
    bottom: "49.34%",
    left: "-8.54%",
    position: "absolute",
  },
  vectorIcon13: {
    height: "4.6%",
    width: "8.97%",
    top: "34.22%",
    right: "77.92%",
    bottom: "61.18%",
    left: "13.1%",
    position: "absolute",
  },
  vectorIcon14: {
    height: "3.93%",
    width: "7.31%",
    top: "32.77%",
    right: "81.41%",
    bottom: "63.29%",
    left: "11.28%",
    position: "absolute",
  },
  menu1: {
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    width: 102,
    height: 35,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
    color: Color.colorLimegreen,
  },
  menu: {
    left: 22,
    top: 34,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    left: 197,
    top: 24,
    position: "absolute",
  },
  k: {
    top: 5,
    left: 328,
  },
  rectangleParent: {
    height: 204,
    top: 20,
    left: 0,
  },
  container: {
    top: 20,
  },
  groupItem: {
    top: 239,
    borderRadius: Border.br_3xs,
  },
  k1: {
    left: 135,
    top: 0,
  },
  k2: {
    top: 219,
    left: 134,
  },
  groupParent: {
    top: 128,
    left: 18,
    height: 419,
  },
  kesehatanInner: {
    top: 397,
    left: 215,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  kesehatan1: {
    top: 94,
    width: 120,
    height: 39,
    left: 24,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    color: Color.colorLimegreen,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
  },
  kecantikan1: {
    color: Color.colorBlack,
  },
  kecantikan: {
    left: 153,
  },
  minuman: {
    left: 282,
  },
  rectangleView: {
    top: 118,
    left: 26,
    backgroundColor: Color.colorYellow,
    width: 86,
    height: 1,
    position: "absolute",
  },
  rectangleIcon: {
    top: 583,
    height: 180,
    width: 150,
    borderRadius: Border.br_3xs,
  },
  icon2: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  frame: {
    left: "6.67%",
    top: "8.18%",
    right: "89.49%",
    bottom: "88.86%",
    width: "3.85%",
    height: "2.96%",
    position: "absolute",
  },
  k3: {
    top: 378,
    left: 345,
  },
  k4: {
    top: 561,
    left: 158,
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
  kesehatan: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
});

export default Kesehatan;
