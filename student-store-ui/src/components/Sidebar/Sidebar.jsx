import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={props.handleOnToggle}><img src="\src\assets\icons8-plus-+-128.png" alt="expand sidebar"/></button>
      
      {props.isOpen ?
      <div className="bar">
        <p>Sidebar</p>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/> 
        </div>
        : null
      }
    </section>
  )
}
