const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Kesehatan from "./screens/Kesehatan";
import Logo from "./screens/Logo";
import LoginFrame from "./components/LoginFrame";
import Beranda from "./screens/Beranda";
import Minuman from "./screens/Minuman";
import FindPage from "./screens/FindPage";
import Kecantikan from "./screens/Kecantikan";
import SedangDiproses from "./screens/SedangDiproses";
import BelumDibayar from "./screens/BelumDibayar";
import Register from "./screens/Register";
import DalamPerjalanan from "./screens/DalamPerjalanan";
import Profile from "./screens/Profile";
import FoodPageLefame200ml from "./screens/FoodPageLefame200ml";
import Pengiriman from "./screens/Pengiriman";
import Pembayaran from "./screens/Pembayaran";
import Frame from "./components/Frame";
import FoodPageChiaseedOragani from "./screens/FoodPageChiaseedOragani";
import FoodPageMaduLebahLiar from "./screens/FoodPageMaduLebahLiar";
import FoodPageLeFameSerum from "./screens/FoodPageLeFameSerum";
import FoodPageLemonTea from "./screens/FoodPageLemonTea";
import Dibatalkan from "./screens/Dibatalkan";
import Selesai from "./screens/Selesai";
import Chat from "./screens/Chat";
import OverlayReview from "./components/OverlayReview";
import StatusdefaultKeranjangoff from "./components/StatusdefaultKeranjangoff";
import StatusdefaultUkuranbesarImage from "./components/StatusdefaultUkuranbesarImage";
import StatusdefaultHomeoffSear from "./components/StatusdefaultHomeoffSear";
import Keranjang from "./screens/Keranjang";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Kesehatan"
              component={Kesehatan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Logo"
              component={Logo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginFrame"
              component={LoginFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beranda"
              component={Beranda}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Minuman"
              component={Minuman}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindPage"
              component={FindPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kecantikan"
              component={Kecantikan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SedangDiproses"
              component={SedangDiproses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BelumDibayar"
              component={BelumDibayar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DalamPerjalanan"
              component={DalamPerjalanan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodPageLefame200ml"
              component={FoodPageLefame200ml}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pengiriman"
              component={Pengiriman}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pembayaran"
              component={Pembayaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodPageChiaseedOragani"
              component={FoodPageChiaseedOragani}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodPageMaduLebahLiar"
              component={FoodPageMaduLebahLiar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodPageLeFameSerum"
              component={FoodPageLeFameSerum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodPageLemonTea"
              component={FoodPageLemonTea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dibatalkan"
              component={Dibatalkan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Selesai"
              component={Selesai}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
