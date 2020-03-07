import React, {Component} from 'react';
import './ModalWindow.scss';
import Cross from '../../img/cross.png';
import PropTypes from 'prop-types';


class ModalWindow extends Component {

    render() {
        return (
            <div className={'background'} onClick={this.props.hideModalWindow}>
                <div className="modal-window">
                    <div className={'header'}>
                        {this.props.headerText}

                        {/*Show close button conditionally*/}
                        {this.props.isCrossIcon ? <button className={'close'} onClick={this.props.hideModalWindow}>
                            <img src={Cross} alt="cross"/>
                        </button> : null}

                    </div>
                    <div className="body-container">
                        <div className="main-text-container"><p className={'main-text'}>{this.props.mainText}</p></div>
                        <div className="button-container">{[...this.props.actions]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ModalWindow.propTypes = {
    headerText: PropTypes.string,
    isCrossIcon: PropTypes.bool,
    mainText: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.element),
    hideModalWindow: PropTypes.func,
};

export default ModalWindow;