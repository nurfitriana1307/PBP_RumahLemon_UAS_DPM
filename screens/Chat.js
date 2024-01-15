import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chat, styles.chatLayout]}>
      <View style={[styles.chatChild, styles.chatChildPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector191.png")}
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
        source={require("../assets/vector201.png")}
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
        style={[styles.chatItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-5421.png")}
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
        source={require("../assets/vector221.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector231.png")}
      />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <View style={[styles.chatInner, styles.chatInnerLayout]}>
        <View style={[styles.rectangleParent, styles.chatInnerLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/rectangle-15.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleView, styles.groupItemLayout]} />
      <Text style={[styles.admin, styles.adminFlexBox]}>Admin</Text>
      <Image
        style={[styles.ellipseIcon, styles.chatChild1Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.chatChild1, styles.chatChild1Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.chatChild2}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={[styles.chatChild3, styles.childLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.chatChild4Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-881.png")}
      />
      <Image
        style={[styles.chatChild4, styles.chatChild4Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8811.png")}
      />
      <Text style={[styles.haloMin, styles.haloTypo]}>Halo min</Text>
      <Text style={[styles.haloKak, styles.haloTypo]}>Halo kak</Text>
      <Text style={[styles.text, styles.textTypo]}>15.01</Text>
      <Text style={[styles.text1, styles.textTypo]}>15.02</Text>
      <Image
        style={styles.chatChild5}
        resizeMode="cover"
        source={require("../assets/rectangle-89.png")}
      />
      <Text style={styles.today}>Today</Text>
      <StatusdefaultUkuranbesarImage
        dimensionCode={require("../assets/component-1.png")}
        statusdefaultUkuranbesarIPosition="absolute"
        statusdefaultUkuranbesarITop={26}
        statusdefaultUkuranbesarILeft={313}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-110.png")}
      />
      <StatusdefaultHomeoffSear
        dimensionCode={require("../assets/group-9921.png")}
        statusdefaultHomeoffSearPosition="absolute"
        statusdefaultHomeoffSearTop={772}
        statusdefaultHomeoffSearLeft={0}
        statusdefaultHomeoffSearWidth={390}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  chatChildPosition: {
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
  chatInnerLayout: {
    height: 673,
    width: 369,
    position: "absolute",
  },
  childLayout: {
    width: 357,
    position: "absolute",
  },
  groupItemLayout: {
    width: 358,
    position: "absolute",
  },
  adminFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  chatChild1Layout: {
    height: 6,
    width: 6,
    left: 358,
    position: "absolute",
  },
  chatChild4Layout: {
    width: 100,
    position: "absolute",
  },
  haloTypo: {
    color: Color.colorGray_800,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_900,
    letterSpacing: 0.6,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
    position: "absolute",
  },
  chatChild: {
    width: 390,
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
  chatItem: {
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
  groupChild: {
    top: 12,
    left: 12,
    backgroundColor: Color.colorGold_200,
    height: 661,
    borderRadius: Border.br_8xs,
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
    height: 660,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 284,
    left: 42,
    width: 296,
    height: 37,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  chatInner: {
    top: 93,
    left: 14,
  },
  rectangleView: {
    top: 105,
    backgroundColor: Color.colorYellow,
    height: 41,
    left: 14,
  },
  admin: {
    left: 35,
    fontSize: FontSize.size_mini,
    letterSpacing: 2.3,
    color: Color.colorGray_1000,
    width: 121,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
    top: 113,
    position: "absolute",
  },
  ellipseIcon: {
    top: 113,
    width: 6,
    left: 358,
  },
  chatChild1: {
    top: 123,
  },
  chatChild2: {
    top: 133,
    height: 6,
    width: 6,
    left: 358,
    position: "absolute",
  },
  chatChild3: {
    top: 146,
    left: 15,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: Color.colorGray_900,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 607,
  },
  rectangleIcon: {
    top: 177,
    left: 249,
    height: 25,
  },
  chatChild4: {
    top: 218,
    left: 46,
    height: 23,
  },
  haloMin: {
    top: 164,
    left: 255,
  },
  haloKak: {
    top: 222,
    left: 60,
    width: 83,
    height: 14,
    alignItems: "center",
    display: "flex",
  },
  text: {
    top: 172,
    left: 317,
  },
  text1: {
    top: 211,
    left: 125,
  },
  chatChild5: {
    top: 150,
    left: 151,
    width: 60,
    height: 15,
    position: "absolute",
  },
  today: {
    left: 164,
    letterSpacing: 1.5,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: FontSize.size_3xs,
    top: 133,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
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
  chat: {
    flex: 1,
    width: "100%",
  },
});

export default Chat;
