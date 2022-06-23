import * as React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"

export default function ProductDetail(props) {
    console.log(props)
    const { productId } = useParams()
    let[product, setProduct] = useState(null)
    let [notFound, setNotFound] = useState(false)
    
    async function getProd(){
      try{
          let json = await axios.get('http://localhost:3001/store/'+productId)
          setProduct(json.data.product)
        }
      catch(err){
        props.setError(err)
        console.log(err)
        setNotFound(true)
      }
    }

useEffect(() => {
  getProd()
}, []);

console.log(notFound)

if(notFound){
  return (<NotFound/>)
}
else if(product == null){
  return (
    <div className="product-detail">
      <h2>loading...</h2>
    </div>
  )
}
else{
  return (
  <div className="product-detail">
     <ProductView product={product} productId={productId} shoppingCart={props.shoppingCart} 
     handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/> 
  </div>
  )
}
}