import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import { HomePage, SingleList } from "../../screens";
import { MAIN_COLOR } from "../../styles/colors";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { CustomHeaderIcon } from "../../commons/CustomHeaderIcon";
import {
  getSections,
  getCurrentListId,
  getCurrentSection,
} from "../../store/lists";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentSection: getCurrentSection(state),
  currentList: getCurrentListId(state),
});

export const HomeStack = connect(mapStateToProps)(() => {
  return (
    <Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: (props) => (
          <CustomHeaderTitle title={"One Time List"} {...props} />
        ),
        headerRight: () => (
          <CustomHeaderIcon
            onPress={() => navigation.openDrawer()}
            iconName={"ios-menu"}
          />
        ),
        headerStyle: {
          backgroundColor: MAIN_COLOR,
          elevation: 0,
        },
        headerTintColor: "#FFFFFF",
      })}
    >
      <Screen name="Home" component={HomePage} />
      <Screen name="SingleList" component={SingleList} />
    </Navigator>
  );
});
