import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { FIELD_COLOR } from "../styles/colors";

export const CustomTextInput = ({ style={}, onChangeText, value, name, ...rest }) => {
  return (
    <TextInput
      {...rest}
      style={[styles.input, style]}
      onChangeText={(value) => onChangeText(name, value)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    backgroundColor: FIELD_COLOR,
    borderRadius: 45,
    // fontFamily: "MontserratRegular",
    textAlign: 'center'
  },
});
