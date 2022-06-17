import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo(props) {
  return (<div className="logo">
    <Link to={`/`}><img src="\src\assets\icons8-isaac-newton-48.png"></img></Link>
  </div>)
}