import React, {Component} from 'react';
import './ModalWindow.scss';
import Cross from '../../img/cross.png';
import PropTypes from 'prop-types';


class ModalWindow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bgColor: this.props.color
        };

        this.modalBody = React.createRef();
        this.modalHeader = React.createRef();
    }

    componentDidMount() {
        //Set color of body
        this.modalBody.current.style.backgroundColor = this.state.bgColor;

        //Add second color to header relative to body color
        let secondColor = this.state.bgColor.slice(4, 15);
        let arr = secondColor.split(',');
        arr = arr.map(el => parseInt(el) - 70);
        secondColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
        this.modalHeader.current.style.backgroundColor = secondColor;
    }

    render() {
        return (
            <div className={'modal-background'} onClick={this.props.hideModalWindow}>
                <div className="modal-window">
                    <div ref={this.modalHeader} className={'header'}>
                        {this.props.headerText}

                        {/*Show close button conditionally*/}
                        {this.props.isCrossIcon ? <button className={'close'} onClick={this.props.hideModalWindow}>
                            <img src={Cross} alt="cross"/>
                        </button> : null}

                    </div>
                    <div ref={this.modalBody} className="body-container">
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