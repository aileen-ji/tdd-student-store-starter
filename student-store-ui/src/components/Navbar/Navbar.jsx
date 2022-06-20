import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Logo/>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><a href="../#about">About Us</a></li>
        <li><a href="../#contact">Contact Us</a></li>
        <li><a href="../#buy">Buy Now</a></li>
      </ul>
    </nav>
  )
}
