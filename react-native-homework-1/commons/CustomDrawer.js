import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

import { CustomText } from "../components/CustomText";
import { CustomButton } from "../components/CustomButton";
import { getUserSettings } from "../store/user";
import { MAIN_COLOR } from "../styles/colors";
import { setCurrentSection } from "../store/lists";

const mapStateToProps = (state) => ({
  userSettings: getUserSettings(state),
});

export const CustomDrawer = connect(mapStateToProps, { setCurrentSection })(
  (props) => {
    const { username, image } = props.userSettings;
    const { navigation } = props;

    return (
      <View {...props} style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={{ uri: image }} style={styles.userImage} />
          <CustomText style={styles.username}>{username}</CustomText>
        </View>

        <View style={styles.navigationWrapper}>
          <View style={styles.navigation}>
            <CustomButton
              style={[styles.navigationBtn, { marginBottom: 32 }]}
              title={"ADD NEW LIST"}
              onPress={() => {
                navigation.navigate("CreateList");
              }}
            />
            <CustomButton
              style={styles.navigationBtn}
              title={"ONE TIME LIST"}
              onPress={() => {
                props.setCurrentSection({ section: "oneTime" });
                navigation.navigate("Homepage");
              }}
            />
            <CustomButton
              style={styles.navigationBtn}
              title={"REGULAR LISTS"}
              onPress={() => {
                props.setCurrentSection({ section: "regular" });
                navigation.navigate("Homepage");
              }}
            />
            <CustomButton
              style={styles.navigationBtn}
              title={"USER SETTINGS"}
              onPress={() => {
                navigation.navigate("UserSettings");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  username: {
    fontSize: 24,
    marginLeft: 22,
    color: "#303234",
  },
  userImage: {
    width: 50,
    height: 49.3,
    borderWidth: 3,
    borderColor: MAIN_COLOR,
    borderRadius: 29,
  },
  navigationWrapper: {},
  navigation: {
    alignItems: "center",
    backgroundColor: MAIN_COLOR,
    padding: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "100%",
  },
  navigationBtn: {
    width: 251,
    paddingVertical: 8,
    marginBottom: 10,
  },
});
