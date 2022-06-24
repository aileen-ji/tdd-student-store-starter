import * as React from "react"
import { useState } from "react"
import "./Home/Home.css"



export default function SearchBar(props) {
    const [term, setTerm] = useState("");
    let arr = [...props.filtered]
    const org = props.products
    
    const handleChange = (e) => {
      props.setFiltered(org)
      setTerm(e.target.value)
      console.log(e.target.value, term)
      props.setFiltered((arr)=>arr.filter((product)=>{return product.name.toLowerCase().includes(e.target.value)}))
      console.log(arr, org)
      console.log(props.filtered, props.products)
    }

return(
    <div className="search-bar">
    <form >
        <div className="search" >
            <input id="search-input" type="text" value={term} placeholder="Type item name..." onChange={handleChange} required />
        </div>
    </form>
    </div>
    )
}