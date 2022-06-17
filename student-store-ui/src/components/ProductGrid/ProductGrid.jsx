import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState } from "react"

export default function ProductGrid(props) {

const handleButton = (cat) => {
    props.setFiltered(props.products)
    if(cat == ""){
        return
    }
    props.setFiltered((filtered)=>filtered.filter((item)=>{return item.category == cat}))
    console.log(props.products)
}
  return (
  <div className="product-grid">
    <div className="filter-bar">
    <button onClick={(e)=>{handleButton("")}}>All Categories</button>
    <button onClick={(e)=>{handleButton("clothing")}}>Clothing</button>
    <button onClick={(e)=>{handleButton("food")}}>Food</button>
    <button onClick={(e)=>{handleButton("accessories")}}>Accessories</button>
    <button onClick={(e)=>{handleButton("tech")}}>Tech</button>
    </div>
    <div className="grid">
    {props.filtered.map((product) => {return(
        <ProductCard key={product.name} name={product.name} price={product.price} image={product.image} description={product.description} 
        productId={product.id} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        showDescription={false} shoppingCart={props.shoppingCart}
        />
    )})} 
    </div>
  </div>)
}