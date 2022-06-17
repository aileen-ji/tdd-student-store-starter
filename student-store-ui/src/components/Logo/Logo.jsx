import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo(props) {
  return (<div className="logo">
    <Link to={`/`}><img src="\src\assets\logo.png"></img></Link>
  </div>)
}