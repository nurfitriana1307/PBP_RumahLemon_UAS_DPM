import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Image, Modal } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = ({ onClose }) => {
  const [rectangle2Visible, setRectangle2Visible] = useState(false);
  const [clickHereToVisible, setClickHereToVisible] = useState(false);

  const openRectangle2 = useCallback(() => {
    setRectangle2Visible(true);
  }, []);

  const closeRectangle2 = useCallback(() => {
    setRectangle2Visible(false);
  }, []);

  const openClickHereTo = useCallback(() => {
    setClickHereToVisible(true);
  }, []);

  const closeClickHereTo = useCallback(() => {
    setClickHereToVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.rectangleParent, styles.vectorIconLayout]}>
        <View style={[styles.frameChild, styles.frameShadowBox]} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <Text style={[styles.agent, styles.agentLayout]}>Agent</Text>
        <Text
          style={[styles.identitasPribadiSiapkan, styles.identitasTypo]}
        >{`Identitas Pribadi: Siapkan informasi identitas pribadi, termasuk nama lengkap, alamat, nomor telepon, dan alamat email.
Keahlian dan Pengetahuan: Jelaskan keahlian dan pengetahuan yang dimiliki terkait dengan produk atau layanan yang akan dijual.
Kemampuan Komunikasi: Tunjukkan kemampuan komunikasi yang baik, baik dalam penjualan maupun hubungan pelanggan.
Rekomendasi atau Pengalaman: Jika ada, sertakan rekomendasi atau pengalaman sebelumnya sebagai agen atau penjual. (MIN PEMBELIAN 100 PCS)
`}</Text>
        <Text style={[styles.reseller, styles.agentLayout]}>Reseller</Text>
        <Text
          style={[styles.identitasBisnisSediakan, styles.identitasTypo]}
        >{`Identitas Bisnis: Sediakan informasi tentang identitas bisnis, termasuk nama perusahaan, alamat kantor, nomor telepon, dan alamat email.
Dokumen Bisnis: Persiapkan dokumen bisnis, seperti SIUP (Surat Izin Usaha Perdagangan), NPWP (Nomor Pokok Wajib Pajak), dan akta pendirian perusahaan.
Portofolio Produk atau Layanan: Jelaskan dengan jelas produk atau layanan apa yang akan dijual, serta berikan informasi terkait harga dan stok.
Channel Penjualan: Tentukan channel penjualan yang akan digunakan, baik itu secara online melalui platform e-commerce atau secara offline di toko fisik.  (MIN PEMBELIAN 150 PCS)

`}</Text>
        <Text style={[styles.distributor, styles.agentLayout]}>
          Distributor
        </Text>
        <Text
          style={[styles.identitasPerusahaanSertakan, styles.identitasTypo]}
        >{`Identitas Perusahaan: Sertakan informasi lengkap tentang perusahaan, seperti nama, alamat, nomor telepon, dan alamat email.
Dokumen Legal Perusahaan: Persiapkan dokumen-dokumen legal perusahaan, termasuk SIUP, TDP (Tanda Daftar Perusahaan), dan NPWP.
Pengalaman Distribusi: Jelaskan pengalaman perusahaan dalam distribusi produk atau layanan sejenis, jika ada.
Jaringan Distribusi: Gambarkan jaringan distribusi yang dimiliki perusahaan, baik itu mencakup wilayah geografis, jumlah agen, atau toko mitra.
Kapasitas Keuangan: Tunjukkan kapasitas keuangan perusahaan untuk mengelola inventaris, pengiriman, dan aspek-aspek keuangan lainnya. (MIN PEMBELIAN 250 PCS)`}</Text>
        <Pressable style={styles.frameInner} onPress={openRectangle2} />
        <Pressable
          style={styles.clickHereToContainer}
          onPress={openClickHereTo}
        >
          <Text style={styles.clickHereToJoin}>Click here to join</Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector32.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector33.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={rectangle2Visible}>
        <View style={styles.rectangle2Overlay}>
          <Pressable style={styles.rectangle2Bg} onPress={closeRectangle2} />
          <Frame onClose={closeRectangle2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={clickHereToVisible}>
        <View style={styles.clickHereToOverlay}>
          <Pressable style={styles.clickHereToBg} onPress={closeClickHereTo} />
          <Frame onClose={closeClickHereTo} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameShadowBox: {
    height: 660,
    width: 326,
    borderRadius: Border.br_mini,
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
  agentLayout: {
    height: 30,
    width: 108,
    color: Color.colorBlack,
    letterSpacing: 0.8,
    fontSize: FontSize.size_21xl,
    left: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heiReina,
    lineHeight: 50,
    position: "absolute",
  },
  identitasTypo: {
    width: 299,
    fontFamily: FontFamily.roboto,
    fontWeight: "300",
    lineHeight: 12,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    left: 16,
    position: "absolute",
  },
  frameChild: {
    top: 10,
    left: 11,
    backgroundColor: "#fbe1b2",
  },
  frameItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGold_100,
  },
  agent: {
    top: 11,
  },
  identitasPribadiSiapkan: {
    top: 36,
    height: 179,
  },
  reseller: {
    top: 203,
  },
  identitasBisnisSediakan: {
    top: 255,
    height: 138,
  },
  distributor: {
    top: 403,
  },
  identitasPerusahaanSertakan: {
    top: 448,
    height: 154,
  },
  rectangle2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameInner: {
    top: 621,
    left: 163,
    backgroundColor: Color.colorMoccasin_100,
    width: 152,
    height: 29,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  clickHereToOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  clickHereToBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  clickHereToJoin: {
    fontSize: FontSize.size_6xl,
    textDecoration: "underline",
    letterSpacing: 0.5,
    color: Color.colorLimegreen,
    width: 122,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heiReina,
    lineHeight: 50,
  },
  clickHereToContainer: {
    left: 175,
    top: 611,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.1%",
    width: "6.71%",
    top: "91.72%",
    right: "3.26%",
    bottom: "5.18%",
    left: "90.03%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.81%",
    width: "5.01%",
    top: "91.19%",
    right: "6.8%",
    bottom: "6%",
    left: "88.19%",
    position: "absolute",
  },
  rectangleParent: {
    backgroundColor: Color.colorWhite,
    width: 337,
    height: 670,
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default Frame;
