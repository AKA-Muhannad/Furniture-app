import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { headingsStyle } from "../../styles/Headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export function Headings() {
  return (
    <View style={headingsStyle.headingsContainer}>
      <View style={headingsStyle.headingsHeader}>
        <Text style={headingsStyle.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name={"grid"} size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
