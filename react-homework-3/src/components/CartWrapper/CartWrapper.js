import React from "react";
import CartItem from "../CartItem/CartItem";

const CartWrapper = props => {

    return (
        <div className={"cart-wrapper"}>
            {props.cartItems
                ? props.cartItems.map((item, ind) => (
                    <CartItem
                        key={ind}
                        product={item}
                        toggleModalWindow={props.toggleModalWindow}
                    />
                ))
                : <h1>NO ITEMS</h1>}
        </div>
    );
};

export default CartWrapper;
