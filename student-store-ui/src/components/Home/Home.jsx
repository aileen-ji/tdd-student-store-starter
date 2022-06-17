import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react"


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

      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      shoppingCart={props.shoppingCart} setProducts={props.setProducts} filtered={props.filtered} setFiltered={props.setFiltered}/>
      <div className="about">
        <div id="texts">
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <img src="\src\assets\codepath.png" alt="codepath"></img>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <ul>
          <li>
            <span>Email:</span>
            <span>code@path.org</span>
          </li>
          <li>
            <span>Phone:</span>
            <span>1-800-CODEPATH</span>
          </li>
          <li>
            <span>Address:</span>
            <span>123 Fake Street, San Francisco, CA</span>
          </li>
          <li>
            <span>Socials:</span>
            <span></span>
          </li>
        </ul>
        <img src="\src\assets\pexels-shvets-production-7561704.jpg"alt="person typing on computer"></img>
      </div>
      <div className="Footer">
        <p>TODO Footer</p>
      </div>
    </div>
  )
}
