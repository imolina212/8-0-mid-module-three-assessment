import React from "react";
import productData from "../data/productData";

class Garage extends React.Component {
    render() {
        return (
            <>
                <h1>Isidro's Garage Sale</h1>
                <div className='products'>
                    {productData.map((product) => (
                        <div className="product-card">
                            <h4>{product.name}</h4>
                            <div>Price: ${product.price.toFixed(2)}</div>
                            <button 
                                type="submit" 
                                onClick={() => this.props.addToCart(product)}
                            >
                                Add To Cart
                            </button>
                            <img src={product.img} alt={product.name} />
                            <div>{product.description}</div>
                        </div>
                    ))}
                </div> 
            </>
        )
    }
    
}

export default Garage;