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
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy Now</li>
      </ul>
    </nav>
  )
}
