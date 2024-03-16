import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZES } from "../../constants";

type Props = {
  children: React.ReactNode;
};

export default function AppBar() {
  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Ionicons name={"location-outline"} size={24} />
        <Text style={styles.location}>Shanghai China</Text>
        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.cartCount}>
            <Text style={styles.cartNumber}>8</Text>
          </View>
          <TouchableOpacity>
            <Fontisto name={"shopping-bag"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "IBMPlexSansBold",
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
    fontFamily: "IBMPlexSansSemiBold",
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
    fontFamily: "IBMPlexSansRegular",
    color: COLORS.lightWhite,
    fontWeight: "600",
    fontSize: SIZES.small,
  },
});
