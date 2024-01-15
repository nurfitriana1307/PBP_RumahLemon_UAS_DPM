import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusdefaultHomeoffSear = ({
  dimensionCode,
  statusdefaultHomeoffSearPosition,
  statusdefaultHomeoffSearTop,
  statusdefaultHomeoffSearLeft,
  statusdefaultHomeoffSearWidth,
}) => {
  const statusdefaultHomeoffSearStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusdefaultHomeoffSearPosition),
      ...getStyleValue("top", statusdefaultHomeoffSearTop),
      ...getStyleValue("left", statusdefaultHomeoffSearLeft),
      ...getStyleValue("width", statusdefaultHomeoffSearWidth),
    };
  }, [
    statusdefaultHomeoffSearPosition,
    statusdefaultHomeoffSearTop,
    statusdefaultHomeoffSearLeft,
    statusdefaultHomeoffSearWidth,
  ]);

  return (
    <Image
      style={[styles.statusdefaultHomeoffSear, statusdefaultHomeoffSearStyle]}
      resizeMode="cover"
      source={dimensionCode}
    />
  );
};

const styles = StyleSheet.create({
  statusdefaultHomeoffSear: {
    width: 390,
    height: 75,
  },
});

export default StatusdefaultHomeoffSear;
