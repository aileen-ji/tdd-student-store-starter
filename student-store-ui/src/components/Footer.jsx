import * as React from "react"
import "./Home/Home.css"

export default function Footer() {
    return(

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
          <img src="\src\assets\google_play.27aab7c8.svg" alt="google play download link"></img>
          <img src="\src\assets\app_store.a7d8c549.svg" alt="app store download link"></img>
        </div>
      </div>
    )}