import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"


export default function Home(props) {
  
  return (
    <div className="home">
      <Hero />
      <div className="search-bar">
      <form>
            <div className="search">
              <input id="search-input" type="text" placeholder="Search for an item..." required/>
              <button id="search-btn"><img src="\src\assets\icons8-search-50.png" alt="search icon by icons8"/></button>
            </div>
        </form>
      </div>
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}
      shoppingCart={props.shoppingCart}/>
    </div>
  )
}
