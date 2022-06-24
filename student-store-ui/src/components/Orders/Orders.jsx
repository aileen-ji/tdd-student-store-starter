import * as React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Orders.css"

export default function Orders(props) {
    const [purchases, setPurchases] = useState([])
    const [error, setError] = useState()

    async function getPurchases(){
        try{
            let json = await axios.get('http://localhost:3001/orders')
            console.log(json)
            setPurchases(json.data.purchases)
          }
        catch(err){
          setError(err)
        }
      }

  useEffect(() => {
    getPurchases()
  }, []);

  return (
    <div className="orders">
        {purchases.map((purchase) => {return(
        <div className="purchase">
            <p>{purchase.name}</p>
            <p>{purchase.email}</p>
            <p>${purchase.total}</p>
            <p>{purchase.createdAt}</p>
        </div>)})}
    </div>
  )
}