import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props){
    return(
        <div className="checkout-form">
            <input type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} onChange={props.handleOnCheckoutFormChange} required></input>
            <input type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} onChange={props.handleOnCheckoutFormChange} required></input>
            <button onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
            {props.success ? (<><p className="success">Success!</p>
            <div className="receipt">
                
                <ul>
                    <li id="header">Receipt</li>
                    {props.receipt.map((item) => (<li>{item}</li>))}
                </ul>
            </div></>) : 
            props.error == null ? null : (<p className="error">There was an error with your purchase.</p>)}
        </div>
    )
}