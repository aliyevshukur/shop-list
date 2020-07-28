import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { UserSettings, CreateList } from "../screens";
import { HomeStack } from "./Stack/HomeStack";
import { UserSettingsStack } from "./Stack/UserSettingsStack";
import { CustomDrawer } from "../commons/CustomDrawer";
import { MAIN_COLOR } from "../styles/colors";
import { CreateListStack } from "./Stack/CreateListStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootNav = () => (
  <NavigationContainer>
    <Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Screen
        name="Homepage"
        component={HomeStack}
      />
      <Screen name="CreateList" component={CreateListStack} />
      <Screen name="UserSettings" component={UserSettingsStack} />
    </Navigator>
  </NavigationContainer>
);
