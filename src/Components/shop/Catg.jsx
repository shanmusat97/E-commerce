import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Accessories   (89)",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "serum   (14)",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Headphone  (2)",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Man shoes  (12)",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: " concealer(16)",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: " Baby Toys(3)",
    },
  ]
  return (
    <>
      <div className='category  '>
        <div className='chead d_flex'>
          <h1>PRODUCT CATEGORIES </h1>
         
        </div>
        {data.map((value, index) => {
          return (
            <div className=' box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <h4>FILTER BY PRICE</h4><br/>
          <input type="range" />
          <h6> PRICE: 299 -4999  </h6>
        </div>
      </div>
    </>
  )
}

export default Catg