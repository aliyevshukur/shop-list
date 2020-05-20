import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { connect } from "react-redux";

import { CustomText } from "../../../components/CustomText";
import { CustomTextInput } from "../../../components/CustomTextInput";
import { CustomButton } from "../../../components/CustomButton";
import { FONT_COLOR, FIELD_COLOR } from "../../../styles/colors";
import {
  addListItem,
  getCurrentList,
  getCurrentSection,
} from "../../../store/lists";

const mapStateToProps = (state) => ({
  currentList: getCurrentList(state),
  currentSection: getCurrentSection(state),
});

export const ItemEditForm = connect(mapStateToProps, { addListItem })(
  ({ mode, currentList, currentSection, addListItem }) => {
    const [fields, setFields] = useState({
      name: "",
      count: 0,
      measure: "pkg",
    });

    const handleInputChange = (name, value) => {
      setFields({
        ...fields,
        [name]: value,
      });
    };

    const handleFormSubmit = () => {
      if (fields.name.trim === "") {
        Alert.alert("Invalid input field", "Please fill all fields");
        return;
      }

      addListItem({
        section: currentSection,
        listId: currentList.id,
        name: fields.name,
        count: fields.count,
        measure: fields.measure,
      });
    };

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {/* Name Input */}
          <View style={styles.inputWrapper}>
            <View style={styles.itemName}>
              <CustomText style={styles.formLabel}>position name</CustomText>
              <CustomTextInput
                style={styles.nameInput}
                onChangeText={handleInputChange}
                value={fields.name}
                name="name"
              />
            </View>

            {/* Count Input */}
            <View style={styles.itemCount}>
              <CustomText style={styles.formLabel}>count</CustomText>

              <View style={styles.countInput}>
                <TouchableOpacity
                  style={styles.countButton}
                  onPress={() => handleInputChange("count", fields.count - 1)}
                >
                  <CustomText weight={"bold"}>-</CustomText>
                </TouchableOpacity>
                <CustomText weight={"bold"}>{fields.count}</CustomText>
                <TouchableOpacity style={styles.countButton}>
                  <CustomText
                    weight={"bold"}
                    onPress={() => handleInputChange("count", fields.count + 1)}
                  >
                    +
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Measures */}
          <View style={styles.measures}>
            <CustomButton
              title={"pkg"}
              style={styles.measureButton}
              textStyle={[
                styles.measureButtonTitle,
                fields.measure === "pkg" && styles.activeMeasureButton,
              ]}
              weight={fields.measure === "pkg" ? "bold" : "regular"}
              reverse={true}
              onPress={() => handleInputChange("measure", "pkg")}
            />
            <CustomButton
              title={"kg"}
              style={styles.measureButton}
              textStyle={[
                styles.measureButtonTitle,
                fields.measure === "kg" && styles.activeMeasureButton,
              ]}
              weight={fields.measure === "kg" ? "bold" : "regular"}
              reverse={true}
              onPress={() => handleInputChange("measure", "kg")}
            />
            <CustomButton
              title={"litre"}
              style={styles.measureButton}
              textStyle={[
                styles.measureButtonTitle,
                fields.measure === "litre" && styles.activeMeasureButton,
              ]}
              weight={fields.measure === "litre" ? "bold" : "regular"}
              reverse={true}
              onPress={() => handleInputChange("measure", "litre")}
            />
            <CustomButton
              title={"bott"}
              style={styles.measureButton}
              textStyle={[
                styles.measureButtonTitle,
                fields.measure === "bott" && styles.activeMeasureButton,
              ]}
              weight={fields.measure === "bott" ? "bold" : "regular"}
              reverse={true}
              onPress={() => handleInputChange("measure", "bott")}
            />
          </View>

          {/* Form Buttons */}
          {mode === "addItem" ? (
            <View style={styles.formButtons}>
              <CustomButton
                title={"ADD TO LIST"}
                style={styles.formButton}
                reverse={true}
                onPress={handleFormSubmit}
              />
            </View>
          ) : (
            <View style={styles.formButtons}>
              <CustomButton title={"Cancel"} style={styles.formButton} />
              <CustomButton title={"Update"} style={styles.formButton} />
            </View>
          )}
          <View style={styles.line} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const styles = StyleSheet.create({
  container: {},
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    justifyContent: "center",
    alignItems: "center",
  },
  formLabel: {
    color: FONT_COLOR,
    fontSize: 12,
    marginBottom: 10,
  },
  nameInput: {
    width: 271,
  },
  itemCount: {
    alignItems: "center",
  },
  countInput: {
    backgroundColor: FIELD_COLOR,
    width: 92,
    height: 42,
    borderRadius: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  countButton: {},
  measureButton: {
    color: "black",
  },
  formButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formButton: {
    height: 42,
    width: 379,
    marginBottom: 21,
  },
  measures: {
    flexDirection: "row",
    padding: 14,
    justifyContent: "space-between",
  },
  measureButton: {
    width: 82,
    height: 42,
    backgroundColor: FIELD_COLOR,
  },
  measureButtonTitle: {
    color: "black",
    fontWeight: "normal",
  },
  line: {
    backgroundColor: FIELD_COLOR,
    height: 2,
    marginBottom: 33,
  },
});
