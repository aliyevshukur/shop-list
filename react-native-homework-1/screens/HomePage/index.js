import React from "react";
import { connect } from "react-redux";

import { getSections, getCurrentSection, setCurrentList } from "../../store/lists";
import { ListLink } from "./components/ListLink";
import AppLayout from "../../commons/AppLayout";
import { CustomHeaderTitle } from "../../commons/CustomHeaderTitle";


const mapStateToProps = (state) => ({
  sections: getSections(state),
  currentSection: getCurrentSection(state),
});

export const HomePage = connect(mapStateToProps, { setCurrentList })(
  (props) => {
    const { sections, currentSection, setCurrentList, navigation } = props;

    navigation.setOptions({
      headerTitle: () => (
        <CustomHeaderTitle title={currentSection === "regular" ? "Regular List" : "One Time List"} />
      ),
    });

    const handlePress = (list) => {
      navigation.navigate("SingleList");
      setCurrentList({list});
    };

    return (
      <AppLayout>
        {sections[currentSection].map((list) => (
          <ListLink list={list} key={list.id} handleOnPress={handlePress} />
        ))}
      </AppLayout>
    );
  }
);
