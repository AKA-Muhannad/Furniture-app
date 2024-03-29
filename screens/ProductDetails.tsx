import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductDetailsStyle } from "../styles/ProductDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
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
            <Text style={ProductDetailsStyle.productDetailsRatingText}>
              (4.9)
            </Text>
          </View>
          <View style={ProductDetailsStyle.productDetailsRating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name={"plus"} size={20} />
            </TouchableOpacity>
            <Text style={ProductDetailsStyle.productDetailsRatingText}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name={"minus"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={ProductDetailsStyle.productDetailsDescriptionWrapper}>
          <Text style={ProductDetailsStyle.productDetailsDescription}>
            Description
          </Text>
          <Text style={ProductDetailsStyle.productDetailsDescriptionText}>
            {someText}
          </Text>
        </View>
      </View>
    </View>
  );
}
