import * as React from "react"

export default function ShoppingCart(props) {
    return (
      <div className="shopping-cart">
        {props.shoppingCart.map((item) => (
            <div>
                <p className="cart-product-name">name</p>
                <p className="cart-product-quantity">quantity</p>
            </div>
        ))}
      </div>
    )
  }