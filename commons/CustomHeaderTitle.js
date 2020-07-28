import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CustomText } from "../components/CustomText";

export const CustomHeaderTitle = (props) => {
  const { title } = props;
  
  return (
    <View style={styles.header}>
      <CustomText style={styles.headerTitle}>{title}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
  }
});
