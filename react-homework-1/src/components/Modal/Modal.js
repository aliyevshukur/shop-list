import React, {Component} from 'react';
import './Modal.css';
import Cross from '../../img/cross.png'

class Modal extends Component {

    displayCrossButton = () => {
        if (this.props.isCrossIcon) {
            return <button className={'close'} onClick={this.props.hideModalWindow} ><img src={Cross} alt="cross"/></button>
        }
    };

    render() {
        return (
            <div className={'background'} onClick={this.props.hideModalWindow}>
                <div className="modal-window">
                    <div className={'header'}>{this.props.headerText} {this.displayCrossButton()}</div>
                    <div className="body-container">
                        <div className="main-text-container"><p className={'main-text'}>{this.props.mainText}</p></div>
                        <div className="button-container">{[...this.props.buttons]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;