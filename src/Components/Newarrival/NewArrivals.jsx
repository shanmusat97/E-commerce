import React from "react"
import Cart from "./Cart"
import "./NewArrival.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt="pic1" />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fas fa-caret-down' />
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}


export default NewArrivals