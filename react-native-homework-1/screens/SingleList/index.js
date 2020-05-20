import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import {
  getSections,
  getCurrentList,
  getCurrentSection,
} from "../../store/lists";
import AppLayout from "../../commons/AppLayout";
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";
import { SingleListItem } from "./components/SingleListItem";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { ItemEditForm } from "./components/ItemEditForm";

const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentList: getCurrentList(state),
  currentSection: getCurrentSection(state),
});

export const SingleList = connect(mapStateToProps)(
  ({ currentList, navigation }) => {
    // Set header title
    navigation.setOptions({
      headerTitle: () => <CustomHeaderTitle title={currentList.name} />,
    });

    const [mode, setMode] = useState("addItem");
    console.log(currentList);
    
    const renderEditForm = () => {
      switch (mode) {
        case "addItem":
          return <ItemEditForm mode={"addItem"} />;
        case "edit":
          return <ItemEditForm mode={"edit"} />;
        case "static":
          return (
            <View style={styles.header}>
              <CustomButton
                style={styles.resetBtn}
                textStyle={{ fontSize: 10 }}
                title={"RESET"}
                reverse={true}
              />
              <CustomText>1/4</CustomText>
            </View>
          );
      }
    };
    console.log(currentList.items);
    return (
      <AppLayout>
        {renderEditForm()}

        <View style={styles.listItems}>
          {currentList.items.map((listItem) => (
            <SingleListItem listItem={listItem} />
          ))}
        </View>
      </AppLayout>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resetBtn: {
    width: 72,
    height: 19,
  },
});
