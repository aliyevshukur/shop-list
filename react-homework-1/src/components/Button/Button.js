import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: this.props.bgColor
        };

        this.bgColor = React.createRef();
    }

    componentDidMount() {
        this.bgColor.current.style.backgroundColor = this.state.backgroundColor;
    }

    render() {

        return (
            <div>
                <button ref={this.bgColor} onClick={this.props.onClick} className={'btn'}>
                    {this.props.text}
                </button>
            </div>
        );

    }

}

export default Button;