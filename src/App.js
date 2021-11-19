import React from "react";
import "./App.css";
import Garage from "./components/Garage"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import productData from "./data/productData"
// import formatPrice from "./helpers/formatPrice";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      name: '',
      price: 0,
      description: '',
      img: null,

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
          name={this.state.name}
          price={this.state.price}
          description={this.state.description}
          img={this.state.img}
          addToCart={this.addToCart}
        />
        <Cart 
          cart={this.state.cart}
          />
        <Checkout />
      </body>
    );
  }
};

export default App;
