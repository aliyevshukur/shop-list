import React, { Component } from "react";
import Button from "./components/Button/Button";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalWindows: [null, false, false]
    };
  }

  // Show and hide modal window
  toggleModalWindow = (e, id) => {
    // Check if background clicked
    if (e.currentTarget.classList.contains("background")) {
      //Prevent click on modal window except background
      if (e.currentTarget === e.target) {
        let modalWindows = [...this.state.modalWindows];
        modalWindows[id] = !modalWindows[id];
        this.setState({ modalWindows });
      }
    } else {
      //Toggle window on button click
      let modalWindows = [...this.state.modalWindows];
      modalWindows[id] = !modalWindows[id];
      this.setState({ modalWindows });
    }
  };

  render() {
    return (
      <div className={"container"}>
        <Button
          bgColor="red"
          text="Delete"
          onClick={event => {
            this.toggleModalWindow(event, 1);
          }}
        />

        <Button
          bgColor="blue"
          text="Buy"
          onClick={event => {
            this.toggleModalWindow(event, 2);
          }}
        />

        {/*ModalWindow Windows*/}
        {this.state.modalWindows[1] ? (
          <ModalWindow
            headerText={"Do you want to delete this file?"}
            isCrossIcon={true}
            mainText={
              "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?"
            }
            actions={[
              <Button
                bgColor="#b3382c"
                text="Delete"
                onClick={event => {
                  this.toggleModalWindow(event, 1);
                }}
              />,
              <Button
                bgColor="#b3382c"
                text="Cancel"
                onClick={event => {
                  this.toggleModalWindow(event, 1);
                }}
              />
            ]}
            hideModalWindow={event => {
              this.toggleModalWindow(event, 1);
            }}
          />
        ) : null}

        {this.state.modalWindows[2] ? (
          <ModalWindow
            headerText={"Confirm your purchase"}
            isCrossIcon={true}
            mainText={"If you proceed your credit card will be charged $43.00."}
            actions={[
              <Button
                bgColor="#b3382c"
                text="Buy"
                onClick={event => {
                  this.toggleModalWindow(event, 2);
                }}
              />,
              <Button
                bgColor="#b3382c"
                text="Cancel"
                onClick={event => {
                  this.toggleModalWindow(event, 2);
                }}
              />
            ]}
            hideModalWindow={event => {
              this.toggleModalWindow(event, 2);
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
