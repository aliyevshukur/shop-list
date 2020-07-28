import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import { CustomText } from "../components/CustomText";
import { CustomButton } from "../components/CustomButton";
import { CustomTextInput } from "../components/CustomTextInput";
import { FIELD_COLOR } from "../styles/colors";
import { FONT_COLOR } from "../styles/colors";
import AppLayout from "../commons/AppLayout";

import { addList } from "../store/lists";

export const CreateList = connect(null, { addList })((props) => {
  const [fields, setFields] = useState({
    name: "",
    section: "regular",
  });

  const handleFieldChange = (name, value) => {
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const createList = () => {
    for (let key in fields) {
      if (fields[key].trim() === "") {
        return;
      }
    }

    props.addList(fields);
    props.navigation.navigate("Homepage");
  };

  return (
    <AppLayout>
      <CustomText style={styles.listText}>list name</CustomText>
      <CustomTextInput
        style={styles.listName}
        onChangeText={handleFieldChange}
        name="name"
        value={fields.name}
      />
      <View style={styles.sectionButtons}>
        <CustomButton
          style={[
            {
              opacity: fields.section === "oneTime" ? 1 : 0.5,
            },
            styles.button,
          ]}
          textStyle={{ color: FONT_COLOR }}
          title={"One Time"}
          onPress={() => setFields({ ...fields, section: "oneTime" })}
        />
        <CustomButton
          style={[
            {
              opacity: fields.section === "regular" ? 1 : 0.5,
            },
            styles.button,
          ]}
          textStyle={{ color: FONT_COLOR }}
          title={"Regular"}
          onPress={() => setFields({ ...fields, section: "regular" })}
        />
      </View>
      <CustomButton
        style={styles.createButton}
        title={"CREATE LIST"}
        reverse={true}
        onPress={createList}
      />
    </AppLayout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  listText: {
    textAlign: "center",
  },
  listName: {
    marginVertical: 14,
  },
  sectionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: FIELD_COLOR,
    width: 181,
    paddingVertical: 11,
  },
  createButton: {
    paddingVertical: 11,
    marginTop: 14,
  },
});
