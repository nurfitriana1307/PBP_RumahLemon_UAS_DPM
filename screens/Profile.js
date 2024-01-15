import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import Frame from "../components/Frame";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const [rectangle3Visible, setRectangle3Visible] = useState(false);
  const [rectangle4Visible, setRectangle4Visible] = useState(false);
  const [rectangle5Visible, setRectangle5Visible] = useState(false);
  const [jOINWITHUSVisible, setJOINWITHUSVisible] = useState(false);

  const openRectangle3 = useCallback(() => {
    setRectangle3Visible(true);
  }, []);

  const closeRectangle3 = useCallback(() => {
    setRectangle3Visible(false);
  }, []);

  const openRectangle4 = useCallback(() => {
    setRectangle4Visible(true);
  }, []);

  const closeRectangle4 = useCallback(() => {
    setRectangle4Visible(false);
  }, []);

  const openRectangle5 = useCallback(() => {
    setRectangle5Visible(true);
  }, []);

  const closeRectangle5 = useCallback(() => {
    setRectangle5Visible(false);
  }, []);

  const openJOINWITHUS = useCallback(() => {
    setJOINWITHUSVisible(true);
  }, []);

  const closeJOINWITHUS = useCallback(() => {
    setJOINWITHUSVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.profile, styles.profileLayout]}>
        <View style={[styles.profileChild, styles.groupItemPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector24.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector36.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector25.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector51.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector61.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector81.png")}
        />
        <Image
          style={[styles.profileItem, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-5431.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector211.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector101.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector111.png")}
        />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector38.png")}
        />
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector39.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector231.png")}
        />
        <Image
          style={[styles.profileInner, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group-792.png")}
        />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <Text style={[styles.adiTriandaAgustina, styles.emailFlexBox]}>
            Adi trianda agustina
          </Text>
          <Text style={[styles.nama, styles.namaFlexBox]}>Nama</Text>
          <Text style={[styles.jenisKelamin, styles.namaTypo]}>
            Jenis Kelamin
          </Text>
          <Text style={[styles.tanggalLahir, styles.namaTypo]}>
            Tanggal lahir
          </Text>
          <Text style={[styles.noHanphone, styles.namaTypo]}>No Hanphone</Text>
          <Text style={[styles.email, styles.namaTypo]}>Email</Text>
          <Text style={[styles.lakiLaki, styles.lakiTypo]}>Laki - Laki</Text>
          <Text style={[styles.text, styles.textTypo]}>11 - 11 - 2003</Text>
          <Text style={[styles.text1, styles.textTypo]}>087710592124</Text>
          <Text style={[styles.trianda87popogmailcom, styles.lakiTypo]}>
            trianda87popo@gmail.com
          </Text>
        </View>
        <Pressable
          style={[styles.rectanglePressable, styles.profileChildShadowBox]}
          onPress={openRectangle3}
        />
        <Pressable
          style={[styles.profileChild1, styles.profileChildShadowBox]}
          onPress={openRectangle4}
        />
        <Pressable
          style={[styles.profileChild2, styles.profileChildShadowBox]}
          onPress={openRectangle5}
        />
        <Pressable style={styles.joinWithUsContainer} onPress={openJOINWITHUS}>
          <Text style={[styles.joinWithUs, styles.namaFlexBox]}>
            JOIN WITH US
          </Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon16, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector40.png")}
        />
        <Image
          style={[styles.vectorIcon17, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector411.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group-110.png")}
        />
        <StatusdefaultHomeoffSear
          dimensionCode={require("../assets/group-9931.png")}
          statusdefaultHomeoffSearPosition="absolute"
          statusdefaultHomeoffSearTop={772}
          statusdefaultHomeoffSearLeft={0}
          statusdefaultHomeoffSearWidth={390}
        />
        <StatusdefaultUkuranbesarImage
          dimensionCode={require("../assets/component-111.png")}
          statusdefaultUkuranbesarIPosition="absolute"
          statusdefaultUkuranbesarITop={26}
          statusdefaultUkuranbesarILeft={313}
        />
      </View>

      <Modal animationType="fade" transparent visible={rectangle3Visible}>
        <View style={styles.rectangle3Overlay}>
          <Pressable style={styles.rectangle3Bg} onPress={closeRectangle3} />
          <Frame onClose={closeRectangle3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={rectangle4Visible}>
        <View style={styles.rectangle4Overlay}>
          <Pressable style={styles.rectangle4Bg} onPress={closeRectangle4} />
          <Frame onClose={closeRectangle4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={rectangle5Visible}>
        <View style={styles.rectangle5Overlay}>
          <Pressable style={styles.rectangle5Bg} onPress={closeRectangle5} />
          <Frame onClose={closeRectangle5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={jOINWITHUSVisible}>
        <View style={styles.jOINWITHUSOverlay}>
          <Pressable style={styles.jOINWITHUSBg} onPress={closeJOINWITHUS} />
          <Frame onClose={closeJOINWITHUS} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    right: "92.08%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconPosition: {
    top: "3.79%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupShadowBox: {
    height: 236,
    width: 345,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  emailFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  namaFlexBox: {
    height: 34,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  namaTypo: {
    left: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 35,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  lakiTypo: {
    left: 213,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    height: 19,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 35,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    left: 214,
    position: "absolute",
  },
  profileChildShadowBox: {
    height: 55,
    width: 286,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  profileChild: {
    width: 390,
    position: "absolute",
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
  },
  vectorIcon1: {
    height: "23.35%",
    width: "40.79%",
    top: "85%",
    right: "88.69%",
    bottom: "-8.35%",
    left: "-29.49%",
  },
  vectorIcon2: {
    height: "7.38%",
    width: "15.82%",
    top: "81.61%",
    right: "79.64%",
    bottom: "11.01%",
    left: "4.54%",
  },
  vectorIcon3: {
    height: "6.67%",
    width: "11.82%",
    top: "79.67%",
    right: "88.72%",
    bottom: "13.66%",
    left: "-0.54%",
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
  },
  vectorIcon8: {
    height: "4.16%",
    width: "10.05%",
    top: "60.23%",
    right: "6.36%",
    bottom: "35.62%",
    left: "83.59%",
  },
  vectorIcon9: {
    height: "3.55%",
    width: "8.26%",
    top: "61.35%",
    right: "11.72%",
    bottom: "35.09%",
    left: "80.03%",
  },
  profileItem: {
    height: "22.78%",
    width: "51.23%",
    top: "83.2%",
    right: "-15.49%",
    bottom: "-5.98%",
    left: "64.26%",
  },
  vectorIcon10: {
    height: "13.67%",
    width: "27.72%",
    top: "31.85%",
    right: "-12.9%",
    bottom: "54.48%",
    left: "85.18%",
  },
  vectorIcon11: {
    height: "4.51%",
    width: "9.28%",
    top: "30.21%",
    right: "-19.08%",
    bottom: "65.27%",
    left: "109.79%",
  },
  vectorIcon12: {
    height: "3.76%",
    width: "7.85%",
    top: "28.67%",
    right: "-16.26%",
    bottom: "67.57%",
    left: "108.41%",
  },
  vectorIcon13: {
    height: "14.14%",
    width: "25.46%",
    top: "36.53%",
    right: "83.08%",
    bottom: "49.34%",
    left: "-8.54%",
  },
  vectorIcon14: {
    height: "4.6%",
    width: "8.97%",
    top: "34.22%",
    right: "77.92%",
    bottom: "61.18%",
    left: "13.1%",
  },
  vectorIcon15: {
    height: "3.93%",
    width: "7.31%",
    top: "32.77%",
    right: "81.41%",
    bottom: "63.29%",
    left: "11.28%",
  },
  profileInner: {
    height: "4.74%",
    width: "10.26%",
    right: "81.79%",
    bottom: "91.47%",
    left: "7.95%",
  },
  groupChild: {
    top: 9,
    left: 8,
    backgroundColor: Color.colorMoccasin_100,
  },
  groupItem: {
    backgroundColor: Color.colorGold_100,
    left: 0,
    top: 0,
  },
  adiTriandaAgustina: {
    top: 19,
    width: 131,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    left: 214,
    display: "flex",
    lineHeight: 35,
    position: "absolute",
  },
  nama: {
    top: 13,
    width: 81,
    left: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 35,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  jenisKelamin: {
    top: 47,
    textAlign: "left",
    left: 15,
  },
  tanggalLahir: {
    top: 90,
    height: 29,
    width: 83,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  noHanphone: {
    top: 131,
    width: 86,
    height: 30,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  email: {
    top: 164,
    width: 94,
    height: 32,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  lakiLaki: {
    top: 58,
    width: 129,
    height: 20,
    lineHeight: 35,
    left: 213,
  },
  text: {
    top: 95,
    width: 97,
  },
  text1: {
    top: 136,
    width: 83,
  },
  trianda87popogmailcom: {
    top: 172,
    lineHeight: 15,
    width: 140,
  },
  rectangleParent: {
    top: 99,
    left: 18,
    width: 353,
    height: 245,
    position: "absolute",
  },
  rectangle3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectanglePressable: {
    left: 50,
    backgroundColor: Color.colorGold_200,
    top: 400,
  },
  rectangle4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  profileChild1: {
    top: 391,
    left: 45,
    backgroundColor: Color.colorYellow,
  },
  rectangle5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  profileChild2: {
    top: 384,
    left: 40,
    backgroundColor: Color.colorMoccasin_100,
  },
  jOINWITHUSOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  jOINWITHUSBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  joinWithUs: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 0.8,
    lineHeight: 50,
    fontFamily: FontFamily.heiReina,
    color: Color.colorLimegreen,
    width: 217,
  },
  joinWithUsContainer: {
    left: 95,
    top: 400,
    position: "absolute",
  },
  vectorIcon16: {
    height: "3.47%",
    width: "10.28%",
    top: "45.38%",
    right: "6.38%",
    bottom: "51.15%",
    left: "83.33%",
  },
  vectorIcon17: {
    height: "3.14%",
    width: "7.69%",
    top: "44.79%",
    right: "11.79%",
    bottom: "52.07%",
    left: "80.51%",
  },
  groupIcon: {
    height: "5.33%",
    width: "10%",
    right: "23.59%",
    bottom: "90.88%",
    left: "66.41%",
  },
  profile: {
    flex: 1,
    width: "100%",
  },
});

export default Profile;
