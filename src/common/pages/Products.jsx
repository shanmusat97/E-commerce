import React from "react"
import Home from "../../Components/Mainpage/Home"
import FlashDeals from "../../Components/flashdeals/FlashDeal"
import TopCate from "../../Components/Top/TopCate"
import NewArrivals from "../../Components/Newarrival/NewArrivals"
import Discount from "../../Components/Discount/Discount"
import Annocument from "../../Components/annocument/Annocument"
import Wrapper from "../../Components/Wrapper/Wrapper"

const Products = ({ productItems, addToCart, CartItem }) => {
  return (
    <>
      <Home CartItem={CartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} /> 
        <NewArrivals />
       <TopCate />
       <Annocument />
       <Discount />
        
      <Wrapper />    
    </> 
  )
}

export default Products