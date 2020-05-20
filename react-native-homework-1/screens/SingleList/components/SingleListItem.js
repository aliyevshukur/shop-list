import React from "react";
import { View, StyleSheet } from "react-native";

import {
  getSections,
  getCurrentList,
  getCurrentSection,
} from "../../../store/lists";

import { CustomText } from ".././../../components/CustomText";
import { BORDER_COLOR } from "../../../styles/colors";

const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentList: getCurrentList(state),
  currentSection: getCurrentSection(state),
});

export const SingleListItem = ({ listItem }) => {
  return (
    <View style={styles.listItem}>
      <CustomText title={listItem.name} />
      <CustomText title={`x${listItem.count} ${listItem.measure}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 21,
    borderRadius: 27,
    borderStyle: "solid",
    borderColor: BORDER_COLOR,
  },
});
