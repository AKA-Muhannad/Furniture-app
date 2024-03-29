import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const ProductDetailsStyle = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
  },
  productDetailsUpperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  productDetailsImage: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  productDetailsInfo: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    // this is only for tracing😝
    // backgroundColor: "red",
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingBottom: 500, // to take the full color in the page
  },
  productDetailsTitleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  productDetailsTitle: {
    fontFamily: "IBMPlexSansBold",
    fontSize: SIZES.large,
  },
  productDetailsPriceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  productDetailsPrice: {
    fontFamily: "IBMPlexSansSemiBold",
    paddingHorizontal: 10,
    fontSize: SIZES.large,
  },
  productDetailsRatingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  productDetailsRating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  productDetailsRatingText: {
    marginStart: 10,
    marginEnd: 10,
    color: COLORS.gray,
    fontFamily: "IBMPlexSansRegular",
  },
  productDetailsDescription: {
    fontFamily: "IBMPlexSansRegular",
    fontWeight: "bold",
    fontSize: SIZES.large - 1,
  },
  productDetailsDescriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  productDetailsDescriptionText: {
    fontFamily: "IBMPlexSansRegular",
    fontSize: SIZES.medium,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
});
