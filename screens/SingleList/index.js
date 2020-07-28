import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import {
  getSections,
  getCurrentListId,
  getCurrentSection,
  deleteListItem,
  addListItem,
  editListItem,
  completeListItem,
  resetAll,
} from "../../store/lists";
import AppLayout from "../../commons/AppLayout";
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";
import { SingleListItem } from "./components/SingleListItem";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { CustomHeaderIcon } from "../../commons/CustomHeaderIcon";
import { ItemEditForm } from "./components/ItemEditForm";

const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentListId: getCurrentListId(state),
  currentSection: getCurrentSection(state),
});

export const SingleList = connect(mapStateToProps, {
  deleteListItem,
  addListItem,
  editListItem,
  completeListItem,
  resetAll,
})((props) => {
  const {
    sections,
    currentSection,
    currentListId,
    navigation,
    deleteListItem,
    addListItem,
    editListItem,
    completeListItem,
    resetAll,
  } = props;

  const [mode, setMode] = useState("static");

  // Id of picked item to edit
  const [editedItemId, setEditedItemId] = useState("");
  const [fields, setFields] = useState({
    name: "",
    count: 0,
    measure: "pkg",
  });

  // Get a list from state
  const findList = (id) => {
    return sections[currentSection].find((list) => list.id === id);
  };

  const currentList = findList(currentListId);

  // Set header title
  navigation.setOptions({
    headerTitle: () => <CustomHeaderTitle title={currentList.name} />,
    headerRight: () => (
      <CustomHeaderIcon
        onPress={() => setMode("addItem")}
        iconName={"md-create"}
        size={22}
      />
    ),
  });

  // Change header icon to save icon
  const changeHeaderIconToSave = () => {
    navigation.setOptions({
      headerRight: () => (
        <CustomHeaderIcon
          onPress={() => setMode("static")}
          iconName={"ios-save"}
        />
      ),
    });
  };

  // Show form or header depending on mode
  const renderEditForm = () => {
    switch (true) {
      case mode === "addItem":
        changeHeaderIconToSave();
        return (
          <ItemEditForm
            mode={"addItem"}
            fields={fields}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
        );
      case mode === "edit":
        changeHeaderIconToSave();
        return (
          <ItemEditForm
            onCancel={() => setMode("static")}
            fields={fields}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
        );
      case mode === "static" && currentSection === "regular":
        return (
          <View style={styles.header}>
            <CustomButton
              style={styles.resetBtn}
              textStyle={{ fontSize: 10 }}
              title={"RESET"}
              reverse={true}
              onPress={() => resetAll()}
            />
            <CustomText>
              {getCompletedCount()}/{currentList.items.length}
            </CustomText>
          </View>
        );
    }
  };

  // Find and return completed list item count
  const getCompletedCount = () => {
    let completedCount = 0;

    currentList.items.forEach((item) => {
      if (item.completed) {
        completedCount++;
      }
    });
    return completedCount;
  };

  const handleInputChange = (name, value) => {
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleFormSubmit = (action) => {
    if (fields.name.trim() === "") {
      Alert.alert("Invalid input", "Name field can't be empty");
      return;
    }

    if (action === "update") {
      editListItem({
        itemId: editedItemId,
        name: fields.name,
        count: fields.count,
        measure: fields.measure,
      });
    } else {
      addListItem({
        name: fields.name,
        count: fields.count,
        measure: fields.measure,
      });
    }
  };

  // Set status to completed
  const onLongPress = (id) => {
    completeListItem({ itemId: id });
  };

  return (
    <AppLayout>
      {renderEditForm()}

      <View style={styles.listItems}>
        {currentList.items.map((listItem) => (
          <SingleListItem
            key={listItem.id}
            listItem={listItem}
            editMode={mode === "static" ? false : true}
            onDelete={(itemId) => deleteListItem({ itemId })}
            onEdit={(itemId) => {
              setEditedItemId(itemId);
              setMode("edit");
            }}
            onLongPress={onLongPress}
          />
        ))}
      </View>
    </AppLayout>
  );
});

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  resetBtn: {
    width: 72,
    height: 19,
  },
});
