import * as React from "react"

export default function CheckoutForm(props){
   
    return(
        <div className="checkout-form">
            <input type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} onChange={props.handleOnCheckoutFormChange}></input>
            <input type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} onChange={props.handleOnCheckoutFormChange}></input>
            <button onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
            {props.success ? (<p className="success">Success!</p>) : 
            (<p className="error">Error</p>)}
        </div>
    )
}