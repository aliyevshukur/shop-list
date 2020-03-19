import React from 'react';
import Product from "../Product/Product";

const ProductList = (props) => {

    return (
        <ul className={'product-list'}>
            {props.products ? props.products.map((product) => {
                return <Product key={product.number}
                                product={product}
                                toggleModalWindow={props.toggleModalWindow}
                                addFavorites={props.addFavorites}
                                deleteFavorites={props.deleteFavorites}
                />
            }) : <h1>NO ITEMS</h1>}
        </ul>
    );
};

export default ProductList;