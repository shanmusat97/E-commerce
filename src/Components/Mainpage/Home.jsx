import React from "react"
import "./Home.css"
import Slider from "../Mainpage/Slider"
import Categories from "./Categories"
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories/>
          <Slider />
        </div>
      </section>
    </>
  )
}

export default Home