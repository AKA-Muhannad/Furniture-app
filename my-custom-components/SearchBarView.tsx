import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { searchBarViewStyle } from "../styles/SearchBarView.style";

type Props = {
  value?: string;
  onPressIn: () => any;
  placeholder?: string;
  style?: StyleSheet;
  iconName: string;
};

export default function SearchBarView(props: Props) {
  return (
    <SafeAreaView>
      <View style={searchBarViewStyle.searchContainer}>
        <TouchableOpacity>
          <Feather
            name={"search"}
            size={24}
            style={searchBarViewStyle.searchIcon}
          ></Feather>
        </TouchableOpacity>
        <View style={searchBarViewStyle.searchWrapper}>
          <TextInput
            value={props.value}
            onPressIn={props.onPressIn}
            placeholder={"What are you looking for?"}
            style={searchBarViewStyle.searchInput}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity style={searchBarViewStyle.searchBtn}>
            <Ionicons
              name={props.iconName as any}
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
