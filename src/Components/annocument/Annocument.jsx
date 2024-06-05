import React from "react"
import "./Annocument.css"

const Annocument = () => {
  const mystyle = {
    width: "40%",
    height: "340px",
    responsive: [{
      breakpoint: 480,
      setting:{
        width: "40%",
        height: "100px",
      }
  }]
  }
  const mystyle1 = {
    width: "58%",
    height: "340px",
    responsive: [{
      breakpoint: 480,
      setting:{
        width: "58%",
        height: "100px",
      }
  }]
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src={process.env.PUBLIC_URL +'/images/banner1.png'} width='100%' height='100%' alt="pic2" />
          </div>
          <div className='img' style={mystyle1}>
            <img src={process.env.PUBLIC_URL +'/images/banner2.png'} width='100%' height='100%' alt="pic3" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument