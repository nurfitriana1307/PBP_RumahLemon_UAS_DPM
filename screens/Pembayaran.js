import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Pembayaran = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pembayaran, styles.pembayaranLayout]}>
      <View style={[styles.pembayaranChild, styles.groupItemPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector191.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector201.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector71.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.pembayaranItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-5421.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector211.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
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
        source={require("../assets/vector221.png")}
      />
      <Image
        style={[styles.vectorIcon15, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector231.png")}
      />
      <View style={[styles.pembayaranInner, styles.groupChildBg]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupItemShadowBox]} />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/rectangle-662.png")}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/rectangle-66-stroke2.png")}
        />
        <Image
          style={[styles.ringkasanBelanjaIcon, styles.belanjaIconLayout]}
          resizeMode="cover"
          source={require("../assets/ringkasan-belanja.png")}
        />
        <Image
          style={[styles.totalBelanjaIcon, styles.belanjaIconLayout]}
          resizeMode="cover"
          source={require("../assets/total-belanja2.png")}
        />
        <View style={[styles.rectangleView, styles.groupItemShadowBox]} />
        <Text style={[styles.bayar, styles.bayarFlexBox]}>Bayar</Text>
        <Text style={[styles.rp120000, styles.pembayaranClr]}>Rp120000</Text>
      </View>
      <Text style={[styles.pembayaran1, styles.pembayaranClr]}>Pembayaran</Text>
      <View style={styles.pembayaranChild1} />
      <View style={[styles.pembayaranChild2, styles.pembayaranChildLayout3]} />
      <Text style={[styles.metodePembayaran, styles.rectangleIconPosition]}>
        Metode Pembayaran
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-68.png")}
      />
      <Text style={[styles.transferAntarBank, styles.ovoTypo]}>
        Transfer Antar bank
      </Text>
      <View style={[styles.pembayaranChild3, styles.pembayaranChildLayout3]} />
      <Image
        style={[styles.pembayaranChild4, styles.pembayaranChildPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <Image
        style={[styles.pembayaranChild5, styles.pembayaranChildPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-70.png")}
      />
      <Image
        style={[styles.pembayaranChild6, styles.pembayaranChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-711.png")}
      />
      <Image
        style={[styles.pembayaranChild7, styles.pembayaranChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-72.png")}
      />
      <View style={[styles.pembayaranChild8, styles.pembayaranChildLayout3]} />
      <View style={[styles.pembayaranChild9, styles.pembayaranChildLayout3]} />
      <View style={[styles.pembayaranChild10, styles.pembayaranChildLayout3]} />
      <Text style={[styles.ovo, styles.ovoTypo]}>Ovo</Text>
      <Text style={[styles.gopay, styles.ovoTypo]}>Gopay</Text>
      <Text style={[styles.indomaret, styles.ovoTypo]}>Indomaret</Text>
      <Text style={[styles.alfamart, styles.ovoTypo]}>Alfamart</Text>
      <Image
        style={[styles.ellipseIcon, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.pembayaranChild11, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.pembayaranChild12, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.pembayaranChild13, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.pembayaranChild14, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.pembayaranChild15, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-76.png")}
      />
      <Text style={[styles.cashOnDelivery, styles.ovoTypo]}>
        Cash on delivery
      </Text>
      <Image
        style={[styles.pembayaranChild16, styles.pembayaranChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.pembayaranChild17}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.vectorIcon16, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector341.png")}
      />
      <Image
        style={[styles.vectorIcon17, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector351.png")}
      />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
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
  pembayaranLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
  },
  groupItemPosition: {
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
  groupChildBg: {
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  groupLayout: {
    height: 610,
    width: 332,
  },
  groupItemShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  belanjaIconLayout: {
    height: 12,
    position: "absolute",
  },
  bayarFlexBox: {
    alignItems: "center",
    display: "flex",
    lineHeight: 50,
  },
  pembayaranClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  pembayaranChildLayout3: {
    height: 1,
    backgroundColor: Color.colorYellow,
    width: 304,
    left: 46,
    position: "absolute",
  },
  rectangleIconPosition: {
    left: 57,
    position: "absolute",
  },
  ovoTypo: {
    height: 18,
    width: 164,
    fontSize: FontSize.size_3xs,
    left: 110,
    color: Color.colorBlack,
    fontWeight: "300",
    letterSpacing: 0.2,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  pembayaranChildPosition1: {
    height: 30,
    left: 64,
    position: "absolute",
  },
  pembayaranChildPosition: {
    width: 40,
    left: 61,
    position: "absolute",
  },
  pembayaranChildLayout: {
    height: 16,
    position: "absolute",
  },
  pembayaranChild: {
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
  pembayaranItem: {
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
  pembayaranInner: {
    top: 473,
    left: 356,
    width: 12,
    height: 2,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  groupChild: {
    top: 2,
    left: 8,
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorMoccasin_100,
    height: 610,
    width: 332,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 337,
    left: 19,
    width: 292,
    height: 70,
    position: "absolute",
  },
  ringkasanBelanjaIcon: {
    top: 352,
    left: 34,
    width: 98,
  },
  totalBelanjaIcon: {
    top: 377,
    left: 38,
    width: 70,
  },
  rectangleView: {
    top: 442,
    left: 107,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGold_100,
    width: 116,
    height: 45,
  },
  bayar: {
    top: 451,
    left: 138,
    color: Color.colorLimegreen,
    width: 81,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp120000: {
    top: 376,
    left: 235,
    fontSize: FontSize.size_xs,
    lineHeight: 10,
    fontWeight: "300",
    letterSpacing: 0.2,
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rectangleParent: {
    top: 106,
    left: 32,
    width: 340,
    height: 612,
    position: "absolute",
  },
  pembayaran1: {
    top: 36,
    left: 42,
    fontFamily: FontFamily.trajanPro,
    lineHeight: 50,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  pembayaranChild1: {
    top: 115,
    borderRadius: Border.br_8xs,
    height: 303,
    width: 304,
    left: 46,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  pembayaranChild2: {
    top: 362,
  },
  metodePembayaran: {
    top: 121,
    fontSize: 13,
    letterSpacing: 1.3,
    fontFamily: FontFamily.baskervilleOldFace,
    width: 196,
    height: 15,
    color: Color.colorBlack,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 50,
  },
  rectangleIcon: {
    top: 145,
    width: 47,
    height: 38,
  },
  transferAntarBank: {
    top: 155,
  },
  pembayaranChild3: {
    top: 186,
  },
  pembayaranChild4: {
    top: 193,
    width: 34,
  },
  pembayaranChild5: {
    top: 235,
    width: 36,
  },
  pembayaranChild6: {
    top: 277,
    height: 31,
  },
  pembayaranChild7: {
    top: 323,
    height: 32,
  },
  pembayaranChild8: {
    top: 230,
  },
  pembayaranChild9: {
    top: 271,
  },
  pembayaranChild10: {
    top: 315,
  },
  ovo: {
    top: 200,
  },
  gopay: {
    top: 243,
  },
  indomaret: {
    top: 284,
  },
  alfamart: {
    top: 330,
  },
  ellipseIcon: {
    top: 158,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild11: {
    top: 201,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild12: {
    top: 244,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild13: {
    top: 285,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild14: {
    top: 331,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild15: {
    top: 380,
    left: 62,
    width: 38,
  },
  cashOnDelivery: {
    top: 378,
  },
  pembayaranChild16: {
    top: 379,
    width: 16,
    left: 320,
    height: 16,
  },
  pembayaranChild17: {
    top: 382,
    left: 323,
    width: 10,
    height: 10,
    position: "absolute",
  },
  vectorIcon16: {
    height: "4.67%",
    width: "7.44%",
    top: "11.65%",
    right: "4.56%",
    bottom: "83.68%",
    left: "88%",
    position: "absolute",
  },
  vectorIcon17: {
    height: "4.23%",
    width: "5.44%",
    top: "10.43%",
    right: "9.18%",
    bottom: "85.34%",
    left: "85.38%",
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
  pembayaran: {
    flex: 1,
    width: "100%",
  },
});

export default Pembayaran;
