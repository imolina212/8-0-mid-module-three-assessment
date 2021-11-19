//tracks items added to cart in bullet points, subtotal, tax and total cost
import React from 'react';
import App from '../App';

class Cart extends React.Component {
    // const { name , price , description, img } = this.state;
    constructor() {
        super()
        this.state = {
            cart: [],
            name: '',
            price: 0,
            subtotal: 0,
            tax: 0,
            total: 0,
        }
    }
    render() {
        return(
            <div className="right">
                <h3>Cart</h3>
                <ul>
                    <li>{this.props.name} : {this.props.price}</li>
                </ul>
                <h3>Subtotal: {this.props.subtotal}</h3>
                <h3>Tax: {this.props.tax}</h3>
                <h3>Total: {this.props.total}</h3>
            </div>
        )
    }
    
}

export default Cart;