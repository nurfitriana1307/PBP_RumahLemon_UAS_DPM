import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Pressable, Modal } from "react-native";
import LoginFrame from "../components/LoginFrame";
import { Border, Color } from "../GlobalStyles";

const Logo = () => {
  const [logoContainerVisible, setLogoContainerVisible] = useState(false);

  const openLogoContainer = useCallback(() => {
    setLogoContainerVisible(true);
  }, []);

  const closeLogoContainer = useCallback(() => {
    setLogoContainerVisible(false);
  }, []);

  return (
    <>
      <Pressable style={styles.logo} onPress={openLogoContainer}>
        <Image
          style={styles.logoChild}
          resizeMode="cover"
          source={require("../assets/group-32.png")}
        />
        <Image
          style={styles.logo11Icon}
          resizeMode="cover"
          source={require("../assets/logo-1-1.png")}
        />
        <Image
          style={styles.ge21}
          resizeMode="cover"
          source={require("../assets/ge-2-1.png")}
        />
        <Image
          style={styles.logoItem}
          resizeMode="cover"
          source={require("../assets/group-33.png")}
        />
      </Pressable>

      <Modal animationType="fade" transparent visible={logoContainerVisible}>
        <View style={styles.logoContainerOverlay}>
          <Pressable
            style={styles.logoContainerBg}
            onPress={closeLogoContainer}
          />
          <LoginFrame onClose={closeLogoContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  logoContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logoChild: {
    top: -185,
    left: -367,
    width: 1177,
    height: 1275,
    display: "none",
    position: "absolute",
  },
  logo11Icon: {
    top: 247,
    left: 2,
    width: 387,
    height: 350,
    position: "absolute",
  },
  ge21: {
    top: -233,
    left: 109,
    borderRadius: 99,
    width: 506,
    height: 467,
    position: "absolute",
  },
  logoItem: {
    height: "25.58%",
    width: "74.08%",
    top: "80.57%",
    right: "59%",
    bottom: "-6.15%",
    left: "-33.08%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logo: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGold_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Logo;
