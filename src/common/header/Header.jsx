import React from 'react'
import Head from "../header/Head"
import Navbar from "../header/Navbar"
import Search from "../header/Search"
import "./Header.css"


const Header = ({ CartItem }) => {
  return (
    <>
      <Head/>
      <Search  CartItem={CartItem} />
     
      <Navbar/>
      </>
  )
}

export default Header
