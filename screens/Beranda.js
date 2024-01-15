import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Beranda = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beranda}>
      <View style={styles.berandaChild} />
      <Image
        style={[styles.berandaItem, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-58.png")}
      />
      <Image
        style={[styles.berandaInner, styles.berandaChildLayout2]}
        resizeMode="cover"
        source={require("../assets/group-59.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-61.png")}
      />
      <Image
        style={[styles.berandaChild1, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-6221.png")}
      />
      <Image
        style={[styles.berandaChild2, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-6111.png")}
      />
      <Image
        style={[styles.berandaChild3, styles.berandaChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-6121.png")}
      />
      <Image
        style={[styles.berandaChild4, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-77.png")}
      />
      <Image
        style={[styles.berandaChild5, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-5811.png")}
      />
      <Image
        style={[styles.berandaChild6, styles.berandaChildLayout2]}
        resizeMode="cover"
        source={require("../assets/group-5911.png")}
      />
      <Image
        style={[styles.berandaChild7, styles.berandaChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-6131.png")}
      />
      <Image
        style={[styles.berandaChild8, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-5821.png")}
      />
      <Image
        style={[styles.berandaChild9, styles.berandaChildLayout2]}
        resizeMode="cover"
        source={require("../assets/group-5911.png")}
      />
      <Image
        style={[styles.berandaChild10, styles.berandaChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-6141.png")}
      />
      <Image
        style={[styles.berandaChild11, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-5821.png")}
      />
      <Image
        style={[styles.berandaChild12, styles.berandaChildLayout2]}
        resizeMode="cover"
        source={require("../assets/group-5911.png")}
      />
      <Image
        style={[styles.berandaChild13, styles.berandaChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-6151.png")}
      />
      <Text style={[styles.menu, styles.menuTypo]}>MENU</Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <Pressable
            style={[styles.wrapper, styles.groupChildLayout1]}
            onPress={() => navigation.navigate("FoodPageLefame200ml")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-33.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.container, styles.groupChildPosition]}
            onPress={() => navigation.navigate("FoodPageChiaseedOragani")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-351.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-43.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-361.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-38.png")}
          />
          <Text style={[styles.k, styles.kTypo]}>20K</Text>
          <Text style={[styles.k1, styles.kTypo]}>10K</Text>
          <Text style={[styles.k2, styles.kTypo]}>50K</Text>
          <Text style={[styles.k3, styles.kTypo]}>35K</Text>
          <Text style={[styles.k4, styles.kTypo]}>20K</Text>
        </View>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-391.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-3101.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-45.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild4, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-3111.png")}
          />
          <Text style={[styles.k5, styles.kTypo]}>8K</Text>
        </View>
        <Image
          style={[styles.groupChild5, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-7.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-83.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={[styles.k6, styles.kTypo]}>35K</Text>
        <Text style={[styles.k7, styles.kTypo]}>40K</Text>
        <Text style={[styles.k8, styles.k8Typo]}>10K</Text>
        <Text style={[styles.k9, styles.kTypo]}>85K</Text>
        <Text style={[styles.k10, styles.k8Typo]}>120K</Text>
      </View>
      <Text style={[styles.k11, styles.k11Typo]}>12K</Text>
      <Image
        style={[styles.berandaChild14, styles.berandaChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-84.png")}
      />
      <Image
        style={[styles.berandaChild15, styles.groupChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-851.png")}
      />
      <Image
        style={[styles.berandaChild16, styles.groupChildLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-93.png")}
      />
      <Image
        style={[styles.berandaChild17, styles.berandaChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Pressable
        style={[styles.kesehatan, styles.minumanPosition]}
        onPress={() => navigation.navigate("Kesehatan")}
      >
        <Text style={[styles.kesehatan1, styles.menuTypo]}>Kesehatan</Text>
      </Pressable>
      <Pressable
        style={[styles.kecantikan, styles.minumanPosition]}
        onPress={() => navigation.navigate("Kecantikan")}
      >
        <Text style={[styles.kesehatan1, styles.menuTypo]}>Kecantikan</Text>
      </Pressable>
      <Pressable
        style={[styles.minuman, styles.minumanPosition]}
        onPress={() => navigation.navigate("Minuman")}
      >
        <Text style={[styles.kesehatan1, styles.menuTypo]}>Minuman</Text>
      </Pressable>
      <Text style={[styles.k12, styles.kTypo]}>36K</Text>
      <Text style={[styles.k13, styles.kTypo]}>20K</Text>
      <Text style={[styles.k14, styles.k14Typo]}>12K</Text>
      <Text style={[styles.k15, styles.k11Typo]}>100K</Text>
      <Text style={[styles.k16, styles.k14Typo]}>150K</Text>
      <Text style={[styles.k17, styles.kTypo]}>10K</Text>
      <Pressable style={styles.frame} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <StatusdefaultUkuranbesarImage
        dimensionCode={require("../assets/component-1.png")}
        statusdefaultUkuranbesarIPosition="absolute"
        statusdefaultUkuranbesarITop={26}
        statusdefaultUkuranbesarILeft={313}
      />
      <Image
        style={[styles.berandaChild18, styles.iconChildLayout]}
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
  iconChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  berandaChildLayout2: {
    width: "18.74%",
    height: "11.34%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berandaChildLayout1: {
    width: "40.03%",
    height: "19.36%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  menuTypo: {
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
  },
  parentLayout: {
    width: 349,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 180,
    width: 150,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildPosition: {
    left: 186,
    height: 180,
    width: 150,
    position: "absolute",
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
  groupChildLayout: {
    left: 183,
    borderRadius: Border.br_3xs,
    height: 180,
    width: 150,
    position: "absolute",
  },
  k8Typo: {
    left: 309,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorLimegreen,
    lineHeight: 50,
    position: "absolute",
  },
  k11Typo: {
    left: 333,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorLimegreen,
    lineHeight: 50,
    position: "absolute",
  },
  berandaChildLayout: {
    left: 202,
    borderRadius: Border.br_3xs,
    height: 180,
    width: 150,
    position: "absolute",
  },
  minumanPosition: {
    top: 88,
    position: "absolute",
  },
  k14Typo: {
    left: 148,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorLimegreen,
    lineHeight: 50,
    position: "absolute",
  },
  berandaChild: {
    width: 390,
    height: 2100,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  berandaItem: {
    top: "81.86%",
    right: "79.38%",
    bottom: "-11.32%",
    left: "-29.23%",
    width: "49.85%",
    height: "29.45%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berandaInner: {
    top: "55.12%",
    right: "88.41%",
    bottom: "33.54%",
    left: "-7.15%",
  },
  groupIcon: {
    height: "16.2%",
    width: "38.31%",
    top: "61.8%",
    right: "-17.79%",
    bottom: "22%",
    left: "79.49%",
    position: "absolute",
  },
  berandaChild1: {
    height: "23%",
    width: "51.67%",
    top: "85.64%",
    right: "-16.05%",
    bottom: "-8.64%",
    left: "64.38%",
    position: "absolute",
  },
  berandaChild2: {
    height: "17.49%",
    width: "35.67%",
    top: "29.43%",
    right: "-20.23%",
    bottom: "53.08%",
    left: "84.56%",
    position: "absolute",
  },
  berandaChild3: {
    top: "33.35%",
    right: "72.95%",
    bottom: "47.29%",
    left: "-12.97%",
  },
  berandaChild4: {
    height: "78.68%",
    width: "54.82%",
    top: "107.13%",
    right: "-15.87%",
    bottom: "-85.82%",
    left: "61.05%",
    position: "absolute",
  },
  berandaChild5: {
    top: "155.75%",
    right: "77.82%",
    bottom: "-85.2%",
    left: "-27.67%",
    width: "49.85%",
    height: "29.45%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berandaChild6: {
    top: "129%",
    right: "86.87%",
    bottom: "-40.34%",
    left: "-5.62%",
  },
  berandaChild7: {
    top: "107.25%",
    right: "71.38%",
    bottom: "-26.61%",
    left: "-11.41%",
  },
  berandaChild8: {
    top: "226.24%",
    right: "-11.67%",
    bottom: "-155.7%",
    left: "61.82%",
    width: "49.85%",
    height: "29.45%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berandaChild9: {
    top: "199.5%",
    right: "-2.62%",
    bottom: "-110.84%",
    left: "83.87%",
  },
  berandaChild10: {
    top: "177.75%",
    right: "-18.1%",
    bottom: "-97.11%",
    left: "78.08%",
  },
  berandaChild11: {
    top: "232.76%",
    right: "78.59%",
    bottom: "-162.22%",
    left: "-28.44%",
    width: "49.85%",
    height: "29.45%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berandaChild12: {
    top: "206.02%",
    right: "87.64%",
    bottom: "-117.36%",
    left: "-6.38%",
  },
  berandaChild13: {
    top: "184.27%",
    right: "72.15%",
    bottom: "-103.63%",
    left: "-12.18%",
  },
  menu: {
    top: 34,
    left: 23,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    width: 102,
    height: 35,
    color: Color.colorLimegreen,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    left: 6,
    top: 0,
  },
  container: {
    top: 45,
  },
  groupChild: {
    top: 256,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 436,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  groupInner: {
    top: 476,
    borderRadius: Border.br_3xs,
  },
  rectangleIcon: {
    top: 218,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  k: {
    top: 27,
    left: 315,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
  },
  k1: {
    top: 200,
    left: 135,
  },
  k2: {
    top: 236,
    left: 318,
  },
  k3: {
    top: 418,
    left: 129,
  },
  k4: {
    top: 459,
    left: 315,
    fontFamily: FontFamily.heiReina,
    letterSpacing: 0.6,
    fontSize: FontSize.size_11xl,
  },
  rectangleParent: {
    height: 656,
    left: 0,
    top: 0,
  },
  groupChild1: {
    top: 647,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  groupChild2: {
    top: 685,
    borderRadius: Border.br_3xs,
  },
  groupChild3: {
    top: 894,
  },
  groupChild4: {
    top: 15,
    left: 0,
  },
  k5: {
    left: 124,
    top: 0,
  },
  vectorParent: {
    top: 1054,
    height: 195,
    width: 150,
    left: 0,
    position: "absolute",
  },
  groupChild5: {
    top: 858,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  groupChild6: {
    top: 1280,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  groupChild7: {
    top: 1312,
  },
  groupChild8: {
    top: 1106,
    left: 182,
    borderRadius: Border.br_3xs,
  },
  k6: {
    top: 840,
    left: 130,
  },
  k7: {
    top: 877,
    left: 312,
  },
  k8: {
    top: 1086,
  },
  k9: {
    top: 1268,
    left: 125,
  },
  k10: {
    top: 1297,
  },
  groupParent: {
    top: 148,
    height: 1492,
    left: 19,
  },
  k11: {
    top: 815,
  },
  berandaChild14: {
    top: 1667,
  },
  berandaChild15: {
    top: 1639,
    borderRadius: Border.br_3xs,
    left: 19,
  },
  berandaChild16: {
    top: 1842,
    left: 20,
    borderRadius: Border.br_3xs,
  },
  berandaChild17: {
    top: 1877,
  },
  kesehatan1: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
  },
  kesehatan: {
    left: 25,
  },
  kecantikan: {
    left: 154,
  },
  minuman: {
    left: 283,
  },
  k12: {
    top: 131,
    left: 155,
  },
  k13: {
    top: 779,
    left: 149,
  },
  k14: {
    top: 1623,
  },
  k15: {
    top: 1648,
  },
  k16: {
    top: 1827,
  },
  k17: {
    top: 1860,
    left: 330,
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
  berandaChild18: {
    height: "5.33%",
    width: "10%",
    top: "3.79%",
    right: "23.59%",
    bottom: "90.88%",
    left: "66.41%",
    position: "absolute",
  },
  beranda: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
});

export default Beranda;
