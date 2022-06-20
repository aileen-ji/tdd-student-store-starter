import * as React from "react"
import "./ProductGrid/ProductGrid.css"

export default function CategoryFilter(props) {

const handleButton = (cat) => {
    props.setFiltered(props.products)
    props.setConstFiltered(props.products)
    if(cat == ""){
        return
    }
    props.setFiltered((filtered)=>filtered.filter((item)=>{return item.category == cat}))
    props.setConstFiltered((filtered)=>filtered.filter((item)=>{return item.category == cat}))
}
  return (
    <div className="filter-bar" id="buy">
        <button onClick={(e)=>{handleButton("")}}>All Categories</button>
        <button onClick={(e)=>{handleButton("clothing")}}>Clothing</button>
        <button onClick={(e)=>{handleButton("food")}}>Food</button>
        <button onClick={(e)=>{handleButton("accessories")}}>Accessories</button>
        <button onClick={(e)=>{handleButton("tech")}}>Tech</button>
    </div>
    )
}