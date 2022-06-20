import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
import ProductDetail from "../ProductDetail/ProductDetail"

function priceFormat(price){
    return "$"+price.toFixed(2)
}

export default function ProductCard(props) {
    let index = props.shoppingCart.findIndex(el => el.itemId == props.productId)
    const handleAdd = (event, id) => {
        props.handleAddItemToCart(id)
    }
    const handleRemove = (event, id) => {
        props.handleRemoveItemFromCart(id)
    }

  return (<div className="product-card">
    
    <div className="media">
        <Link to={`products/`+props.productId}><img src={props.product.image}></img></Link>
    </div>
    <p className="product-name">{props.product.name}</p>
    <p className="product-price">{priceFormat(props.product.price)}</p>
    <div className="buttons">
        <button className="remove" onClick={(e)=>{handleRemove(e, props.productId)}}><img src="\src\assets\icons8-minus-50.png"/></button>
        <p className="product-quantity">{index == -1? null:props.shoppingCart[index].quantity}</p>
        <button className="add" onClick={(e)=>{handleAdd(e, props.productId)}}><img src="\src\assets\icons8-plus-+-50.png"/></button>
    </div>
    {props.showDescription ? 
        <p className="product-description">{props.product.description}</p> 
        : null} 
  </div>)
}