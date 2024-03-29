import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const ProductCardStyle = StyleSheet.create({
  productCardTouchableOpacity: {
    // backgroundColor: "red", it helps for tracing the issue 😂
    paddingEnd: -20,
    paddingStart: -20,
    borderRadius: SIZES.medium,
    marginBottom: 55,
    marginStart: 2,
    marginEnd: 18,
  },
  productCardContainer: {
    width: 182,
    height: 240,
    // marginEnd: 22,
    // marginStart: 9.5,
    // marginBottom: 52,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  productCardImageContainer: {
    flex: 1,
    width: 170,
    marginStart: SIZES.small / 2,
    marginVertical: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    backgroundColor: COLORS.gray2,
  },
  productCardImage: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  productCardDetails: {
    padding: SIZES.small,
  },
  productCardTitle: {
    fontFamily: "IBMPlexSansBold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  productCardSupplier: {
    fontFamily: "IBMPlexSansBold",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  productCardPrice: {
    fontFamily: "IBMPlexSansRegular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  productCardAddBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});
