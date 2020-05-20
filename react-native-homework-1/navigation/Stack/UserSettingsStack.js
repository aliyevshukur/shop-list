import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserSettings } from "../../screens";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { MAIN_COLOR } from "../../styles/colors";

const { Navigator, Screen } = createStackNavigator();

export const UserSettingsStack = () => (
  <Navigator
    screenOptions={({ navigation }) => ({
      headerTitle: (props) => (
        <CustomHeaderTitle
          title={"User Settings"}
          navigation={navigation}
          {...props}
        />
      ),
      headerStyle: {
        backgroundColor: MAIN_COLOR,
        elevation: 0,
      },
    })}
  >
    <Screen name="UserSettings" component={UserSettings} />
  </Navigator>
);
