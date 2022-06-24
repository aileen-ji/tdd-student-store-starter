import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView(props) {
    function findQuantity(){
        let index = props.shoppingCart.findIndex(el => el.itemId == props.productId)
        let quantity = index == -1? null : props.shoppingCart[index].quantity
        return quantity;
    }
    return(
        <div className="product-view">
            <h1 className="product-id">Product #{props.productId}</h1>
            <ProductCard showDescription="true" product={props.product} productId={props.productId} quantity={findQuantity()}
            shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}></ProductCard>
        </div>
    )
}