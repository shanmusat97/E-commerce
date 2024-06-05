import React from "react"
import "./Cart.css"
import { Link } from "react-router-dom"



const Cart = ({ CartItem, addToCart, decreaseQty,deleteProduct }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  return (
    <>
    
      <section className='cart-items'>
       <table>
       <tr><th>PRODUCT</th><th>NAME</th><th>UNIT PRICE</th><th>QUANTITY</th><th>TOTAL</th><th><i class="fa fa-trash"></i></th></tr>
       </table>
             
            
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}
          
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart      <Link to='/product'>Shop Now</Link></h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product' key={item.id}>
               
          
            
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    
                  </div>
                  <div className='item-price'>
                  <h4>
                    ₹{item.price} 
                      
                    </h4>
                  </div>
                    <div className='cartControl d_flex'>
                    <button className='desCart' onClick={() => decreaseQty(item)}>
                       -
                      </button>
                      <button className="quant">{item.qty} </button>
                      
                      <button className='incCart' onClick={() => addToCart(item)}>
                        +
                      </button>
                    </div>
                    <div className="span"><span>₹{productQty}</span> 

                    <button className='deleteCart' onClick={() => deleteProduct(item)}>
                      <i class="fa fa-trash"></i>
                      </button>
                    </div>
                    
                  
                  <div className='cart-item-price'></div>
                </div>
                
              )
            })}

          </div>
          
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className='total'>
              <h4>Total Price :₹{totalPrice}</h4><br/>
              
              

              <h3>₹{totalPrice}</h3>
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Cart