import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={props.handleOnToggle}><img src="\src\assets\icons8-plus-+-128.png" alt="expand sidebar"/></button>
      
      {props.isOpen ?
      <div className="bar">
        <p id="cart">Shopping Cart</p>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/> 
        <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} 
        handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        success={props.success} error={props.error} receipt={props.receipt}/>
        </div>
        : null
      }
    </section>
  )
}
