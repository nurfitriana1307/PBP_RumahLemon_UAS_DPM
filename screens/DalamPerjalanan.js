import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultKeranjangoff from "../components/StatusdefaultKeranjangoff";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DalamPerjalanan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dalamPerjalanan, styles.dalamLayout]}>
      <View style={[styles.dalamPerjalananChild, styles.dalamLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector311.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector41.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector71.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.dalamPerjalananItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-544.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector91.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Image
        style={[styles.vectorIcon15, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector181.png")}
      />
      <Image
        style={[styles.vectorIcon16, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector141.png")}
      />
      <View style={styles.dalamPerjalananInner} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Text style={styles.leFameSulemonContainer}>
        <Text style={styles.leFameSulemon}>{`Le fame, Sulemon, Man Jadda
`}</Text>
        <Text style={styles.items}>3 items</Text>
      </Text>
      <Text style={[styles.orderId, styles.statusFlexBox]}>Order id</Text>
      <Text style={[styles.totalProduct, styles.statusFlexBox]}>
        Total Product
      </Text>
      <Text style={[styles.status, styles.statusFlexBox]}>Status</Text>
      <Text style={[styles.rl01921, styles.rl01921Typo]}>#RL01921</Text>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47.png")}
        />
      </Pressable>
      <Text style={[styles.rp58000, styles.rl01921Typo]}>Rp58000</Text>
      <Text style={[styles.onDelivery, styles.rl01921Typo]}>On Delivery</Text>
      <Text style={styles.noResi}>No Resi</Text>
      <Text style={[styles.prl213971861, styles.rl01921Typo]}>
        PRL213971861
      </Text>
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
          dibatalkanColor="rgba(0, 0, 0, 0.65)"
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
  dalamLayout: {
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
  statusFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  rl01921Typo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    color: Color.colorGray_600,
    textAlign: "left",
    lineHeight: 35,
    position: "absolute",
  },
  dalamPerjalananChild: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  vectorIcon: {
    width: "0.13%",
    top: "3.14%",
    right: "12.08%",
    bottom: "96.85%",
    left: "87.79%",
    height: "0.01%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    width: "0.05%",
    top: "2.37%",
    right: "12.13%",
    bottom: "97.62%",
    left: "87.82%",
    height: "0.01%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "23.35%",
    width: "40.79%",
    top: "85%",
    right: "88.69%",
    bottom: "-8.35%",
    left: "-29.49%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "7.38%",
    width: "15.82%",
    top: "81.61%",
    right: "79.64%",
    bottom: "11.01%",
    left: "4.54%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "6.67%",
    width: "11.82%",
    top: "79.67%",
    right: "88.72%",
    bottom: "13.66%",
    left: "-0.54%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "8.98%",
    width: "15.33%",
    top: "55.68%",
    bottom: "35.34%",
    left: "-7.41%",
  },
  vectorIcon6: {
    height: "2.84%",
    width: "5.95%",
    top: "54.37%",
    right: "88.67%",
    bottom: "42.78%",
    left: "5.38%",
    position: "absolute",
  },
  vectorIcon7: {
    height: "2.57%",
    width: "4.44%",
    top: "53.63%",
    bottom: "43.8%",
    left: "3.49%",
  },
  vectorIcon8: {
    height: "12.67%",
    width: "30.23%",
    top: "63.15%",
    right: "-16.85%",
    bottom: "24.18%",
    left: "86.62%",
    position: "absolute",
  },
  vectorIcon9: {
    height: "4.16%",
    width: "10.05%",
    top: "60.23%",
    right: "6.36%",
    bottom: "35.62%",
    left: "83.59%",
    position: "absolute",
  },
  vectorIcon10: {
    height: "3.55%",
    width: "8.26%",
    top: "61.35%",
    right: "11.72%",
    bottom: "35.09%",
    left: "80.03%",
    position: "absolute",
  },
  dalamPerjalananItem: {
    height: "22.78%",
    width: "51.23%",
    top: "83.2%",
    right: "-15.49%",
    bottom: "-5.98%",
    left: "64.26%",
    position: "absolute",
  },
  vectorIcon11: {
    height: "13.67%",
    width: "27.72%",
    top: "31.85%",
    right: "-12.9%",
    bottom: "54.48%",
    left: "85.18%",
    position: "absolute",
  },
  vectorIcon12: {
    height: "4.51%",
    width: "9.28%",
    top: "30.21%",
    right: "-19.08%",
    bottom: "65.27%",
    left: "109.79%",
    position: "absolute",
  },
  vectorIcon13: {
    height: "3.76%",
    width: "7.85%",
    top: "28.67%",
    right: "-16.26%",
    bottom: "67.57%",
    left: "108.41%",
    position: "absolute",
  },
  vectorIcon14: {
    height: "14.14%",
    width: "25.46%",
    top: "36.53%",
    right: "83.08%",
    bottom: "49.34%",
    left: "-8.54%",
    position: "absolute",
  },
  vectorIcon15: {
    height: "4.6%",
    width: "8.97%",
    top: "34.22%",
    right: "77.92%",
    bottom: "61.18%",
    left: "13.1%",
    position: "absolute",
  },
  vectorIcon16: {
    height: "3.93%",
    width: "7.31%",
    top: "32.77%",
    right: "81.41%",
    bottom: "63.29%",
    left: "11.28%",
    position: "absolute",
  },
  dalamPerjalananInner: {
    top: 115,
    left: 9,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMoccasin_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 373,
    height: 207,
    position: "absolute",
  },
  rectangleIcon: {
    top: 132,
    width: 100,
    height: 100,
    left: 20,
    position: "absolute",
  },
  leFameSulemon: {
    color: Color.colorGray_600,
  },
  items: {
    color: Color.colorGray_900,
  },
  leFameSulemonContainer: {
    top: 144,
    left: 139,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
    fontFamily: FontFamily.baskervville,
    textAlign: "left",
    lineHeight: 35,
    position: "absolute",
  },
  orderId: {
    top: 234,
    width: 114,
    height: 26,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    display: "flex",
    color: Color.colorGray_600,
    textAlign: "left",
    lineHeight: 35,
    left: 20,
    position: "absolute",
  },
  totalProduct: {
    top: 259,
    width: 104,
    height: 22,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    display: "flex",
    color: Color.colorGray_600,
    textAlign: "left",
    lineHeight: 35,
    left: 20,
    position: "absolute",
  },
  status: {
    top: 281,
    width: 101,
    height: 16,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    display: "flex",
    color: Color.colorGray_600,
    textAlign: "left",
    lineHeight: 35,
    left: 20,
    position: "absolute",
  },
  rl01921: {
    top: 230,
    left: 318,
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
  rp58000: {
    top: 252,
    left: 321,
  },
  onDelivery: {
    top: 272,
    left: 311,
    width: 139,
    alignItems: "center",
    display: "flex",
  },
  noResi: {
    top: 301,
    color: Color.colorBlack,
    width: 58,
    height: 12,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 35,
    left: 20,
    position: "absolute",
  },
  prl213971861: {
    top: 302,
    left: 292,
    width: 134,
    height: 10,
    alignItems: "center",
    display: "flex",
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
  dalamPerjalanan: {
    flex: 1,
    width: "100%",
  },
});

export default DalamPerjalanan;
