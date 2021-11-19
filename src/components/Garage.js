//displays div's representing an available item
//item price, 'Add To Cart' button, image || placeholder, item description
import React from "react";
import productData from "../data/productData";
// import formatPrice from "./helpers/formatPrice";

class Garage extends React.Component {
    constructor() {
        super();
        this.state = {
            garage: productData, 
        }
    }

    render() {
        return (
            <div className='products'>
                {this.state.garage.map((product) => (
                
                    <div className="product-card">
                        <h4>{product.name}</h4>
                        <div>Price: ${product.price.toFixed(2)}</div>
                        <br />
                        <button type="submit" onClick={() => this.handleSubmit(product)}>
                        Add To Cart
                        </button>
                        <br />
                        <img src={product.img} alt={product.name} />
                        <br />
                        <br />
                        <div>{product.description}</div>
                    </div>
                ))}
            </div> 
        )
    }
    
}

export default Garage;