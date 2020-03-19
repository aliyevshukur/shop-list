import React, {Component} from 'react';
import Product from "../Product/Product";

class ProductList extends Component {
    render() {
        return (
            <ul className={'product-list'}>
                {this.props.products.map((product) => {
                    return <Product key={product.number}
                                    product={product}
                                    toggleModalWindow={this.props.toggleModalWindow}
                                    addFavorites={this.props.addFavorites}/>
                })}
            </ul>
        );
    }
}

export default ProductList;