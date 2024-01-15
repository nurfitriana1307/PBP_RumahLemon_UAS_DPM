import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusdefaultUkuranbesarImage = ({
  dimensionCode,
  statusdefaultUkuranbesarIPosition,
  statusdefaultUkuranbesarITop,
  statusdefaultUkuranbesarILeft,
}) => {
  const statusdefaultUkuranbesarIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusdefaultUkuranbesarIPosition),
      ...getStyleValue("top", statusdefaultUkuranbesarITop),
      ...getStyleValue("left", statusdefaultUkuranbesarILeft),
    };
  }, [
    statusdefaultUkuranbesarIPosition,
    statusdefaultUkuranbesarITop,
    statusdefaultUkuranbesarILeft,
  ]);

  return (
    <Image
      style={[
        styles.statusdefaultUkuranbesarIcon,
        statusdefaultUkuranbesarIconStyle,
      ]}
      resizeMode="cover"
      source={dimensionCode}
    />
  );
};

const styles = StyleSheet.create({
  statusdefaultUkuranbesarIcon: {
    width: 60,
    height: 58,
  },
});

export default StatusdefaultUkuranbesarImage;
