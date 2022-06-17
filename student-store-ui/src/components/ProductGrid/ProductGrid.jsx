import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  return (
  <div className="product-grid">
    {props.products.map((product) => {return(
        <ProductCard key={product.name} name={product.name} price={product.price} image={product.image} description={product.description} 
        productId={product.id} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}
        showDescription={false} shoppingCart={props.shoppingCart}
        />
    )})} 
  </div>)
}