import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CustomText } from ".././../../components/CustomText";
import {
  BORDER_COLOR,
  SECONDARY_COLOR,
  MAIN_COLOR,
} from "../../../styles/colors";

export const SingleListItem = ({
  listItem,
  editMode,
  onDelete,
  onEdit,
  onLongPress,
}) => {
  return (
    <TouchableOpacity onLongPress={() => onLongPress(listItem.id)}>
      <View
        style={[
          styles.listItemWrapper,
          { opacity: listItem.completed ? 0.5 : 1 },
        ]}
      >
        {editMode && (
          <TouchableOpacity
            style={[styles.editBtn, styles.btn]}
            onPress={() => onEdit(listItem.id)}
          >
            <FontAwesome5 name="pen" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        )}

        {/* Name and measure */}
        <View style={styles.listItem}>
          <CustomText>{listItem.name}</CustomText>
          <CustomText>
            x{listItem.count} {listItem.measure}
          </CustomText>
        </View>

        {editMode && (
          <TouchableOpacity
            style={[styles.deleteBtn, styles.btn]}
            onPress={() => onDelete(listItem.id)}
          >
            <View style={styles.crossIcon}>
              <View style={[styles.crossIconItem, styles.left]} />
              <View style={[styles.crossIconItem, styles.right]} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 27,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: BORDER_COLOR,
    marginBottom: 14,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 35,
  },
  deleteBtn: {
    backgroundColor: MAIN_COLOR,
  },
  editBtn: {
    backgroundColor: SECONDARY_COLOR,
  },
  crossIcon: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  crossIconItem: {
    width: 2,
    height: 28,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: "16%",
    left: "49%",
  },
  left: {
    transform: [{ rotate: "45deg" }],
  },
  right: {
    transform: [{ rotate: "-45deg" }],
  },
});
