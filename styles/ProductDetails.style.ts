import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const ProductDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  info: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    // this is only for tracing😝
    // backgroundColor: "red",
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingBottom: 500, // to take the full color in the page
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "IBMPlexSansBold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    fontFamily: "IBMPlexSansSemiBold",
    paddingHorizontal: 10,
    fontSize: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    marginStart: 10,
    marginEnd: 10,
    color: COLORS.gray,
    fontFamily: "IBMPlexSansRegular",
  },
  description: {
    fontFamily: "IBMPlexSansRegular",
    fontWeight: "bold",
    fontSize: SIZES.large - 1,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descriptionText: {
    fontFamily: "IBMPlexSansRegular",
    fontSize: SIZES.medium,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
});
