import React, {useState} from "react";

const CartItem = props => {
    const imageUrl = require(`../../../public/img/${props.product.path}`);

    const [url, setUrl] = useState(imageUrl);

    return (
        <li className={"cart-list-item"}>
            <div className="image-and-desc-wrapper">

                    <img className={"image"} src={imageUrl} alt="Product"/>


                <div className="description">
                    <p className={"name"}>{props.product.name}</p>

                    <p className={"desc-text"}>
                        Lorem ipsum dolor sit amet, con adipiscing elit, sed diam nonu.{" "}
                    </p>
                    <p className={"price"}>${props.product.price}</p>
                </div>
            </div>

            <button
                className={"add-card-button"}
                onClick={event => {
                    props.toggleModalWindow(event, 2, null, props.product);
                }}
            >
                X
            </button>
        </li>
    );
};

export default CartItem;
