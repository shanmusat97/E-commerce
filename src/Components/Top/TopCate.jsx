import React from "react"
import "./Top.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fas fa-caret-down' />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate