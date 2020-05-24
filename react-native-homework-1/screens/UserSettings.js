import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import { CustomText } from "../components/CustomText";
import { CustomButton } from "../components/CustomButton";
import { CustomTextInput } from "../components/CustomTextInput";
import { FIELD_COLOR } from "../styles/colors";
import { updateSettings } from "../store/user";
import { getUserSettings } from "../store/user";
import AppLayout from "../commons/AppLayout";

const mapStateToProps = (state) => ({
  userSettings: getUserSettings(state),
});

export const UserSettings = connect(mapStateToProps, { updateSettings })(
  ({ userSettings, navigation, updateSettings }) => {
    const [fields, setFields] = useState({
      username: userSettings.username,
      avatarUrl: userSettings.avatarUrl,
    });

    const onChangeText = (name, value) => {
      setFields({
        ...fields,
        [name]: value,
      });
    };

    const saveChanges = () => {
      for (let key in fields) {
        if (fields[key].trim() === "") {
          return;
        }
      }

      updateSettings(fields);
      navigation.navigate("Homepage");
    };

    return (
      <AppLayout>
        <CustomText style={styles.listText}>username</CustomText>

        <CustomTextInput
          style={styles.listName}
          onChangeText={onChangeText}
          name="username"
          value={fields.username}
        />

        <CustomText style={styles.listText}>avatar url</CustomText>

        <CustomTextInput
          style={styles.listName}
          onChangeText={onChangeText}
          name="avatarUrl"
          value={fields.avatarUrl}
        />

        <CustomButton
          style={styles.createButton}
          title={"SAVE CHANGES"}
          reverse={true}
          onPress={saveChanges}
        />
      </AppLayout>
    );
  }
);

const styles = StyleSheet.create({
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
