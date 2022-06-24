import * as React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NotFound from "../NotFound/NotFound"
import axios from "axios"
import "./OrderDetail.css"

export default function OrderDetail(props) {
    
    const { purchaseId } = useParams()
    let[purchase, setPurchase] = useState(null)
    let [notFound, setNotFound] = useState(false)
    async function getProd(){
      try{
          let json = await axios.get('http://localhost:3001/orders/'+purchaseId)
          setPurchase(json.data.purchase)
          console.log(purchase)
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


if(notFound){
    return (<NotFound/>)
  }
  else if(purchase == null){
    return (
      <div className="purchase-detail">
        <h2>loading...</h2>
      </div>
    )
  }
  else{
    return(
        <div className="purchase-detail">
            <h2>Purchase #{purchase.id}</h2>
            <p>Name: {purchase.name}</p>
            <p>Email: {purchase.email}</p>
            <p>Created at: {purchase.createdAt}</p>
            <p>Total: ${purchase.total}</p>
            <ul>
                {purchase.receipt.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
    )
}}