import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import "./App.scss";
import ProductList from "./components/ProductList/ProductList";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Button from "./components/Button/Button";
import CartWrapper from "./components/CartWrapper/CartWrapper";
import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";

const App = () => {
    const [productsList, setProductsList] = useState([]);
    const [modalWindows, setModalWindows] = useState([null, false, false]);
    const [selectedProductToAdd, setSelectedProductToAdd] = useState(null);
    const [selectedProductToDelete, setSelectedProductToDelete] = useState(null);
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart"))
    );

    const buildProductList = data => {
        const productsList = [...data];
        setProductsList(productsList);
    };

    useEffect(() => {
        localStorage.clear();
        let url = "products.json";

        fetch(url)
            .then(response => response.json())
            .then(buildProductList)
            .catch();

        localStorage.setItem("favorites", JSON.stringify([]));
    }, []);

    const toggleModalWindow = (e, id, selectedProductToAdd, selectedProductToDelete) => {
        // Check if background clicked
        if (e.currentTarget.classList.contains("modal-background")) {
            if (e.currentTarget === e.target) {
                let modal = [...modalWindows];
                modal[id] = !modal[id];
                setModalWindows(modal);
            }
        } else {
            //Toggle window on button click
            let modal = [...modalWindows];
            modal[id] = !modal[id];
            setModalWindows(modal);
        }

        if (selectedProductToAdd) {
            setSelectedProductToAdd(selectedProductToAdd);
        }

        if (selectedProductToDelete) {
            setSelectedProductToDelete(selectedProductToDelete);
        }
    };

    const addCart = (event) => {
        toggleModalWindow(event, 1);

        let cart = JSON.parse(localStorage.getItem("cart"));

        if (!cart) {
            cart = [];
        }

        let isUnique = true;

            cart.forEach((item) => {
            if (item.number === selectedProductToAdd.number) {
                isUnique = false;
            }
        });

        if (isUnique) {
            cart.push(selectedProductToAdd);
            localStorage.setItem("cart", JSON.stringify(cart));
            setCartItems(cart);
        }
    };

    const deleteCardItem = (event) => {
        toggleModalWindow(event, 2);

        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = cart.filter(cart => cart.number !== selectedProductToDelete.number);

        console.log(cartItems);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCartItems(JSON.parse(localStorage.getItem("cart")));

    };

    const addFavorites = id => {
        let favorites = JSON.parse(localStorage.getItem("favorites")),
            favProduct = productsList.filter(product => product.number === id);

        favorites.push(favProduct[0]);
    };

    const loadingProductList = () => {
        return (
            <ProductList
                toggleModalWindow={toggleModalWindow}
                products={productsList}
                addFavorites={addFavorites}
            />
        );
    };

    const loadingCartItems = () => {
        return <CartWrapper cartItems={cartItems} toggleModalWindow={toggleModalWindow}/>;
    };

    return (
        <div className={"background"}>
            <Header/>

            <Route exact path={"/"} render={loadingProductList}/>
            <Route path={"/cart"} render={loadingCartItems}/>
            <Route path={"/favorites"} component={Favorites}/>

            {modalWindows[1] ? (
                <ModalWindow
                    color={"rgb(255,255,255)"}
                    headerText={"You are going to add a item to card"}
                    isCrossIcon={true}
                    mainText={"Are sure you want to continue?"}
                    actions={[
                        <Button
                            key={1}
                            bgColor="black"
                            text="Add"
                            onClick={event => {
                                addCart(event);
                            }}
                        />,
                        <Button
                            key={2}
                            bgColor="black"
                            text="Cancel"
                            onClick={event => {
                                toggleModalWindow(event, 1);
                            }}
                        />
                    ]}
                    hideModalWindow={event => {
                        toggleModalWindow(event, 1);
                    }}
                />
            ) : null}

            {modalWindows[2] ? (
                <ModalWindow
                    color={"rgb(255,255,255)"}
                    headerText={"You are going to delete a item from cart"}
                    isCrossIcon={true}
                    mainText={"Are sure you want to continue?"}
                    actions={[
                        <Button
                            key={1}
                            bgColor="black"
                            text="Delete"
                            onClick={event => {
                                deleteCardItem(event, selectedProductToDelete);
                            }}
                        />,
                        <Button
                            key={2}
                            bgColor="black"
                            text="Cancel"
                            onClick={event => {
                                toggleModalWindow(event, 2);
                            }}
                        />
                    ]}
                    hideModalWindow={event => {
                        toggleModalWindow(event, 2);
                    }}
                />
            ) : null}
        </div>
    );
};

export default App;
