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
      list: productData,
      name: '',
      price: 0,
      description: '',
      img: null,

    }
  }

  handleSubmit = () => {
    this.setState({
      cart: '', 
      subtotal: 0,
      tax: 0,
      total: 0,
    })
  }

  render() {
    return (
      <body>
        <h1>Isidro's Garage Sale</h1>
        <Garage
          name={this.state.name}
          price={this.state.price}
          description={this.state.description}
          img={this.state.img}
        />
        <Cart 
          name/>
        <Checkout />
      </body>
    );
  }
};

export default App;
