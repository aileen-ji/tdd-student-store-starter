import * as React from "react"

export default function ShoppingCart(props) {
    return (
      <div className="shopping-cart">
        {props.shoppingCart.map((item) => (
            <div>
                <p className="cart-product-name">ID: {item.itemId}</p>
                <p className="cart-product-quantity">Quantity: {item.quantity}</p>
            </div>
        ))}
      </div>
    )
  }