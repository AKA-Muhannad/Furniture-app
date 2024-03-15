import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import welcomeStyles from "../../styles/welcome.style";
import { COLORS } from "../../constants";
import welcomeStyle from "../../styles/welcome.style";

export default function Welcome() {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.welcomeText}>Find The most</Text>
      <Text
        style={[
          welcomeStyles.welcomeText,
          {
            color:
              welcomeStyle.welcomeText.color === "red"
                ? COLORS.black
                : COLORS.gray,
          },
        ]}
      >
        Luxurious Furniture
      </Text>
    </View>
  );
}
