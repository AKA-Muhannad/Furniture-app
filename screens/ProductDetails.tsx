import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductDetailsStyle } from "../styles/ProductDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, IMAGES_NETWORK, SIZES } from "../constants";

const someText: string =
  "ffojewopfwjefopwekfopwefkwefpoewfjmwkflnsdoklgmvwopsdlv;kfweopsdl;c,.xofepdlakc,.xopfeld;msc,zxpoewfsd;zcx\n";

export default function ProductDetails() {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <View style={ProductDetailsStyle.container}>
      <View style={ProductDetailsStyle.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"chevron-back-circle"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name={"heart"} size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: IMAGES_NETWORK.homeImageNetwork2 }}
        style={ProductDetailsStyle.image}
      />
      {/*From here it starts the view for the product name and product price in the same row*/}
      <View style={ProductDetailsStyle.info}>
        <View style={ProductDetailsStyle.titleRow}>
          <Text style={ProductDetailsStyle.title}>Product</Text>
          <View style={ProductDetailsStyle.priceWrapper}>
            <Text style={ProductDetailsStyle.price}>$660.33</Text>
          </View>
          {/*From here it ends the view for the product name and product price in the same row*/}
        </View>
        <View style={ProductDetailsStyle.ratingRow}>
          <View style={ProductDetailsStyle.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name={"star"} key={index} size={24} color={"gold"} />
            ))}
            <Text style={ProductDetailsStyle.ratingText}>(4.9)</Text>
          </View>
          <View style={ProductDetailsStyle.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name={"plus"} size={20} />
            </TouchableOpacity>
            <Text style={ProductDetailsStyle.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name={"minus"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={ProductDetailsStyle.descriptionWrapper}>
          <Text style={ProductDetailsStyle.description}>Description</Text>
          <Text style={ProductDetailsStyle.descriptionText}>{someText}</Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={ProductDetailsStyle.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={"location-outline"} size={20} />
              <Text style={{ paddingHorizontal: 5.5 }}>Dallas</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name={"truck-delivery-outline"}
                size={20}
              />
              <Text style={{ paddingHorizontal: 5.5 }}>Free Delivery</Text>
            </View>
          </View>
        </View>
        <View style={ProductDetailsStyle.cartRow}>
          <TouchableOpacity
            onPress={() => {}}
            style={ProductDetailsStyle.cartBtn}
          >
            <Text style={ProductDetailsStyle.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={ProductDetailsStyle.addCart}
          >
            <Fontisto
              name={"shopping-bag"}
              size={22}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
