import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { CustomText } from "../../../components/CustomText";
import {
  BORDER_COLOR,
  SECONDARY_COLOR,
  FIELD_COLOR,
} from "../../../styles/colors";

export const ListLink = (props) => {
  const { list, handleOnPress: handlePress, onLongPress } = props;

  // Find and return completed list item count
  const getCompletedCount = () => {
    let completedCount = 0;

    list.items.forEach((item) => {
      if (item.completed) {
        completedCount++;
      }
    });
    return completedCount;
  };

  // Get completed status as percentage
  const calculateStatus = () => {
    const result = (getCompletedCount() / list.items.length) * 100;

    return !isNaN(result) ? result : 0;
  };

  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => handlePress(list)}
      onLongPress={() => onLongPress(list.id)}
    >
      <View style={styles.label}>
        <CustomText style={{ fontSize: 18 }} weight={"bold"}>
          {list.name}
        </CustomText>
        <CustomText>
          {`${getCompletedCount()} / ${list.items.length}`}
        </CustomText>
      </View>
      <View style={styles.statusBar}>
        <View
          style={[
            styles.statusBarCompleted,
            { width: `${calculateStatus()}%` },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: BORDER_COLOR,
    padding: 20,
    marginBottom: 15
  },
  label: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statusBar: {
    width: "100%",
    height: 19,
    backgroundColor: FIELD_COLOR,
    borderRadius: 20,
  },
  statusBarCompleted: {
    backgroundColor: SECONDARY_COLOR,
    height: "100%",
    borderRadius: 20,
  },
});
