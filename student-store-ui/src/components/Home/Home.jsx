import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react"
import About from "../About"
import Contacts from "../Contacts"
import Footer from "../Footer"
import SearchBar from "../SearchBar"
import CategoryFilter from "../CategoryFilter"
import Credits from "../Credits"


export default function Home(props) {

  return (
    <div className="home">
      <Hero />
      <CategoryFilter filtered={props.filtered} setFiltered={props.setFiltered} products={props.products} constFiltered={props.constFiltered}
      setConstFiltered={props.setConstFiltered}/>
      <SearchBar filtered={props.filtered} setFiltered={props.setFiltered} products={props.constFiltered}/>
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      shoppingCart={props.shoppingCart} setProducts={props.setProducts} filtered={props.filtered}/>
      <About />
      <Contacts />
      <Footer/>
      <Credits/>

    </div>
  )
}
