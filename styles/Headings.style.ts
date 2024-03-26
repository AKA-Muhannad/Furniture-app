import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

export const headingsStyle = StyleSheet.create({
  headingsContainer: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  headingsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "IBMPlexSansSemiBold",
    fontSize: SIZES.xLarge - 2,
  },
});
