import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusdefaultKeranjangoff from "../components/StatusdefaultKeranjangoff";
import OverlayReview from "../components/OverlayReview";
import StatusdefaultHomeoffSear from "../components/StatusdefaultHomeoffSear";
import StatusdefaultUkuranbesarImage from "../components/StatusdefaultUkuranbesarImage";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Selesai = () => {
  const navigation = useNavigation();
  const [berikanRatingTextVisible, setBerikanRatingTextVisible] =
    useState(false);

  const openBerikanRatingText = useCallback(() => {
    setBerikanRatingTextVisible(true);
  }, []);

  const closeBerikanRatingText = useCallback(() => {
    setBerikanRatingTextVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.selesai, styles.selesaiLayout]}>
        <View style={[styles.selesaiChild, styles.selesaiLayout]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector24.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector25.png")}
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
          source={require("../assets/vector41.png")}
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
          style={[styles.selesaiItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-5431.png")}
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
          source={require("../assets/vector181.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector141.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-47.png")}
          />
        </Pressable>
        <View style={styles.selesaiInner}>
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
            onDalamPerjalananPress={() =>
              navigation.navigate("DalamPerjalanan")
            }
            onKeranjangPress={() => navigation.navigate("Keranjang")}
            onGroupPressablePress1={() => navigation.navigate("BelumDibayar")}
          />
        </View>
        <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Text style={[styles.leFame200ml, styles.rp72000Position]}>
          Le fame 200ml
        </Text>
        <Text style={[styles.items, styles.itemsTypo]}>2 Items</Text>
        <Text style={[styles.rp72000, styles.itemsTypo]}>RP.72000</Text>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleShadowBox]}
          onPress={() => navigation.navigate("Pengiriman")}
        />
        <Text style={[styles.beliLagi, styles.beliLagiTypo]}>Beli lagi</Text>
        <Pressable style={styles.berikanRating} onPress={openBerikanRatingText}>
          <Text style={[styles.berikanRating1, styles.itemsTypo]}>
            Berikan Rating.
          </Text>
        </Pressable>
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
        <StatusdefaultUkuranbesarImage
          dimensionCode={require("../assets/component-111.png")}
          statusdefaultUkuranbesarIPosition="absolute"
          statusdefaultUkuranbesarITop={26}
          statusdefaultUkuranbesarILeft={313}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={berikanRatingTextVisible}
      >
        <View style={styles.berikanRatingTextOverlay}>
          <Pressable
            style={styles.berikanRatingTextBg}
            onPress={closeBerikanRatingText}
          />
          <OverlayReview onClose={closeBerikanRatingText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  selesaiLayout: {
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
  rectangleShadowBox: {
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
  rp72000Position: {
    height: 28,
    color: Color.colorBlack,
    top: 158,
    position: "absolute",
  },
  itemsTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 50,
  },
  beliLagiTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.baskervilleOldFace,
    lineHeight: 50,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
  },
  selesaiChild: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
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
  selesaiItem: {
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
  selesaiInner: {
    top: 80,
    left: 2,
    width: 372,
    height: 38,
    position: "absolute",
  },
  rectangleView: {
    top: 119,
    left: 10,
    backgroundColor: Color.colorMoccasin_100,
    width: 373,
    height: 166,
  },
  rectangleIcon: {
    top: 138,
    left: 24,
    width: 100,
    height: 100,
    position: "absolute",
  },
  leFame200ml: {
    width: 154,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.baskervilleOldFace,
    lineHeight: 50,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    left: 142,
  },
  items: {
    top: 191,
    color: Color.colorGray_200,
    width: 42,
    height: 16,
    left: 142,
    position: "absolute",
  },
  rp72000: {
    left: 303,
    width: 60,
    height: 28,
    color: Color.colorBlack,
    top: 158,
    position: "absolute",
  },
  rectanglePressable: {
    top: 216,
    left: 279,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGold_100,
    width: 79,
    height: 22,
  },
  beliLagi: {
    top: 220,
    left: 292,
    color: Color.colorGray_1000,
    width: 94,
    height: 15,
    position: "absolute",
  },
  berikanRatingTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  berikanRatingTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  berikanRating1: {
    color: Color.colorLimegreen,
    width: 114,
    height: 11,
  },
  berikanRating: {
    left: 141,
    top: 224,
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
  selesai: {
    flex: 1,
    width: "100%",
  },
});

export default Selesai;
