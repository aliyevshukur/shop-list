import React, {Component} from "react";
import './App.scss'
import ProductList from "./components/ProductList'/ProductList";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Button from "./components/Button/Button";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: [],
            modalWindows: [null, false, false],
            selectedProduct: null

        }
    }

    buildProductList = (data) => {
        const productsList = data;

        this.setState({productsList});
    };

    componentDidMount() {
        localStorage.clear();
        let url = 'products.json';

        fetch(url)
            .then(response => response.json())
            .then(this.buildProductList)
            .catch();

        localStorage.setItem('favorites', JSON.stringify([]));

    }

    // Show and hide modal window
    toggleModalWindow = (e, id, selectedProduct) => {
        // Check if background clicked
        if (e.target.classList.contains('modal-background')) {
            //Prevent click on modal window except background

                let modalWindows = [...this.state.modalWindows];
                modalWindows[id] = !modalWindows[id];
                this.setState({modalWindows});

        } else {
            //Toggle window on button click
            let modalWindows = [...this.state.modalWindows];
            modalWindows[id] = !modalWindows[id];
            this.setState({modalWindows});
        }

        if (selectedProduct) {
            this.setState({selectedProduct: selectedProduct});
        }


    };

    handleClick(event, productId) {
        this.toggleModalWindow(event, 1);

        if (productId) {
            let card = JSON.parse(localStorage.getItem('card'));
            if (card) {
                if (!card.includes(productId)) {
                    let selectedProduct = this.state.productsList
                        .filter(product => product.number === productId);
                    if (selectedProduct) {
                        card.push(selectedProduct);
                        localStorage.setItem('card', JSON.stringify(card));
                    }
                }
                console.log(JSON.parse(localStorage.getItem('card')));
            } else {
                card = [];
                let selectedProduct = this.state.productsList
                    .filter(product => product.number === productId);
                card.push(selectedProduct);
                localStorage.setItem('card', JSON.stringify(card));
                console.log(JSON.parse(localStorage.getItem('card')));
            }
        }
    }

    addFavorites = (id)=>{
        console.log('favs before',JSON.parse(localStorage.getItem('favorites')));
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        console.log('favs after',favorites);


        if (favorites) {
            let favProduct = this.state.productsList.filter(product => product.number === id);
            if (!this.state.productsList.includes(favProduct)) {
                favorites.push(favProduct[0]);
                localStorage.setItem('favorites', JSON.stringify(favProduct));
            }
        }
        // }else{
        //     favorites = [];
        //     let favProduct = [...this.state.productsList.filter(product => product.number === id)];
        //     favorites.push(favProduct[0]);
        //     localStorage.setItem('favorites', JSON.stringify(favProduct));
        // }
    };

    render() {
        return (

            <div className={'background'}>

                <ProductList toggleModalWindow={this.toggleModalWindow}
                             products={this.state.productsList}
                             addFavorites={this.addFavorites}/>


                {this.state.modalWindows[1] ? (

                    <ModalWindow
                        color={'rgb(255,255,255)'}
                        headerText={"You are going to add a item to card"}
                        isCrossIcon={true}
                        mainText={
                            "Are sure you want to continue?"
                        }
                        actions={[
                            <Button
                                bgColor="black"
                                text="Add"
                                onClick={event => {
                                    this.handleClick(event, this.state.selectedProduct)
                                }}
                            />,
                            <Button
                                bgColor="black"
                                text="Cancel"
                                onClick={event => {
                                    this.toggleModalWindow(event, 1);
                                }}
                            />
                        ]}
                        hideModalWindow={event => {
                            this.toggleModalWindow(event, 1);
                        }}
                    />
                ) : null}

            </div>
        );
    }
}

export default App;
