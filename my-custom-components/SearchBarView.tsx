import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function SearchBarView() {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name={"search"} size={24} style={styles.searchIcon}></Feather>
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          value=""
          onPressIn={() => {}}
          placeholder={"What are you looking for?"}
          style={styles.searchInput}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons
            name={"camera-outline"}
            size={SIZES.xLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginStart: 10,
    marginEnd: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "IBMPlexSansRegular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});
