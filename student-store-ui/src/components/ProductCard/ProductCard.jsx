import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

function priceFormat(price){
    return "$"+price.toFixed(2)
}



export default function ProductCard(props) {
    let index = props.shoppingCart.findIndex(el => el.itemId == props.productId)
    const handleAdd = (event, id) => {
        props.handleAddItemToCart(id)
    }

  return (<div className="product-card">
    
    <div className="media">
        <Link to={`/products/`+props.id}><img src={props.image}></img></Link>
    </div>
    <p className="product-name">{props.name}</p>
    <p className="product-price">{priceFormat(props.price)}</p>
    <div className="buttons">
        <button className="add" onClick={(e)=>{handleAdd(e, props.productId)}}><img src="\src\assets\icons8-plus-+-50.png"/></button>
        <p className="product-quantity">{index == -1? 0:props.shoppingCart[index].quantity}</p>
        <button className="remove" onClick={()=>{props.handleRemoveItemFromCart(props.id)}}><img src="\src\assets\icons8-minus-50.png"/></button>
    </div>
    {props.showDescription ? 
        <p className="product-description">{props.description}</p> 
        : null} 
  </div>)
}