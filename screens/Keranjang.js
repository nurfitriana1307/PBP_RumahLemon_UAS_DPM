import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Basedonthegivencontext from "../components/Basedonthegivencontext";
import StatusdefaultKeranjangoff from "../components/StatusdefaultKeranjangoff";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.keranjang, styles.keranjangLayout]}>
      <View style={[styles.keranjangChild, styles.keranjangLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector151.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector161.png")}
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
        source={require("../assets/vector171.png")}
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
        style={[styles.keranjangItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-5411.png")}
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
      <View style={[styles.keranjangInner, styles.keranjangInnerShadowBox]} />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.keranjangChildLayout]} />
      <View style={[styles.keranjangChild1, styles.keranjangChildLayout]} />
      <View style={[styles.keranjangChild2, styles.keranjangChildLayout]} />
      <Basedonthegivencontext />
      <Pressable
        style={[styles.rectanglePressable, styles.keranjangInnerShadowBox]}
        onPress={() => navigation.navigate("Pengiriman")}
      />
      <Text style={styles.checkout}>Checkout</Text>
      <View style={styles.instanceParent}>
        <StatusdefaultKeranjangoff
          belumDibayar="Keranjang"
          selesai="Belum Dibayar"
          rectangleView
          showDibatalkan={false}
          showRectangleView
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
          belumDibayarHeight="95.65%"
          belumDibayarWidth="10.92%"
          belumDibayarColor="#2bb32a"
          belumDibayarFontSize={15}
          belumDibayarLetterSpacing={0.3}
          belumDibayarLineHeight={12}
          belumDibayarFontFamily="Baskerville Old Face"
          belumDibayarTextAlign="left"
          belumDibayarDisplay="flex"
          rectangleViewHeight="100%"
          rectangleViewWidth="16.81%"
          rectangleViewTop="0%"
          rectangleViewRight="68.8%"
          rectangleViewBottom="0%"
          rectangleViewLeft="14.38%"
          rectangleViewBackgroundColor="unset"
          rectangleViewPosition="absolute"
          selesaiHeight="100%"
          selesaiWidth="100%"
          selesaiTop="0%"
          selesaiLeft="0%"
          selesaiColor="rgba(0, 0, 0, 0.65)"
          selesaiFontSize={15}
          selesaiLetterSpacing={0.3}
          selesaiLineHeight={12}
          selesaiFontFamily="Baskerville Old Face"
          selesaiTextAlign="left"
          selesaiDisplay="flex"
          selesaiRight="unset"
          selesaiBottom="unset"
          dibatalkanTop="78.26%"
          dibatalkanLeft="-1.03%"
          dibatalkanFontFamily="unset"
          dibatalkanColor="unset"
          dibatalkanTextAlign="unset"
          dibatalkanHeight="4.35%"
          dibatalkanWidth="95.88%"
          dibatalkanRight="5.15%"
          dibatalkanBottom="17.39%"
          dibatalkanBackgroundColor="#e9c005"
          rectangleViewHeight1="unset"
          rectangleViewWidth1="unset"
          rectangleViewTop1="17.39%"
          rectangleViewRight1="unset"
          rectangleViewBottom1="unset"
          rectangleViewLeft1="77.82%"
          rectangleViewBackgroundColor1="unset"
          onSedangDiprosesPress={() => navigation.navigate("SedangDiproses")}
          onDalamPerjalananPress={() => navigation.navigate("DalamPerjalanan")}
          onGroupPressablePress={() => navigation.navigate("BelumDibayar")}
          onSelesaiPress={() => navigation.navigate("Selesai")}
        />
        <StatusdefaultUkuranbesarImage
          dimensionCode={require("../assets/component-111.png")}
          statusdefaultUkuranbesarIPosition="absolute"
          statusdefaultUkuranbesarITop={-58}
          statusdefaultUkuranbesarILeft={313}
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
    </View>
  );
};

const styles = StyleSheet.create({
  keranjangLayout: {
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
  keranjangInnerShadowBox: {
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
  keranjangChildLayout: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 2,
    width: 12,
    backgroundColor: Color.colorGold_200,
    left: 356,
    position: "absolute",
  },
  keranjangChild: {
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
  keranjangItem: {
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
  keranjangInner: {
    top: 115,
    left: 9,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMoccasin_100,
    width: 373,
    height: 393,
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
  rectangleView: {
    top: 344,
  },
  keranjangChild1: {
    top: 229,
  },
  keranjangChild2: {
    top: 467,
  },
  rectanglePressable: {
    top: 706,
    left: 135,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGold_100,
    width: 116,
    height: 45,
  },
  checkout: {
    top: 717,
    left: 148,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.4,
    lineHeight: 50,
    fontFamily: FontFamily.roboto,
    color: Color.colorLimegreen,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
    height: 25,
    position: "absolute",
  },
  instanceParent: {
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
  keranjang: {
    flex: 1,
    width: "100%",
  },
});

export default Keranjang;
