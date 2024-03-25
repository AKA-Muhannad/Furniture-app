import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { searchStyle } from "../styles/Search.style";
import SearchBarView from "../my-custom-components/SearchBarView";

export default function Search() {
  return (
    <SearchBarView
      onPressIn={() => {}}
      iconName={"search-outline"}
    ></SearchBarView>
  );
}
