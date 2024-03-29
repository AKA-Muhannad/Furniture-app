import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SIZES } from "./constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigation } from "./navigation/BottomTabNavigation";
import { Cart, ProductDetails } from "./screens";
// To manage the navigation
const Stack = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSansRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansLight: require("./assets/fonts/IBMPlexSans-Light.ttf"),
    IBMPlexSansBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    IBMPlexSansSemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
