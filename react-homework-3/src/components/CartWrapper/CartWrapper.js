import React, {useState} from "react";
import CartItem from "../CartItem/CartItem";

const Cart = props => {
    const [cartItems] = useState(props.cartItems);

    return (
        <div className={"cart-wrapper"}>
            {cartItems
                ? cartItems.map((item, ind) => (
                    <CartItem
                        key={ind}
                        product={item}
                        toggleModalWindow={props.toggleModalWindow}
                    />
                ))
                : null}
        </div>
    );
};

export default Cart;
