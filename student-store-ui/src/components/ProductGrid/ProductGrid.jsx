import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState } from "react"
import CategoryFilter from "../CategoryFilter"
import NotFound from "../NotFound/NotFound"

export default function ProductGrid(props) {

  if(props.filtered.length == 0){
    return <NotFound/>
  }
  else{
  return (
  <div className="product-grid">
    
    <div className="grid">
    {props.filtered.map((product) => {return(
        <ProductCard key={product.name} product={product}
        productId={product.id} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        showDescription={false} shoppingCart={props.shoppingCart}
        />
    )})} 
    </div>
  </div>)
}}