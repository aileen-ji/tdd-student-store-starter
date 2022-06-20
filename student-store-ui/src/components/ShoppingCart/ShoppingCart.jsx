import * as React from "react"
import "./ShoppingCart.css"

function priceFormat(price){
  return "$"+price.toFixed(2)
}

export default function ShoppingCart(props) {
  console.log(props)
  let total = 0

  const addSubtotal = (amt) => {
    total += amt
  }

  if(props.shoppingCart.length != 0){
    return (
      <div className="shopping-cart">
        {props.shoppingCart.map((item) => (
            <div className="cart-item">
                <p className="cart-product-name">{props.products[item.itemId - 1].name}</p>
                <p className="cart-product-quantity">{item.quantity}</p>
                <p>{priceFormat(props.products[item.itemId - 1].price)}</p>
                {addSubtotal(item.quantity * props.products[item.itemId - 1].price)}
            </div>
        ))}
        <div className="money">
          <p>Subtotal:</p>
          <p className="subtotal">${total}</p>
          <p>Taxes and Fees:</p>
          <p>{priceFormat(total * 0.0875)}</p>
          <p>Total</p>
          <p className="total-price">{priceFormat(total * 1.0875)}</p>
        </div> 
     </div>
    )
  }

else{
  return (
    <p className="notification">No items added to cart yet. Start shopping now!</p>
  )
}
}