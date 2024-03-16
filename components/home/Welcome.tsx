import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import welcomeStyles from "../../styles/welcome.style";
import { COLORS, SIZES } from "../../constants";
import welcomeStyle from "../../styles/welcome.style";
import SearchBarView from "../../my-custom-components/SearchBarView";
import { Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  return (
    <View>
      <View style={welcomeStyles.container}>
        <Text
          style={[
            welcomeStyles.welcomeText,
            {
              color:
                welcomeStyle.welcomeText.color === "red"
                  ? COLORS.black
                  : COLORS.gray,
              marginTop:
                welcomeStyle.welcomeText.marginTop === 10 ? SIZES.xSmall : 5,
            },
          ]}
        >
          Find The most
        </Text>
        <Text
          style={[
            welcomeStyles.welcomeText,
            {
              color:
                welcomeStyle.welcomeText.color === "red"
                  ? COLORS.primary
                  : COLORS.gray,
              marginTop: welcomeStyle.welcomeText.marginTop === 10 ? 0 : 5,
            },
          ]}
        >
          Luxurious Furniture
        </Text>
      </View>
      <SearchBarView />
    </View>
  );
}
