import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Pengiriman = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pengiriman, styles.pengirimanLayout]}>
      <View style={[styles.pengirimanChild, styles.childPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector191.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector201.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector51.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector71.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector81.png")}
      />
      <Image
        style={[styles.pengirimanItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-5421.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector211.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector121.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector221.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector231.png")}
      />
      <View style={styles.pengirimanInner} />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4011.png")}
        />
        <Text style={[styles.leFame200ml, styles.itemsFlexBox]}>
          Le fame 200ml
        </Text>
        <Text style={[styles.items, styles.itemsTypo]}>2 Items</Text>
        <Text style={[styles.rp72000, styles.rp7000Typo]}>RP.72000</Text>
        <Image
          style={[styles.rectangleIcon, styles.groupInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4411.png")}
        />
        <Text style={[styles.maduLebahLiar, styles.items1Position]}>
          Madu lebah liar 250 gram
        </Text>
        <Text style={[styles.items1, styles.items1Position]}>1 Items</Text>
        <Text style={[styles.rp40000, styles.rp7000Typo]}>RP.40000</Text>
        <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
        <View style={[styles.vectorParent, styles.frameChildLayout]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-661.png")}
          />
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-66-stroke1.png")}
          />
          <Text style={[styles.rp112000, styles.rp112000Typo]}>Rp112000</Text>
          <Text style={[styles.rp120000, styles.rp112000Typo]}>Rp120000</Text>
        </View>
        <Image
          style={[styles.arrowIcon, styles.gosendLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={styles.groupChild1}
          resizeMode="cover"
          source={require("../assets/rectangle-371.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.jlBudidayaGgLayout]}
          onPress={() => navigation.navigate("Pembayaran")}
        />
        <Text style={[styles.pilihPembayaran, styles.rp7000Typo]}>
          {" "}
          Pilih Pembayaran
        </Text>
      </View>
      <Text style={styles.pengiriman1}>Pengiriman</Text>
      <View style={[styles.pengirimanChild1, styles.rectangleViewShadowBox]} />
      <Text style={[styles.alamatPengirimanKamu, styles.cashOnDeliveryLayout]}>
        Alamat pengiriman kamu
      </Text>
      <Text
        style={[styles.jlBudidayaGg, styles.jlBudidayaGgTypo]}
      >{`087710592124
jl. budidaya, gg metros no 175, Kec. Tampan, Kota Pekanbaru, Riau, 28293 
`}</Text>
      <Text style={[styles.rp7000, styles.rp7000Typo]}>(Rp7000)</Text>
      <Text style={[styles.gosend, styles.gosendLayout]}>{`Gosend `}</Text>
      <Text style={[styles.cashOnDelivery, styles.cashOnDeliveryLayout]}>
        Cash on delivery
      </Text>
      <Text style={[styles.estimasi20Menit, styles.cashOnDeliveryLayout]}>
        Estimasi 20 menit
      </Text>
      <Image
        style={[styles.ringkasanBelanjaIcon, styles.totalIconLayout]}
        resizeMode="cover"
        source={require("../assets/ringkasan-belanja.png")}
      />
      <Image
        style={[styles.totalHarga3Items, styles.totalIconLayout]}
        resizeMode="cover"
        source={require("../assets/total-harga-3-items.png")}
      />
      <Image
        style={[styles.totalOngkosKirim, styles.totalOngkosKirimLayout]}
        resizeMode="cover"
        source={require("../assets/total-ongkos-kirim.png")}
      />
      <Image
        style={[styles.biayaJasaAplikasi, styles.totalOngkosKirimLayout]}
        resizeMode="cover"
        source={require("../assets/biaya-jasa-aplikasi.png")}
      />
      <Image
        style={[styles.totalBelanjaIcon, styles.totalIconLayout]}
        resizeMode="cover"
        source={require("../assets/total-belanja1.png")}
      />
      <Image
        style={[styles.rp7000Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rp7000.png")}
      />
      <Image
        style={[styles.rp1000Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rp1000.png")}
      />
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
        style={[styles.groupIcon, styles.iconLayout1]}
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
  pengirimanLayout: {
    height: 844,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  iconLayout1: {
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
  groupInnerLayout: {
    height: 81,
    width: 81,
    left: 20,
    position: "absolute",
  },
  itemsFlexBox: {
    alignItems: "center",
    display: "flex",
    left: 116,
    textAlign: "left",
    position: "absolute",
  },
  itemsTypo: {
    height: 40,
    color: Color.colorGray_200,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rp7000Typo: {
    fontFamily: FontFamily.roboto,
    textAlign: "left",
  },
  items1Position: {
    left: 115,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 70,
    width: 292,
    borderRadius: Border.br_3xs,
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
  frameChildLayout: {
    height: 167,
    width: 292,
    position: "absolute",
  },
  rp112000Typo: {
    left: 206,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  gosendLayout: {
    height: 15,
    position: "absolute",
  },
  jlBudidayaGgLayout: {
    height: 45,
    position: "absolute",
  },
  cashOnDeliveryLayout: {
    height: 13,
    fontFamily: FontFamily.roboto,
    letterSpacing: 0.2,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 50,
    position: "absolute",
  },
  jlBudidayaGgTypo: {
    fontWeight: "200",
    left: 62,
  },
  totalIconLayout: {
    height: 12,
    position: "absolute",
  },
  totalOngkosKirimLayout: {
    width: 103,
    height: 12,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    width: 40,
    left: 271,
    position: "absolute",
  },
  pengirimanChild: {
    width: 390,
    position: "absolute",
    height: 844,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
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
  pengirimanItem: {
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
  pengirimanInner: {
    top: 473,
    left: 356,
    width: 12,
    height: 2,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  groupChild: {
    top: 9,
    left: 9,
    height: 610,
    width: 332,
    backgroundColor: Color.colorGold_200,
    position: "absolute",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMoccasin_100,
    height: 610,
    width: 332,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 103,
  },
  leFame200ml: {
    width: 125,
    height: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.baskervilleOldFace,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
    lineHeight: 50,
    top: 119,
    display: "flex",
    left: 116,
  },
  items: {
    top: 135,
    width: 45,
    alignItems: "center",
    display: "flex",
    left: 116,
    textAlign: "left",
    position: "absolute",
  },
  rp72000: {
    left: 247,
    width: 59,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    lineHeight: 10,
    fontFamily: FontFamily.roboto,
    letterSpacing: 0.2,
    height: 23,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    top: 119,
    position: "absolute",
  },
  rectangleIcon: {
    top: 199,
  },
  maduLebahLiar: {
    top: 215,
    lineHeight: 20,
    width: 99,
    height: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.baskervilleOldFace,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
  },
  items1: {
    top: 234,
    width: 46,
    height: 40,
    color: Color.colorGray_200,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
  },
  rp40000: {
    top: 204,
    left: 246,
    width: 55,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.roboto,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    height: 23,
    lineHeight: 50,
    position: "absolute",
  },
  rectangleView: {
    top: 297,
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    borderStyle: "solid",
    left: 21,
    backgroundColor: Color.colorMoccasin_100,
    height: 70,
    width: 292,
  },
  frameChild: {
    left: 0,
    top: 0,
  },
  rp112000: {
    top: 45,
  },
  rp120000: {
    top: 125,
  },
  vectorParent: {
    top: 374,
    left: 21,
  },
  arrowIcon: {
    top: 314,
    left: 295,
    overflow: "hidden",
    maxWidth: "100%",
    height: 15,
  },
  groupChild1: {
    left: 39,
    width: 242,
    height: 1,
    top: 488,
    position: "absolute",
  },
  rectanglePressable: {
    top: 552,
    backgroundColor: Color.colorGold_100,
    borderColor: Color.colorYellow,
    borderWidth: 0.3,
    width: 202,
    left: 66,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 45,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  pilihPembayaran: {
    top: 549,
    left: 91,
    fontSize: FontSize.size_mid,
    color: Color.colorLimegreen,
    lineHeight: 50,
    fontFamily: FontFamily.roboto,
    letterSpacing: 0.3,
    position: "absolute",
  },
  rectangleParent: {
    top: 99,
    left: 31,
    width: 341,
    height: 619,
    position: "absolute",
  },
  pengiriman1: {
    top: 36,
    left: 42,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.4,
    fontFamily: FontFamily.trajanPro,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 50,
    position: "absolute",
  },
  pengirimanChild1: {
    top: 117,
    left: 51,
    height: 70,
    width: 292,
    backgroundColor: Color.colorGray_100,
  },
  alamatPengirimanKamu: {
    top: 121,
    fontSize: FontSize.size_5xs,
    width: 187,
    fontWeight: "200",
    left: 62,
  },
  jlBudidayaGg: {
    top: 139,
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    width: 269,
    height: 45,
    position: "absolute",
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    letterSpacing: 0.2,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
  },
  rp7000: {
    top: 401,
    width: 146,
    height: 19,
    left: 66,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.roboto,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 50,
    position: "absolute",
  },
  gosend: {
    top: 424,
    width: 113,
    left: 66,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 50,
  },
  cashOnDelivery: {
    top: 425,
    left: 245,
    width: 90,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  estimasi20Menit: {
    top: 447,
    width: 109,
    left: 66,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  ringkasanBelanjaIcon: {
    left: 67,
    width: 98,
    top: 488,
  },
  totalHarga3Items: {
    top: 515,
    width: 115,
    left: 70,
  },
  totalOngkosKirim: {
    top: 541,
    left: 70,
  },
  biayaJasaAplikasi: {
    left: 71,
    top: 567,
  },
  totalBelanjaIcon: {
    top: 599,
    width: 70,
    left: 70,
  },
  rp7000Icon: {
    top: 541,
  },
  rp1000Icon: {
    top: 567,
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
  pengiriman: {
    flex: 1,
    width: "100%",
  },
});

export default Pengiriman;
