import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { CustomText } from "../../../components/CustomText";
import { BORDER_COLOR } from "../../../styles/colors";
import { getCurrentList, setCurrentList } from "../../../store/lists";

const mapStateToProps = (state) => ({});

export const ListLink = (props) => {

  const { list, handleOnPress: handlePress } = props;

 
  return (
    <TouchableOpacity style={styles.list} onPress={() => handlePress(list)}>
      <CustomText style={{ fontSize: 18 }} weight={"bold"}>
        {list.name}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: BORDER_COLOR,
  },
});
