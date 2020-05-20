import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class CustomHeaderIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Ionicons
          name={this.props.iconName}
          size={32}
          color={"#FFFFFF"}
          style={{ marginRight: 16 }}
        />
      </TouchableOpacity>
    );
  }
}
