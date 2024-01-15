import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Image
        style={[styles.registerChild, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-62.png")}
      />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.rectangleParent, styles.groupContainerLayout]}>
            <View style={styles.groupChild} />
            <View style={styles.groupItem} />
            <View style={[styles.groupInner, styles.groupChildShadowBox]} />
            <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
            <Text style={[styles.phoneNumber, styles.registerTypo]}>
              phone number
            </Text>
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Pressable
              style={styles.rectanglePressable}
              onPress={() => navigation.navigate("Beranda")}
            />
          </View>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
          <Text style={[styles.register1, styles.registerTypo]}>Register</Text>
          <Image
            style={[styles.groupIcon, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group-791.png")}
          />
          <Text style={styles.username}>username</Text>
          <Text style={[styles.password, styles.emailLayout]}>password</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
          <Text style={[styles.email, styles.emailLayout]}>email</Text>
          <View style={[styles.groupChild6, styles.groupChildLayout]} />
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-6211.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-56.png")}
        />
        <View style={[styles.frameInner, styles.groupChildLayout]} />
        <Image
          style={[styles.vectorIcon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector42.png")}
        />
        <Pressable
          style={[styles.groupWrapper, styles.groupLayout]}
          onPress={() => navigation.navigate("Logo")}
        >
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild7, styles.groupChildPosition]} />
            <View style={[styles.groupChild8, styles.groupChildPosition]} />
          </View>
        </Pressable>
        <Image
          style={[styles.groupIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group21.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector43.png")}
        />
        <Text style={[styles.register2, styles.registerTypo]}>Register</Text>
        <Text style={[styles.alreadyHaveAccount, styles.loginTypo]}>
          Already have account?
        </Text>
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentPosition: {
    left: 0,
    top: 0,
  },
  groupContainerLayout: {
    height: 478,
    width: 325,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 27,
    width: 261,
    left: 27,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  registerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    backgroundColor: Color.colorYellow,
    width: 261,
    position: "absolute",
  },
  groupLayout1: {
    left: "11.26%",
    right: "83.82%",
    width: "4.92%",
    height: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  emailLayout: {
    height: 16,
    width: 86,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    left: 72,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 19,
    position: "absolute",
  },
  groupChildPosition: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    left: "15.36%",
    right: "80.45%",
    width: "4.19%",
    height: "2.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "100",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontSize: FontSize.size_5xs,
    top: 397,
    textAlign: "left",
    position: "absolute",
  },
  registerChild: {
    height: "16.32%",
    width: "29.47%",
    top: "69.89%",
    right: "7.77%",
    bottom: "13.79%",
    left: "62.77%",
  },
  groupChild: {
    left: 11,
    width: 314,
    height: 470,
    backgroundColor: Color.colorGold_200,
    top: 9,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  groupItem: {
    backgroundColor: Color.colorMoccasin_100,
    width: 315,
    height: 468,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  groupInner: {
    top: 256,
  },
  rectangleView: {
    top: 211,
  },
  phoneNumber: {
    top: 198,
    color: Color.colorGray_500,
    left: 72,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
  },
  groupChild1: {
    top: 237,
    left: 27,
    backgroundColor: Color.colorYellow,
  },
  rectanglePressable: {
    top: 319,
    backgroundColor: Color.colorLimegreen,
    height: 30,
    width: 261,
    left: 27,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupChild2: {
    top: 119,
  },
  register1: {
    top: 62,
    left: 92,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
  },
  groupIcon: {
    top: "54.67%",
    bottom: "42.01%",
  },
  groupChild3: {
    top: "26%",
    bottom: "70.67%",
  },
  username: {
    top: 126,
    width: 118,
    height: 15,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    left: 72,
    position: "absolute",
  },
  password: {
    top: 261,
  },
  groupChild4: {
    top: 282,
    left: 27,
    backgroundColor: Color.colorYellow,
  },
  groupChild5: {
    top: 166,
  },
  email: {
    top: 171,
  },
  groupChild6: {
    top: 192,
    left: 27,
    backgroundColor: Color.colorYellow,
  },
  groupContainer: {
    top: 38,
    left: 18,
  },
  frameChild: {
    height: "36.59%",
    width: "55.47%",
    top: "76.74%",
    right: "-16.65%",
    bottom: "-13.33%",
    left: "61.17%",
  },
  frameItem: {
    height: "10.84%",
    width: "16.82%",
    top: "8.42%",
    right: "43.24%",
    bottom: "80.73%",
    left: "39.94%",
  },
  frameInner: {
    top: 183,
    left: 46,
  },
  vectorIcon: {
    height: "5.37%",
    width: "7.82%",
    top: "26.56%",
    right: "10.06%",
    bottom: "68.08%",
    left: "82.12%",
  },
  groupChild7: {
    top: 18,
    width: 25,
    height: 2,
  },
  groupChild8: {
    top: 1,
    width: 2,
    height: 25,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 330,
    top: 9,
    height: 20,
    width: 19,
  },
  groupIcon1: {
    top: "41.21%",
    bottom: "56.04%",
  },
  vectorIcon1: {
    top: "49.45%",
    bottom: "47.8%",
  },
  register2: {
    top: 347,
    left: 136,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
  },
  alreadyHaveAccount: {
    left: 126,
    color: Color.colorBlack,
  },
  login: {
    left: 210,
    color: Color.colorLimegreen,
  },
  groupParent: {
    width: 358,
    position: "absolute",
    top: 0,
    overflow: "hidden",
    height: 546,
  },
  register: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 546,
    borderRadius: Border.br_8xs,
  },
});

export default Register;
