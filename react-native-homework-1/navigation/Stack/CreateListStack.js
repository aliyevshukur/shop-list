import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateList } from "../../screens";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";
import { MAIN_COLOR } from "../../styles/colors";

const { Navigator, Screen } = createStackNavigator();

export const CreateListStack = () => (
  <Navigator
    screenOptions={({ navigation }) => ({
      headerTitle: (props) => (
        <CustomHeaderTitle
          title={"New List"}
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
    <Screen name="UserSettings" component={CreateList} />
  </Navigator>
);
