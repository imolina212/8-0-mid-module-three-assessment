//tracks items added to cart in bullet points, subtotal, tax and total cost
import React from 'react';
import App from '../App';
import productData from '../data/productData';
import formatPrice from '../helpers/formatPrice';

class Cart extends React.Component {
  // const { name , price , description, img } = this.state;
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      subtotal: 0,
      tax: 0,
      total: 0,
    };
  }

  render() {
    let subtotal = this.props.cart.reduce((total, product) => total + product.price, 0)
    return (
      <div className="right">
        <h3>Cart</h3>
        <ul>
          {this.props.cart.map((product) => (
            <li>
              {product.name}: ${product.price}
            </li>
          ))}
        </ul>
        <h3>Subtotal: {formatPrice(subtotal)}</h3>
        <h3>Tax: {formatPrice(subtotal * .05)}</h3>
        <h3>Total: {formatPrice(subtotal * 1.05)}</h3>
      </div>
    );
  }
}

export default Cart;