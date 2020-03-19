import React, {Component} from "react";

class Product extends Component {
    constructor(props) {
        super(props);

        this.url = require(`../../../public/img/${this.props.product.path}`);

        this.state = {
            url: this.url,
            isStarOn: false,
            starClass: "grey"
        };
        this.star = React.createRef();
    }

    handleClick = () => {
        this.props.addFavorites(this.props.product.number);
        this.setState(prevState => {
            if (!this.state.isStarOn) {
                this.star.current.style.color = "#f7e40a";
            } else {
                this.star.current.style.color = "#7d7d7d";

                console.log("aaa");
            }
            return {...prevState, isStarOn: !prevState.isStarOn};
        });
    };

    render() {
        return (
            <li className={"product-list-item"}>
                <div className="image-wrapper">
                    <img className={"image"} src={this.state.url} alt="Product"/>
                </div>
                <div className="description">
                    <div className={"name-and-star"}>
                        <div className={"name-wrapper"}>
                            <p className={"name"}>{this.props.product.name}</p>
                        </div>
                        <button className={"star"} onClick={this.handleClick}>
                            <div className={"icon-wrapper"}>
                                <i ref={this.star} className={"fas fa-star fa-sm"}>
                                    {" "}
                                </i>
                            </div>
                        </button>
                    </div>
                    <p className={"desc-text"}>
                        Lorem ipsum dolor sit amet, con adipiscing elit, sed diam nonu.{" "}
                    </p>
                    <div className="price-and-add-button">
                        <p className={"price"}>${this.props.product.price}</p>
                        <button className={"add-card-button"}
                                onClick={event => {
                                    this.props.toggleModalWindow(event, 1, this.props.product);
                                }}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;
