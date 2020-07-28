import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, View, StyleSheet } from "react-native";

import {
  getSections,
  getCurrentSection,
  setCurrentListId,
  deleteList,
} from "../../store/lists";
import { ListLink } from "./components/ListLink";
import AppLayout from "../../commons/AppLayout";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { CustomText } from "../../components/CustomText";
import { CustomButton } from "../../components/CustomButton";
import { MAIN_COLOR } from "../../styles/colors";

const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentSection: getCurrentSection(state),
});

export const HomePage = connect(mapStateToProps, {
  setCurrentListId,
  deleteList,
})((props) => {
  const {
    sections,
    currentSection,
    setCurrentListId,
    navigation,
    deleteList,
  } = props;

  const [modalVisible, setModalVisible] = useState("false");
  const [selectedListToDelete, setSelectedListToDelete] = useState("");

  navigation.setOptions({
    headerTitle: () => (
      <CustomHeaderTitle
        title={currentSection === "regular" ? "Regular List" : "One Time List"}
      />
    ),
  });

  // Handle press on list
  const handlePress = (list) => {
    navigation.navigate("SingleList");
    setCurrentListId({ listId: list.id });
  };

  const onLongPress = (listId) => {
    setSelectedListToDelete(listId);
    setModalVisible(!modalVisible);
  };

  return (
    <AppLayout>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalView}>
            <CustomText style={styles.modalLabel}>Delete this list?</CustomText>

            <View style={styles.buttonsWrapper}>
              <CustomButton
                title={"Yes"}
                onPress={() => {
                  deleteList({listId: selectedListToDelete});
                  setModalVisible(!modalVisible);
                }}
                style={styles.btn}
              />
              <CustomButton
                title={"No"}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={styles.btn}
              />
            </View>
          </View>
        </View>
      </Modal>
      {sections[currentSection].map((list) => (
        <ListLink
          list={list}
          key={list.id}
          handleOnPress={handlePress}
          onLongPress={onLongPress}
        />
      ))}
    </AppLayout>
  );
});

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 20,
    padding: 30,
  },
  modalLabel: {
    color: "#FFFFFF",
    marginBottom: 20,
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
});
