import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyles from "../styles/home.style";
import homeStyle from "../styles/home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "react-native-webview/lib/WebView.styles";
import { TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={homeStyles.appBarWrapper}>
        <View style={homeStyle.appBar}>
          <Ionicons name={"location-outline"} size={24} />
          <Text style={homeStyles.location}>Shanghai China</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={homeStyles.cartCount}>
              <Text style={homeStyles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name={"shopping-bag"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
