import React from 'react'
import './App.css';
import Header from './common/header/Header';
import{HashRouter as Router,Switch,Route} from "react-router-dom";
import Products from './common/pages/Products';
import Data from "./Components/Data"
import Cart from "./common/Cart/Cart"
import Sdata from "./Components/shop/Sdata"
import Shop from "./Components/shop/Shop"
import { useState } from 'react';
import Footer from "./common/Footer/Footer"

const App = () => {
  const { productItems } = Data

  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } 
    else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

    
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
     
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
    
  }
  const deleteProduct =(product)=>
    {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    }
  return (
    <>
    
      
      <Router>
      <Header CartItem={CartItem}/>
      <Switch>
       <Route exact path='/'>  <Products productItems={productItems}  addToCart={addToCart} shopItems={shopItems} /></Route>
       <Route path='/product' exact><Shop  shopItems={shopItems} addToCart={addToCart}/></Route>
       <Route path='/cart' exact><Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteProduct={deleteProduct}/></Route>
        </Switch>
      </Router>
    <Footer />
    </>
    
  )
}

export default App
