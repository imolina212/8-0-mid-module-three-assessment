//needs form
//first name, last name, email, cc, zip code, 'Buy Now' button
const Checkout = () => {
    return (
        <div>
            <h3>Checkout</h3>
            <form id="checkout">
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Credit Card</label>
                <input type="text"></input>
                <label>Zip Code</label>
                <input type="text"></input>
                <button type="submit">Buy Now</button>
            </form>
        </div>
    )
}

export default Checkout;