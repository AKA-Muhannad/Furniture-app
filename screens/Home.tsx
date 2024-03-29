import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyles from "../styles/Home.style";
import homeStyle from "../styles/Home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "react-native-webview/lib/WebView.styles";
import { TouchableOpacity } from "react-native";
import { Welcome } from "../components";
import AppBar from "../components/home/AppBar";
import Carsoul from "../components/home/Carsoul";
import { Headings } from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBar />
        <Welcome />
        <Carsoul />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
}
