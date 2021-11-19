import React from "react";
import "./App.css";
import Garage from "./components/Garage"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import productData from "./data/productData"
import formatPrice from "./helpers/formatPrice";
// import formatPrice from "./helpers/formatPrice";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],

    }
  }

  addToCart = (product) => {
    let updatedCart = [...this.state.cart]
    updatedCart.push(product)
    this.setState({
      cart: updatedCart,
    })
  }

  render() {
    return (
      <body className='App'>
        <h1>Isidro's Garage Sale</h1>
        <Garage
          addToCart={this.addToCart}
        />
        <Cart 
          cart={this.state.cart}
          />
        <Checkout total={formatPrice(this.state.cart.reduce((total, product) => total + product.price, 0) * 1.05)}/>
      </body>
    );
  }
};

export default App;
