//tracks items added to cart in bullet points, subtotal, tax and total cost
import React from 'react';
import App from '../App';
import productData from '../data/productData';
import formatPrice from '../helpers/formatPrice';

class Cart extends React.Component {
  render() {
    let subtotal = this.props.cart.reduce((total, product) => total + product.price, 0)
    return (
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {this.props.cart.map((product, i) => (
            <li>
              {product.name}: ${product.price}{" "}
              <a
                href="#"
                type="submit"
                onClick={() => this.props.remove(i)}
              >
                remove
              </a>
            </li>
          ))}
        </ul>
        <h3>Subtotal: {formatPrice(subtotal)}</h3>
        <h3>Tax: {formatPrice(subtotal * 0.05)}</h3>
        <h3>Total: {formatPrice(subtotal * 1.05)}</h3>
      </div>
    );
  }
}

export default Cart;