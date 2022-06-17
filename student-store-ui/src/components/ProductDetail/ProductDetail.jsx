import * as React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound"

export default function ProductDetail(props) {
    let[product, setProduct] = useState(null)
    const { productId } = useParams()
    
    
    function handleR() {
      console.log("handling")
      if(product == null){
        return <NotFound/>
      }
      else{
        return (
          <div className="product-detail">
            <ProductView product={product} productId={productId} price={product.price} image={product.image} description={product.description} 
          shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/> 
          </div>
          )
      }
    }
   
  useEffect(() => {
    const getProd = async() => {
      try{
            let json = await axios.get('https://codepath-store-api.herokuapp.com/store/'+productId)
            setProduct(json.data.product)
        }catch(error){
          console.log(error)
        }
    }
 
    getProd()
  }, []);

console.log(product)

  return (
  <div className="product-detail">
     {product == null ?  <ProductView product={product} productId={productId} 
          shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/> 
        :<NotFound/>}
  </div>
  )
}