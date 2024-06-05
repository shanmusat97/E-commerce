import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className=' grid '>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='imgs'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>₹{val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart