import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {
  let [products, setProducts] = useState([])
  let [isFetching, setIsFetching] = useState(false)
  let [error, setError] = useState("")
  let [isOpen, setIsOpen] = useState(false)
  let [shoppingCart, setShoppingCart] = useState([])
  let [checkoutForm, setCheckoutForm] = useState()
  let [filtered, setFiltered] = useState([])

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
    shoppingCart.map((item, idx)=>{
      item.itemId == productId ? 
      updateOldItem(productId) :
      (idx == shoppingCart.length-1 ? addNewItem(productId) : null)
    })
  }

  const removeItem = (productId) => {
    let copyCart = [...shoppingCart]
    let index = copyCart.findIndex(el => el.itemId == productId)
    console.log("found")
    copyCart[index].quantity -= 1;
    setShoppingCart(copyCart)
  }

  const deleteItem = (id) => {
    console.log("delete")
    let index = shoppingCart.findIndex(el => el.itemId == id)
    setShoppingCart((shoppingCart)=>shoppingCart.filter((_, idx)=>idx !== index))
     

  }

  const handleRemoveItemFromCart = (productId) => {
    if(shoppingCart.length == 0){
      return
    }
    
    shoppingCart.map((item) => {
      item.quantity <= 0 ? deleteItem(item.itemId) : null;
      item.itemId == productId ?  removeItem(productId) : null; 
    })
    shoppingCart.map((item) => {
      item.quantity <= 0 ? deleteItem(item.itemId) : null;})
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
  async function getProduct(){
        try{
            let json = await axios.get('https://codepath-store-api.herokuapp.com/store')
            if(json.data.products.length == 0){
              setIsFetching(false)
            }
            else{
              setIsFetching(true)
            }
            setProducts(json.data.products)
            setFiltered(json.data.products)
          }
        catch(err){
          setError(err)
        }
      }

  useEffect(() => {
    getProduct()
  }, []);


  return (
    
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar /> 
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnToggle={handleOnToggle}/> 
          {/*TODO: put nav and side in home*/}
          <Routes>
            <Route path="/" element={<> 
              <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} setProducts={setProducts}
              filtered={filtered} setFiltered={setFiltered}/>
            </>}/>
            <Route path="/products/:productId" element={<ProductDetail shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
