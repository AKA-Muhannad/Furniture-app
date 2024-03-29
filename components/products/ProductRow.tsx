import { View, Text, FlatList } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import { ProductRowStyle } from "../../styles/ProductRow.style";
import ProductCard from "./ProductCard";

// FlatList is a component that allow us to render the data
export default function ProductRow() {
  const products: number[] = [1, 2, 3, 4];
  return (
    <View style={ProductRowStyle.productRowContainer}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard />}
        horizontal={true}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}
