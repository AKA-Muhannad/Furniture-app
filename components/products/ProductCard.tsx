import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ProductCardStyle } from "../../styles/ProductCard.style";
import { COLORS, IMAGES_NETWORK } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ProductCard() {
  // const navigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPressIn={() => navigation.navigate("ProductDetails")}
      style={ProductCardStyle.productCardTouchableOpacity}
    >
      <View style={ProductCardStyle.productCardContainer}>
        <View style={ProductCardStyle.productCardImageContainer}>
          <Image
            source={{ uri: IMAGES_NETWORK.homeImageNetwork1 }}
            style={ProductCardStyle.productCardImage}
          />
        </View>
        <View style={ProductCardStyle.productCardDetails}>
          <Text numberOfLines={1} style={ProductCardStyle.productCardTitle}>
            Product
          </Text>
          <Text numberOfLines={1} style={ProductCardStyle.productCardSupplier}>
            Amazon
          </Text>
          <Text numberOfLines={1} style={ProductCardStyle.productCardPrice}>
            2500$
          </Text>
        </View>
        <TouchableOpacity style={ProductCardStyle.productCardAddBtn}>
          <Ionicons
            name={"add-circle"}
            size={35}
            color={COLORS.primary}
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
