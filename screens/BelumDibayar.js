import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultKeranjangoff from "../components/StatusdefaultKeranjangoff";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BelumDibayar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.belumDibayar, styles.belumLayout]}>
      <View style={[styles.belumDibayarChild, styles.belumLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector25.png")}
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
        style={[styles.belumDibayarItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-544.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector91.png")}
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
        source={require("../assets/vector181.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector141.png")}
      />
      <View
        style={[styles.belumDibayarInner, styles.belumDibayarInnerShadowBox]}
      />
      <Image
        style={[styles.rectangleIcon, styles.belumChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-441.png")}
      />
      <Text style={styles.maduLebahLiar}>Madu lebah liar 250 gram</Text>
      <Text style={[styles.items, styles.itemsTypo]}>1 Items</Text>
      <Text style={[styles.rp40000, styles.rp40000Typo]}>RP.40000</Text>
      <Image
        style={[styles.belumDibayarChild1, styles.belumChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Text style={[styles.leFame200ml, styles.leFame200mlTypo]}>
        Le fame 200ml
      </Text>
      <Text style={[styles.items1, styles.itemsTypo]}>2 Items</Text>
      <Text style={[styles.rp72000, styles.rp72000Position]}>RP.72000</Text>
      <Image
        style={[styles.belumDibayarChild2, styles.belumChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text style={[styles.bodyScrubLe, styles.rp105000Position]}>
        Body scrub le fame
      </Text>
      <Text style={[styles.items2, styles.itemsTypo]}>3 Items</Text>
      <Text style={[styles.rp105000, styles.rp105000Position]}>RP.105000</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.belumDibayarInnerShadowBox]}
        onPress={() => navigation.navigate("Pembayaran")}
      />
      <Text style={styles.bayar}>Bayar</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <View style={styles.frameView}>
        <StatusdefaultKeranjangoff
          dibatalkan="Belum Dibayar"
          showDibatalkan
          showRectangleView={false}
          statusdefaultKeranjangoffPosition="absolute"
          statusdefaultKeranjangoffTop={8}
          statusdefaultKeranjangoffLeft={8}
          sedangDiprosesHeight="unset"
          sedangDiprosesWidth="unset"
          sedangDiprosesFontFamily="unset"
          sedangDiprosesColor="unset"
          sedangDiprosesTextAlign="unset"
          sedangDiprosesDisplay="unset"
          keranjangHeight="unset"
          keranjangWidth="unset"
          keranjangTop="21.74%"
          keranjangLeft="55.29%"
          keranjangFontFamily="unset"
          keranjangColor="unset"
          keranjangTextAlign="unset"
          keranjangDisplay="unset"
          belumDibayarHeight="unset"
          belumDibayarWidth="unset"
          belumDibayarColor="unset"
          belumDibayarFontFamily="unset"
          belumDibayarTextAlign="unset"
          belumDibayarDisplay="unset"
          selesaiHeight="100%"
          selesaiWidth="16.81%"
          selesaiTop="0%"
          selesaiLeft="14.38%"
          selesaiColor="unset"
          selesaiFontFamily="unset"
          selesaiTextAlign="unset"
          selesaiDisplay="unset"
          selesaiRight="68.8%"
          selesaiBottom="0%"
          dibatalkanTop="0%"
          dibatalkanLeft="0%"
          dibatalkanFontSize={15}
          dibatalkanLetterSpacing={0.3}
          dibatalkanLineHeight={12}
          dibatalkanFontFamily="Baskerville Old Face"
          dibatalkanColor="#2bb32a"
          dibatalkanTextAlign="left"
          dibatalkanHeight="100%"
          dibatalkanWidth="100%"
          dibatalkanRight="unset"
          dibatalkanBottom="unset"
          dibatalkanBackgroundColor="unset"
          rectangleViewHeight1="4.35%"
          rectangleViewWidth1="95.88%"
          rectangleViewTop1="78.26%"
          rectangleViewRight1="5.15%"
          rectangleViewBottom1="17.39%"
          rectangleViewLeft1="-1.03%"
          rectangleViewBackgroundColor1="#e9c005"
          onSedangDiprosesPress={() => navigation.navigate("SedangDiproses")}
          onDalamPerjalananPress={() => navigation.navigate("DalamPerjalanan")}
          onKeranjangPress={() => navigation.navigate("Keranjang")}
          onGroupPressablePress1={() => navigation.navigate("BelumDibayar")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-110.png")}
      />
      <StatusdefaultHomeoffSear
        dimensionCode={require("../assets/group-9911.png")}
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
  );
};

const styles = StyleSheet.create({
  belumLayout: {
    height: 844,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
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
  belumDibayarInnerShadowBox: {
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
  belumChildLayout: {
    height: 100,
    width: 100,
    left: 28,
    position: "absolute",
  },
  itemsTypo: {
    color: Color.colorGray_200,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
    textAlign: "left",
    position: "absolute",
  },
  rp40000Typo: {
    width: 60,
    left: 307,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  leFame200mlTypo: {
    width: 154,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    left: 146,
  },
  rp72000Position: {
    top: 153,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rp105000Position: {
    top: 391,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  belumDibayarChild: {
    top: 0,
    left: 0,
    width: 390,
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
  belumDibayarItem: {
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
  belumDibayarInner: {
    top: 115,
    left: 9,
    backgroundColor: Color.colorMoccasin_100,
    width: 373,
    height: 378,
  },
  rectangleIcon: {
    top: 252,
  },
  maduLebahLiar: {
    lineHeight: 20,
    width: 122,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    top: 272,
    left: 146,
    position: "absolute",
  },
  items: {
    top: 295,
    left: 145,
  },
  rp40000: {
    lineHeight: 50,
    width: 60,
    left: 307,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    top: 272,
    position: "absolute",
  },
  belumDibayarChild1: {
    top: 133,
  },
  leFame200ml: {
    top: 153,
    lineHeight: 50,
    height: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  items1: {
    top: 172,
    left: 146,
    color: Color.colorGray_200,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rp72000: {
    width: 60,
    left: 307,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  belumDibayarChild2: {
    top: 371,
  },
  bodyScrubLe: {
    width: 154,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    left: 146,
  },
  items2: {
    top: 418,
    left: 151,
  },
  rp105000: {
    width: 60,
    left: 307,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rectanglePressable: {
    top: 706,
    left: 128,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGold_100,
    width: 116,
    height: 45,
  },
  bayar: {
    top: 715,
    left: 159,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.4,
    color: Color.colorLimegreen,
    width: 81,
    height: 27,
    fontFamily: FontFamily.roboto,
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
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
  frameView: {
    top: 80,
    left: 2,
    width: 372,
    height: 38,
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
  belumDibayar: {
    flex: 1,
    width: "100%",
  },
});

export default BelumDibayar;
