import React from "react";
import { View, StyleSheet } from "react-native";
import { MAIN_COLOR } from "../styles/colors";

class AppLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
});

export default AppLayout;
