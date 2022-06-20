import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView(props) {
    return(
        <div className="product-view">
            <h1 className="product-id">Product #{props.productId}</h1>
            <ProductCard showDescription="true" product={props.product} productId={props.productId}
            shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}></ProductCard>
        </div>
    )
}