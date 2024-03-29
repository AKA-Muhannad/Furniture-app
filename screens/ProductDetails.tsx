import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductDetailsStyle } from "../styles/ProductDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, IMAGES_NETWORK, SIZES } from "../constants";
import styles from "react-native-webview/lib/WebView.styles";

export default function ProductDetails() {
  const navigation = useNavigation();

  return (
    <View style={ProductDetailsStyle.productDetailsContainer}>
      <View style={ProductDetailsStyle.productDetailsUpperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"chevron-back-circle"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name={"heart"} size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: IMAGES_NETWORK.homeImageNetwork2 }}
        style={ProductDetailsStyle.productDetailsImage}
      />
      {/*From here it starts the view for the product name and product price in the same row*/}
      <View style={ProductDetailsStyle.productDetailsInfo}>
        <View style={ProductDetailsStyle.productDetailsTitleRow}>
          <Text style={ProductDetailsStyle.productDetailsTitle}>Product</Text>
          <View style={ProductDetailsStyle.productDetailsPriceWrapper}>
            <Text style={ProductDetailsStyle.productDetailsPrice}>$660.33</Text>
          </View>
          {/*From here it ends the view for the product name and product price in the same row*/}
        </View>
        <View style={ProductDetailsStyle.productDetailsRatingRow}>
          <View style={ProductDetailsStyle.productDetailsRating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name={"star"} key={index} size={24} color={"gold"} />
            ))}
            <Text style={ProductDetailsStyle.productDetailRatingText}>
              (4.9)
            </Text>
          </View>
          <View style={ProductDetailsStyle.productDetailsRating}>
            <TouchableOpacity onPress={() => {}}>
              <SimpleLineIcons name={"plus"} size={20} />
            </TouchableOpacity>
            <Text style={ProductDetailsStyle.productDetailRatingText}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <SimpleLineIcons name={"minus"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
