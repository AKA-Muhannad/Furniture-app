/*
*
In this file we use jsx because the
*  SliderBox package is not supporting the TypeScript yet
* Already try to download it with
* npm i --save-dev @types/react-native-image-slider-box
*********
* SOLVE IT WITH TS-IGNORE
*/
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
// @ts-ignore
import { SliderBox } from "react-native-image-slider-box";
import { carsoulStyle } from "../../styles/Carsoul.style";
import { COLORS, IMAGES_NETWORK } from "../../constants";

export default function Carsoul() {
  const slides: string[] = [
    IMAGES_NETWORK.homeImageNetwork1,
    IMAGES_NETWORK.homeImageNetwork2,
    IMAGES_NETWORK.homeImageNetwork3,
  ];
  return (
    <View style={carsoulStyle.carsoulContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
}
