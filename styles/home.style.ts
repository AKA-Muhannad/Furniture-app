import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const homeStyles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "SemiBold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    backgroundColor: "green",
    zIndex: 999, // What is this ???
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    height: 16,
    width: 16,
    bottom: 16,
    position: "absolute",
  },
  cartNumber: {
    fontFamily: "Regular",
    color: COLORS.lightWhite,
    fontWeight: "600",
    fontSize: SIZES.small,
  },
});

export default homeStyles;
