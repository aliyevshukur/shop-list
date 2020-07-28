import React from "react";
import { Text } from "react-native";
import { FONT_COLOR } from '../styles/colors';

const fontFamilies = {
  regular: "MontserratRegular",
  medium: "MontserratMedium",
  bold: "MontserratBold",
};

export const CustomText = ({ children, style, weight, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[{ fontFamily: fontFamilies[weight] || fontFamilies.regular, color: FONT_COLOR }, style]}
    >
      {children}
    </Text>
  );
};
