import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusdefaultKeranjangoff = ({
  sedangDiproses,
  dalamPerjalanan,
  keranjang,
  belumDibayar,
  selesai,
  dibatalkan,
  rectangleView,
  showDibatalkan,
  showRectangleView,
  statusdefaultKeranjangoffPosition,
  statusdefaultKeranjangoffTop,
  statusdefaultKeranjangoffLeft,
  sedangDiprosesHeight,
  sedangDiprosesWidth,
  sedangDiprosesFontSize,
  sedangDiprosesLetterSpacing,
  sedangDiprosesLineHeight,
  sedangDiprosesFontFamily,
  sedangDiprosesColor,
  sedangDiprosesTextAlign,
  sedangDiprosesDisplay,
  dalamPerjalananPosition,
  dalamPerjalananHeight,
  dalamPerjalananWidth,
  dalamPerjalananTop,
  dalamPerjalananLeft,
  dalamPerjalananLineHeight,
  dalamPerjalananColor,
  keranjangHeight,
  keranjangWidth,
  keranjangTop,
  keranjangLeft,
  keranjangFontSize,
  keranjangLetterSpacing,
  keranjangLineHeight,
  keranjangFontFamily,
  keranjangColor,
  keranjangTextAlign,
  keranjangDisplay,
  groupViewPosition,
  groupViewHeight,
  groupViewWidth,
  groupViewTop,
  groupViewRight,
  groupViewBottom,
  groupViewLeft,
  groupViewDisplay,
  belumDibayarHeight,
  belumDibayarWidth,
  belumDibayarColor,
  belumDibayarFontSize,
  belumDibayarLetterSpacing,
  belumDibayarLineHeight,
  belumDibayarFontFamily,
  belumDibayarTextAlign,
  belumDibayarDisplay,
  rectangleViewHeight,
  rectangleViewWidth,
  rectangleViewTop,
  rectangleViewRight,
  rectangleViewBottom,
  rectangleViewLeft,
  rectangleViewBackgroundColor,
  rectangleViewPosition,
  selesaiHeight,
  selesaiWidth,
  selesaiTop,
  selesaiLeft,
  selesaiColor,
  selesaiFontSize,
  selesaiLetterSpacing,
  selesaiLineHeight,
  selesaiFontFamily,
  selesaiTextAlign,
  selesaiDisplay,
  selesaiRight,
  selesaiBottom,
  dibatalkanTop,
  dibatalkanLeft,
  dibatalkanFontSize,
  dibatalkanLetterSpacing,
  dibatalkanLineHeight,
  dibatalkanFontFamily,
  dibatalkanColor,
  dibatalkanTextAlign,
  dibatalkanHeight,
  dibatalkanWidth,
  dibatalkanRight,
  dibatalkanBottom,
  dibatalkanBackgroundColor,
  rectangleViewHeight1,
  rectangleViewWidth1,
  rectangleViewTop1,
  rectangleViewRight1,
  rectangleViewBottom1,
  rectangleViewLeft1,
  rectangleViewBackgroundColor1,
  onSedangDiprosesPress,
  onDalamPerjalananPress,
  onKeranjangPress,
  onGroupPressablePress,
  onGroupPressablePress1,
  onSelesaiPress,
}) => {
  const statusdefaultKeranjangoffStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusdefaultKeranjangoffPosition),
      ...getStyleValue("top", statusdefaultKeranjangoffTop),
      ...getStyleValue("left", statusdefaultKeranjangoffLeft),
    };
  }, [
    statusdefaultKeranjangoffPosition,
    statusdefaultKeranjangoffTop,
    statusdefaultKeranjangoffLeft,
  ]);

  const sedangDiprosesStyle = useMemo(() => {
    return {
      ...getStyleValue("height", sedangDiprosesHeight),
      ...getStyleValue("width", sedangDiprosesWidth),
      ...getStyleValue("fontSize", sedangDiprosesFontSize),
      ...getStyleValue("letterSpacing", sedangDiprosesLetterSpacing),
      ...getStyleValue("lineHeight", sedangDiprosesLineHeight),
      ...getStyleValue("fontFamily", sedangDiprosesFontFamily),
      ...getStyleValue("color", sedangDiprosesColor),
      ...getStyleValue("textAlign", sedangDiprosesTextAlign),
      ...getStyleValue("display", sedangDiprosesDisplay),
    };
  }, [
    sedangDiprosesHeight,
    sedangDiprosesWidth,
    sedangDiprosesFontSize,
    sedangDiprosesLetterSpacing,
    sedangDiprosesLineHeight,
    sedangDiprosesFontFamily,
    sedangDiprosesColor,
    sedangDiprosesTextAlign,
    sedangDiprosesDisplay,
  ]);

  const dalamPerjalananStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dalamPerjalananPosition),
      ...getStyleValue("height", dalamPerjalananHeight),
      ...getStyleValue("width", dalamPerjalananWidth),
      ...getStyleValue("top", dalamPerjalananTop),
      ...getStyleValue("left", dalamPerjalananLeft),
      ...getStyleValue("lineHeight", dalamPerjalananLineHeight),
      ...getStyleValue("color", dalamPerjalananColor),
    };
  }, [
    dalamPerjalananPosition,
    dalamPerjalananHeight,
    dalamPerjalananWidth,
    dalamPerjalananTop,
    dalamPerjalananLeft,
    dalamPerjalananLineHeight,
    dalamPerjalananColor,
  ]);

  const keranjangStyle = useMemo(() => {
    return {
      ...getStyleValue("height", keranjangHeight),
      ...getStyleValue("width", keranjangWidth),
      ...getStyleValue("top", keranjangTop),
      ...getStyleValue("left", keranjangLeft),
      ...getStyleValue("fontSize", keranjangFontSize),
      ...getStyleValue("letterSpacing", keranjangLetterSpacing),
      ...getStyleValue("lineHeight", keranjangLineHeight),
      ...getStyleValue("fontFamily", keranjangFontFamily),
      ...getStyleValue("color", keranjangColor),
      ...getStyleValue("textAlign", keranjangTextAlign),
      ...getStyleValue("display", keranjangDisplay),
    };
  }, [
    keranjangHeight,
    keranjangWidth,
    keranjangTop,
    keranjangLeft,
    keranjangFontSize,
    keranjangLetterSpacing,
    keranjangLineHeight,
    keranjangFontFamily,
    keranjangColor,
    keranjangTextAlign,
    keranjangDisplay,
  ]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", groupViewPosition),
      ...getStyleValue("height", groupViewHeight),
      ...getStyleValue("width", groupViewWidth),
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("right", groupViewRight),
      ...getStyleValue("bottom", groupViewBottom),
      ...getStyleValue("left", groupViewLeft),
      ...getStyleValue("display", groupViewDisplay),
    };
  }, [
    groupViewPosition,
    groupViewHeight,
    groupViewWidth,
    groupViewTop,
    groupViewRight,
    groupViewBottom,
    groupViewLeft,
    groupViewDisplay,
  ]);

  const belumDibayarStyle = useMemo(() => {
    return {
      ...getStyleValue("height", belumDibayarHeight),
      ...getStyleValue("width", belumDibayarWidth),
      ...getStyleValue("color", belumDibayarColor),
      ...getStyleValue("fontSize", belumDibayarFontSize),
      ...getStyleValue("letterSpacing", belumDibayarLetterSpacing),
      ...getStyleValue("lineHeight", belumDibayarLineHeight),
      ...getStyleValue("fontFamily", belumDibayarFontFamily),
      ...getStyleValue("textAlign", belumDibayarTextAlign),
      ...getStyleValue("display", belumDibayarDisplay),
    };
  }, [
    belumDibayarHeight,
    belumDibayarWidth,
    belumDibayarColor,
    belumDibayarFontSize,
    belumDibayarLetterSpacing,
    belumDibayarLineHeight,
    belumDibayarFontFamily,
    belumDibayarTextAlign,
    belumDibayarDisplay,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleViewHeight),
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("top", rectangleViewTop),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("bottom", rectangleViewBottom),
      ...getStyleValue("left", rectangleViewLeft),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      ...getStyleValue("position", rectangleViewPosition),
    };
  }, [
    rectangleViewHeight,
    rectangleViewWidth,
    rectangleViewTop,
    rectangleViewRight,
    rectangleViewBottom,
    rectangleViewLeft,
    rectangleViewBackgroundColor,
    rectangleViewPosition,
  ]);

  const selesaiStyle = useMemo(() => {
    return {
      ...getStyleValue("height", selesaiHeight),
      ...getStyleValue("width", selesaiWidth),
      ...getStyleValue("top", selesaiTop),
      ...getStyleValue("left", selesaiLeft),
      ...getStyleValue("color", selesaiColor),
      ...getStyleValue("fontSize", selesaiFontSize),
      ...getStyleValue("letterSpacing", selesaiLetterSpacing),
      ...getStyleValue("lineHeight", selesaiLineHeight),
      ...getStyleValue("fontFamily", selesaiFontFamily),
      ...getStyleValue("textAlign", selesaiTextAlign),
      ...getStyleValue("display", selesaiDisplay),
      ...getStyleValue("right", selesaiRight),
      ...getStyleValue("bottom", selesaiBottom),
    };
  }, [
    selesaiHeight,
    selesaiWidth,
    selesaiTop,
    selesaiLeft,
    selesaiColor,
    selesaiFontSize,
    selesaiLetterSpacing,
    selesaiLineHeight,
    selesaiFontFamily,
    selesaiTextAlign,
    selesaiDisplay,
    selesaiRight,
    selesaiBottom,
  ]);

  const dibatalkanStyle = useMemo(() => {
    return {
      ...getStyleValue("top", dibatalkanTop),
      ...getStyleValue("left", dibatalkanLeft),
      ...getStyleValue("fontSize", dibatalkanFontSize),
      ...getStyleValue("letterSpacing", dibatalkanLetterSpacing),
      ...getStyleValue("lineHeight", dibatalkanLineHeight),
      ...getStyleValue("fontFamily", dibatalkanFontFamily),
      ...getStyleValue("color", dibatalkanColor),
      ...getStyleValue("textAlign", dibatalkanTextAlign),
      ...getStyleValue("height", dibatalkanHeight),
      ...getStyleValue("width", dibatalkanWidth),
      ...getStyleValue("right", dibatalkanRight),
      ...getStyleValue("bottom", dibatalkanBottom),
      ...getStyleValue("backgroundColor", dibatalkanBackgroundColor),
    };
  }, [
    dibatalkanTop,
    dibatalkanLeft,
    dibatalkanFontSize,
    dibatalkanLetterSpacing,
    dibatalkanLineHeight,
    dibatalkanFontFamily,
    dibatalkanColor,
    dibatalkanTextAlign,
    dibatalkanHeight,
    dibatalkanWidth,
    dibatalkanRight,
    dibatalkanBottom,
    dibatalkanBackgroundColor,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleViewHeight1),
      ...getStyleValue("width", rectangleViewWidth1),
      ...getStyleValue("top", rectangleViewTop1),
      ...getStyleValue("right", rectangleViewRight1),
      ...getStyleValue("bottom", rectangleViewBottom1),
      ...getStyleValue("left", rectangleViewLeft1),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor1),
    };
  }, [
    rectangleViewHeight1,
    rectangleViewWidth1,
    rectangleViewTop1,
    rectangleViewRight1,
    rectangleViewBottom1,
    rectangleViewLeft1,
    rectangleViewBackgroundColor1,
  ]);

  return (
    <View
      style={[styles.statusdefaultKeranjangoff, statusdefaultKeranjangoffStyle]}
    >
      <Text
        style={[
          styles.sedangDiproses,
          styles.selesaiFlexBox,
          sedangDiprosesStyle,
        ]}
        onPress={onSedangDiprosesPress}
      >
        {sedangDiproses}
      </Text>
      <Text
        style={[
          styles.dalamPerjalanan,
          styles.dibatalkanTypo,
          dalamPerjalananStyle,
        ]}
      >
        {dalamPerjalanan}
      </Text>
      <Text
        style={[styles.keranjang, styles.keranjangTypo, keranjangStyle]}
        onPress={onDalamPerjalananPress}
      >
        {keranjang}
      </Text>
      <View
        style={[
          styles.belumDibayarParent,
          styles.belumPosition,
          groupViewStyle,
        ]}
      >
        <Text
          style={[styles.belumDibayar, styles.belumPosition, belumDibayarStyle]}
          onPress={onKeranjangPress}
        >
          {belumDibayar}
        </Text>
        {!rectangleView && (
          <View
            style={[
              styles.groupChild,
              styles.childPosition,
              rectangleViewStyle,
            ]}
            onPress={onGroupPressablePress}
          />
        )}
      </View>
      <Text
        style={[styles.selesai, styles.selesaiFlexBox, selesaiStyle]}
        onPress={onGroupPressablePress1}
      >
        {selesai}
      </Text>
      {showDibatalkan && (
        <Text
          style={[styles.dibatalkan, styles.dibatalkanTypo, dibatalkanStyle]}
        >
          {dibatalkan}
        </Text>
      )}
      {showRectangleView && (
        <View
          style={[
            styles.statusdefaultKeranjangoffChild,
            styles.childPosition,
            rectangleView1Style,
          ]}
          onPress={onSelesaiPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selesaiFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  dibatalkanTypo: {
    top: "21.74%",
    textAlign: "left",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  keranjangTypo: {
    left: "0%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.baskervilleOldFace,
    lineHeight: 12,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
  },
  belumPosition: {
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorGold_200,
    bottom: "17.39%",
    top: "78.26%",
    height: "4.35%",
    position: "absolute",
  },
  sedangDiproses: {
    height: "73.91%",
    width: "18.2%",
    top: "13.04%",
    left: "33.8%",
    textAlign: "left",
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    lineHeight: 12,
    color: Color.colorGray_1000,
  },
  dalamPerjalanan: {
    height: "52.17%",
    width: "19.24%",
    left: "55.29%",
    lineHeight: 50,
    alignItems: "center",
    display: "flex",
  },
  keranjang: {
    height: "95.65%",
    width: "10.92%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  belumDibayar: {
    width: "100%",
    left: "0%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.baskervilleOldFace,
    lineHeight: 12,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
  },
  groupChild: {
    width: "95.88%",
    right: "5.15%",
    left: "-1.03%",
    display: "none",
  },
  belumDibayarParent: {
    width: "16.81%",
    right: "68.8%",
    bottom: "0%",
    left: "14.38%",
  },
  selesai: {
    height: "65.22%",
    width: "9.53%",
    top: "17.39%",
    left: "77.82%",
    color: Color.colorLimegreen,
    textAlign: "left",
    fontFamily: FontFamily.baskervilleOldFace,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    lineHeight: 12,
  },
  dibatalkan: {
    left: "88.21%",
    lineHeight: 12,
    top: "21.74%",
  },
  statusdefaultKeranjangoffChild: {
    width: "7.63%",
    right: "14.73%",
    left: "77.64%",
  },
  statusdefaultKeranjangoff: {
    width: 577,
    height: 23,
  },
});

export default StatusdefaultKeranjangoff;
