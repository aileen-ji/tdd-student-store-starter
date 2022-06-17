import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react"


export default function Home(props) {
  const [term, setTerm] = useState("");
  let arr = [...props.products]
  
  const handleChange = (e) => {
    
    props.setFiltered(arr)
    setTerm(e.target.value)
    console.log(e.target.value, term)
    props.setFiltered((arr)=>arr.filter((product)=>{return product.name.toLowerCase().includes(e.target.value)}))

  }

  return (
    <div className="home">
      <Hero />
      <div className="search-bar">
      <form >
            <div className="search" >
              <input id="search-input" type="text" value={term} placeholder="Type item name..." onChange={handleChange} required />
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
      <div className="footer">
        <div className="categories col">
          <h3>Categories</h3>
          <p>All Categories</p>
          <p>Clothing</p>
          <p>Food</p>
          <p>Accessories</p>
          <p>Tech</p>
        </div>
        <div className="company col">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Find a Store</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Careers</p>
        </div>
        <div className="support col">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Money Refund</p>
          <p>Order Status</p>
          <p>Shipping Info</p>
          <p>Open Dispute</p>
        </div>
        <div className="account col">
          <h3>Account</h3>
          <p>Login</p>
          <p>Register</p>
          <p>Account Settings</p>
          <p>My Orders</p>
        </div>
        <div className="socials col">
          <h3>Socials</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
        <div className="col">
          <h3>Our App</h3>
          <img src="\src\assets\google_play.27aab7c8.svg"></img>
          <img src="\src\assets\app_store.a7d8c549.svg"></img>
        </div>
      </div>
      <div className="credits">
        <p>icons from icons8. Images from pexel.</p>
      </div>
    </div>
  )
}
