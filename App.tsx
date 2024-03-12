import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SIZES } from "./constants";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    light: require("./assets/fonts/IBMPlexSans-Light.ttf"),
    bold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
});
