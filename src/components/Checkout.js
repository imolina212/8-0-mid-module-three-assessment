import React from "react";


class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: '',
        }
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { zipCode , creditCard , firstName , lastName , email} = this.state;

        if (zipCode.length != 5 || isNaN(zipCode)) {
            window.alert('Zip code is not valid')
            return;
        }
        if (creditCard.length != 16 || isNaN(creditCard)) {
            window.alert('Credit card number is not valid')
            return;
        }
        if (firstName.length === 0) {
            window.alert('Input is not valid')
            return;
        }
        if (lastName.length === 0) {
            window.alert('Input is not valid')
            return;
        }
        if (email.length === 0) {
            window.alert('Email is not valid')
            return;
        }

        window.alert('Purchase complete' + ` $${this.props.total}`)
    }

    render() {
        return (
            <div>
                <h3>Checkout</h3>
                <form id="checkout" onSubmit={this.handleSubmit}>
                    <label>
                        First Name
                        <input 
                            type="text" 
                            placeholder='First Name'
                            name='firstName'
                            value={this.state.firstName}
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Last Name
                        <input 
                            type="text" 
                            placeholder='Last Name'
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email
                        <input 
                            type="text" 
                            placeholder='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Credit Card
                        <input 
                            type="text" 
                            placeholder='Credit Card'
                            name='creditCard'
                            value={this.state.creditCard}
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Zip Code
                        <input 
                            type="text" 
                            placeholder='Zip Code'
                            name='zipCode'
                            value={this.state.zipCode}
                            onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Buy Now</button>
                </form>
            </div>
        )
    }
}

export default Checkout;