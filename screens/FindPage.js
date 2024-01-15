import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FindPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findPage}>
      <Image
        style={[styles.findPageChild, styles.findPageChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector45.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector71.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.findPageItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-547.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector211.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector131.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector141.png")}
      />
      <View style={styles.findPageInner} />
      <Text style={styles.search}>SEARCH</Text>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupViewLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
      </View>
      <Text style={styles.clearHistory}>{`Clear History
`}</Text>
      <Text style={[styles.leFame, styles.leFameTypo]}>{`le fame
`}</Text>
      <View style={[styles.rectangleView, styles.findChildLayout]} />
      <Text style={[styles.manJadda, styles.leFameTypo]}>{`man jadda
`}</Text>
      <View style={[styles.findPageChild1, styles.findChildLayout]} />
      <View style={[styles.findPageChild2, styles.findChildLayout]} />
      <Text style={[styles.chiaseedOrganic, styles.maduTypo]}>
        chiaseed organic
      </Text>
      <Text style={[styles.lemonTea, styles.maduTypo]}>lemon tea</Text>
      <Text style={[styles.madu, styles.maduTypo]}>madu</Text>
      <View style={[styles.findPageChild3, styles.findChildLayout]} />
      <View style={[styles.findPageChild4, styles.findChildLayout]} />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon15, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector46.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/group-110.png")}
      />
      <StatusdefaultHomeoffSear
        dimensionCode={require("../assets/group-994.png")}
        statusdefaultHomeoffSearPosition="absolute"
        statusdefaultHomeoffSearTop={772}
        statusdefaultHomeoffSearLeft={0}
        statusdefaultHomeoffSearWidth={390}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  findPageChildPosition: {
    left: 0,
    top: 0,
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
  groupViewLayout: {
    height: 15,
    width: 13,
    position: "absolute",
  },
  groupPosition: {
    transform: [
      {
        rotate: "-48.95deg",
      },
    ],
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    position: "absolute",
  },
  leFameTypo: {
    height: 59,
    width: 174,
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    fontWeight: "200",
    left: 21,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 50,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  findChildLayout: {
    width: 348,
    backgroundColor: Color.colorYellow,
    left: 17,
    height: 1,
    position: "absolute",
  },
  maduTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    fontWeight: "200",
    left: 21,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 50,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconPosition: {
    bottom: "91.35%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  findPageChild: {
    width: 390,
    height: 847,
    position: "absolute",
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
  findPageItem: {
    height: "22.78%",
    width: "51.23%",
    top: "82.82%",
    right: "-25.08%",
    bottom: "-5.6%",
    left: "73.85%",
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
  findPageInner: {
    top: 43,
    left: 51,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGold_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 226,
    height: 32,
    position: "absolute",
  },
  search: {
    top: 50,
    left: 63,
    letterSpacing: 3,
    fontFamily: FontFamily.trajanPro,
    color: Color.colorGray_500,
    width: 140,
    height: 18,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 50,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChild: {
    top: 14,
    width: 18,
    height: 1,
    transform: [
      {
        rotate: "-48.95deg",
      },
    ],
    backgroundColor: Color.colorGoldenrod,
  },
  groupItem: {
    top: 1,
    width: 1,
    transform: [
      {
        rotate: "-48.95deg",
      },
    ],
    backgroundColor: Color.colorGoldenrod,
    height: 18,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 52,
    left: 282,
  },
  clearHistory: {
    top: 98,
    left: 279,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    color: "#f6567d",
    letterSpacing: 0.3,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  leFame: {
    top: 118,
  },
  rectangleView: {
    top: 140,
  },
  manJadda: {
    top: 158,
  },
  findPageChild1: {
    top: 230,
  },
  findPageChild2: {
    top: 183,
  },
  chiaseedOrganic: {
    top: 190,
    width: 433,
  },
  lemonTea: {
    top: 238,
    width: 184,
  },
  madu: {
    top: 278,
    width: 175,
  },
  findPageChild3: {
    top: 277,
  },
  findPageChild4: {
    top: 313,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "6.67%",
    top: "8.18%",
    right: "89.49%",
    bottom: "88.86%",
    width: "3.85%",
    height: "2.96%",
    position: "absolute",
  },
  vectorIcon15: {
    width: "6.41%",
    top: "5.69%",
    right: "30.26%",
    left: "63.33%",
    height: "2.96%",
  },
  groupIcon: {
    height: "5.33%",
    width: "10%",
    top: "3.32%",
    right: "8.72%",
    left: "81.28%",
  },
  findPage: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default FindPage;
