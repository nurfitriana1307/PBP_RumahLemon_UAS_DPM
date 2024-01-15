import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginFrame = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginFrame, styles.frameChildLayout]}>
      <Image
        style={[styles.loginFrameChild, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-62.png")}
      />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.rectangleParent, styles.groupContainerLayout]}>
            <View style={styles.groupChild} />
            <View style={[styles.groupItem, styles.groupItemShadowBox]} />
            <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
            <View style={styles.gg1Parent}>
              <Image
                style={[styles.gg1Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/gg-1.png")}
              />
              <Image
                style={[styles.fc2Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/fc-2.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleView, styles.groupInnerShadowBox]} />
          <Text style={styles.login}>Login</Text>
          <Image
            style={[styles.groupIcon, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group-791.png")}
          />
          <Text style={[styles.username, styles.usernameFlexBox]}>
            username
          </Text>
          <Text style={[styles.password, styles.usernameFlexBox]}>
            password
          </Text>
          <View style={[styles.groupChild2, styles.frameInnerLayout]} />
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-621.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-56.png")}
        />
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
        <Image
          style={[styles.vectorIcon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector42.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Beranda")}
        />
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        <Text style={[styles.iForgotMyContainer, styles.orLoginUsingTypo]}>
          <Text style={styles.iForgotMyContainer1}>
            <Text style={styles.iForgotMy}>{`I Forgot my password, `}</Text>
            <Text style={styles.clickHereTo}>click here to reset</Text>
          </Text>
        </Text>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-16-stroke.png")}
        />
        <Text style={[styles.registerNewAccount, styles.login1Typo]}>
          Register New Account
        </Text>
        <Image
          style={[styles.icons8Phone481, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icons8phone48-1.png")}
        />
        <Text style={[styles.orLoginUsing, styles.orLoginUsingTypo]}>
          Or Login Using
        </Text>
        <Pressable
          style={[styles.groupWrapper, styles.groupLayout]}
          onPress={() => navigation.navigate("Logo")}
        >
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <View style={[styles.groupChild4, styles.groupChildPosition]} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  groupItemShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupInnerShadowBox: {
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
  iconLayout: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  groupLayout1: {
    left: "11.26%",
    right: "83.82%",
    width: "4.92%",
    height: "3.33%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  usernameFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  frameInnerLayout: {
    height: 1,
    backgroundColor: Color.colorYellow,
    width: 261,
    position: "absolute",
  },
  rectangleLayout: {
    height: 30,
    width: 261,
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.baskervilleOldFace,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  orLoginUsingTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 50,
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
  loginFrameChild: {
    height: "16.32%",
    width: "29.47%",
    top: "69.89%",
    right: "7.77%",
    bottom: "13.79%",
    left: "62.77%",
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupInner: {
    top: 167,
  },
  gg1Icon: {
    left: 0,
    top: 0,
  },
  fc2Icon: {
    left: 67,
    top: 0,
    width: 34,
  },
  gg1Parent: {
    top: 366,
    left: 75,
    width: 101,
    height: 34,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  rectangleView: {
    top: 119,
  },
  login: {
    top: 62,
    left: 111,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    position: "absolute",
  },
  groupIcon: {
    top: "36%",
    bottom: "60.67%",
  },
  groupChild1: {
    top: "26%",
    bottom: "70.67%",
  },
  username: {
    top: 126,
    width: 118,
    height: 15,
    color: Color.colorGray_500,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    left: 72,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    position: "absolute",
  },
  password: {
    top: 172,
    width: 86,
    height: 16,
    color: Color.colorGray_500,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    left: 72,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    position: "absolute",
  },
  groupChild2: {
    top: 193,
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
    position: "absolute",
  },
  frameItem: {
    height: "10.84%",
    width: "16.82%",
    top: "8.42%",
    right: "43.24%",
    bottom: "80.73%",
    left: "39.94%",
    position: "absolute",
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
    position: "absolute",
  },
  rectanglePressable: {
    top: 251,
    left: 45,
    backgroundColor: Color.colorLimegreen,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login1: {
    top: 241,
    left: 155,
    letterSpacing: 0.3,
    color: Color.colorWhite,
    lineHeight: 50,
    fontFamily: FontFamily.baskervilleOldFace,
  },
  iForgotMy: {
    color: "#939393",
  },
  clickHereTo: {
    color: "#3e66f3",
  },
  iForgotMyContainer1: {
    width: "100%",
  },
  iForgotMyContainer: {
    top: 295,
    left: 83,
    fontSize: FontSize.size_3xs,
    width: 205,
    height: 12,
    alignItems: "center",
    display: "flex",
  },
  rectangleIcon: {
    top: 324,
    left: 43,
  },
  registerNewAccount: {
    top: 334,
    left: 105,
    lineHeight: 10,
    color: "#777",
  },
  icons8Phone481: {
    top: 404,
    left: 225,
  },
  orLoginUsing: {
    top: 354,
    left: 119,
    color: "#898585",
    fontSize: FontSize.size_mini,
    fontWeight: "300",
  },
  groupChild3: {
    top: 18,
    width: 25,
    height: 2,
  },
  groupChild4: {
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
  groupParent: {
    position: "absolute",
    overflow: "hidden",
    left: 0,
    height: 546,
    width: 358,
  },
  loginFrame: {
    backgroundColor: Color.colorWhitesmoke,
    height: 546,
    width: 358,
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
  },
});

export default LoginFrame;
