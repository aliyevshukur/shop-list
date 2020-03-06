import React, {Component} from 'react';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerText: '',
            isCrossIcon: false,
            mainText: '',
            buttons: [],
            showFirstModalWindow: false,
            showSecondModalWindow: false
        };
    }

    hideFirstModalWindow = (e) => {

        if (e.currentTarget.classList.contains('background')){
            if (e.target === e.currentTarget){
                console.log(e.target,e.currentTarget);
                this.setState(function (prevState, props) {
                    return {showFirstModalWindow: !prevState.showFirstModalWindow}
                });
            }
        }else{
            this.setState(function (prevState, props) {
                return {showFirstModalWindow: !prevState.showFirstModalWindow}
            });
        }
    };

    hideSecondModalWindow = (e) => {
      if (e.currentTarget.classList.contains('background')){
          if (e.target === e.currentTarget){
              this.setState(function (prevState, props) {
                  return {showSecondModalWindow: !prevState.showSecondModalWindow}
              });
          }
      }else{
          this.setState(function (prevState, props) {
              return {showSecondModalWindow: !prevState.showSecondModalWindow}
          });
      }
    };

    handleFirstButtonClick = () => {

        this.setState(function (prevState, props) {
            return {showFirstModalWindow: !prevState.showFirstModalWindow}
        });
        this.displayFirstModalWindow();
    };

    handleSecondButtonClick = () => {
        this.setState(function (prevState, props) {
            return {showSecondModalWindow: !prevState.showSecondModalWindow}
        });
        this.displaySecondModalWindow();
    };

    displayFirstModalWindow = () => {
        if (this.state.showFirstModalWindow) {

            const button1 = <Button
                bgColor='#b3382c'
                text='Ok'
                onClick={this.hideFirstModalWindow}
            />;

            const button2 = <Button
                bgColor='#b3382c'
                text='Cancel'
                onClick={this.hideFirstModalWindow}
            />;

            return (
                <Modal
                    headerText='Do you want to delete this file?'
                    isCrossIcon={true}
                    mainText='Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?'
                    buttons={[button1, button2]}
                    hideModalWindow={this.hideFirstModalWindow}
                />
            );
        }
    };

    displaySecondModalWindow = () => {
        if (this.state.showSecondModalWindow) {

            const button1 = <Button
                bgColor='#b3382c'
                text='Buy'
                onClick={this.hideSecondModalWindow}
            />;

            const button2 = <Button
                bgColor='#b3382c'
                text='Cancel'
                onClick={this.hideSecondModalWindow}
            />;

            return (
                <Modal
                    headerText='Confirm your purchase'
                    isCrossIcon={false}
                    mainText='If you proceed your credit card will be charged $43.00.'
                    buttons={[button1, button2]}
                    hideModalWindow={this.hideSecondModalWindow}

                />
            );
        }
    };

    render() {
        return (
            <div className={'container'}>
                <Button
                    bgColor='red'
                    text='Delete'
                    onClick={this.handleFirstButtonClick}
                />
                <Button
                    bgColor='blue'
                    text='Buy'
                    onClick={this.handleSecondButtonClick}
                />

                {this.displayFirstModalWindow()}
                {this.displaySecondModalWindow()}

            </div>
        );
    }
}

export default App;