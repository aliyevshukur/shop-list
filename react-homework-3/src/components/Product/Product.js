import React, {useEffect} from "react";

const Product = (props) => {
    const url = require(`../../../public/img/${props.product.path}`);
    const star = React.createRef();

    useEffect(() => {
        if (!isFavorite()) {
            star.current.style.color = "#7d7d7d";
        } else {
            star.current.style.color = "#f7e40a";
        }
    });

    const isFavorite = () => {
        const products = JSON.parse(localStorage.getItem('favorites'))    ;
        let isFav = false;
        products.forEach((prod) => {
           if (prod.number === props.product.number){
               isFav = true;
           }
        });

        return isFav;
    };


    const handleClick = () => {

        if (isFavorite()) {
            star.current.style.color = "#7d7d7d";
            props.deleteFavorites(props.product.number);
        } else {
            star.current.style.color = "#f7e40a";
            props.addFavorites(props.product.number);
        }
    };

    return (
        <li className={"product-list-item"}>
            <div className="image-wrapper">
                <img className={"image"} src={url} alt="Product"/>
            </div>
            <div className="description">
                <div className={"name-and-star"}>
                    <div className={"name-wrapper"}>
                        <p className={"name"}>{props.product.name}</p>
                    </div>
                    <button className={"star"} onClick={handleClick}>
                        <div className={"icon-wrapper"}>
                            <i ref={star} className={"fas fa-star fa-sm"}>
                                {" "}
                            </i>
                        </div>
                    </button>
                </div>
                <p className={"desc-text"}>
                    Lorem ipsum dolor sit amet, con adipiscing elit, sed diam nonu.{" "}
                </p>
                <div className="price-and-add-button">
                    <p className={"price"}>${props.product.price}</p>
                    <button className={"add-card-button"}
                            onClick={event => {
                                props.toggleModalWindow(event, 1, props.product);
                            }}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Product;
