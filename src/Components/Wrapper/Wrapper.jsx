import React from "react"
import "./Wrapper.css"
import {FaTruck,FaLock,FaShieldAlt,FaHeadphones} from "react-icons/fa";
const Wrapper = () => {
  const data = [
    {
      cover: <FaTruck style={ {fontSize: '30px',color:'#ffcd4e'}}/>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover:<FaLock style={ {fontSize: '30px',color:'#ffcd4e'}}/>,
      title: "Secure Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaShieldAlt style={ {fontSize: '30px',color:'#ffcd4e'}}/>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaHeadphones style={ {fontSize: '30px',color:'#ffcd4e'}}/>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid4'>
          {data.map((val, index) => {
            return (
              <div className='product4' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3 style={{fontWeight:"bold"}}>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper