import { StyleSheet, TextStyle, TextStyleIOS, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../constants";

type Props = {
  color?: string;
};

const welcomeStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: {
    fontFamily: "IBMPlexSansRegular",
    fontSize: SIZES.xxLarge - 5,
    marginTop: 10,
    color: "red",
  },
});

export default welcomeStyles;
