import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail"
import NotFound from "../NotFound"
import "./App.css"
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  let [products, setProducts] = useState([])
  let [isFetching, setIsFetching] = useState(false)
  let [error, setError] = useState("")
  let [isOpen, setIsOpen] = useState(false)
  let [shoppingCart, setShoppingCart] = useState([])
  let [checkoutForm, setCheckoutForm] = useState()

  const handleOnToggle = () => {
    setIsOpen(!isOpen)
  }

  const addNewItem = (productId) => {
    console.log("new")
    let newItem = {
      itemId: productId,
      quantity: 1
    }
    setShoppingCart(state=>[...state, newItem])
  }

  const updateOldItem = (productId) => {
    console.log("old")
    let copyCart = [...shoppingCart]
    let index = copyCart.findIndex(el => el.itemId == productId)
    copyCart[index].quantity += 1;
    setShoppingCart(copyCart)
  }

  const handleAddItemToCart = (productId) => {
    if(shoppingCart.length == 0){
      addNewItem(productId)
    }
    console.log(shoppingCart, shoppingCart.length)
    shoppingCart.map((item, idx)=>{
      item.itemId == productId ? 
      updateOldItem(productId) :
      (idx == shoppingCart.length-1 ? addNewItem(productId) : null)
    })
    
  }

  const handleRemoveItemFromCart = (productId) => {
    //TODO
  }

  //TODO: check if 3 arguments is valid
  const handleOnCheckoutFormChange = (props) => {
    let newCheckoutForm = {
      name: props.name,
      value: props.value
    }
    props.setCheckoutForm(newCheckoutForm)
  }

  const handleOnSubmitCheckoutForm = () => {
    //TODO
  }

  useEffect(() => {
    async function getProduct(){
      try{
        let json = await axios.get('https://codepath-store-api.herokuapp.com/store');
        setProducts(json.data.products)
      } catch(err){
        setError(err)
      }
    }
    getProduct()
  }, []);

  return (
    
    <div className="app">
      <BrowserRouter>
        <main>
          {/*TODO: put nav and side in home*/}
          <Routes>
            <Route path="/" element={<> 
              <Navbar /> 
              <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnToggle={handleOnToggle}/> 
              <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}
              />
            </>}/>
            <Route path="/products/:productId" element={<><Navbar/> <Sidebar/> <ProductDetail/> </>}/>
            <Route path="*" element={<><Navbar/> <Sidebar/><NotFound/> </>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
