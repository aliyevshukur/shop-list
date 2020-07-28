import React from "react";
import { View, TouchableOpacity } from "react-native";

import { CustomText } from "./CustomText";
import { MAIN_COLOR } from "../styles/colors";

export const CustomButton = ({
  title,
  weight,
  onPress,
  style,
  reverse,
  textStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        {...rest}
        style={[
          {
            borderRadius: 39,
            backgroundColor: reverse ? MAIN_COLOR : "#FFFFFF",
            alignItems: "center",
            justifyContent: 'center'
          },
          style,
        ]}
      >
        <CustomText
          weight={weight  || "bold"}
          style={[
            {
              fontSize: 14,
              color: reverse ? "#FFFFFF" : MAIN_COLOR,
            },
            textStyle,
          ]}
        >
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};
