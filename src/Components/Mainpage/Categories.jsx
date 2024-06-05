import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat2.png",
      cateName: "Electronics",
    },
    
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg:process.env.PUBLIC_URL+ "/images/category/cat6.png",
      cateName: "Laptops",
    },
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    
    {
      cateImg:process.env.PUBLIC_URL+ "/images/category/cat9.png",
      cateName: "Baby Products",
    },
    {
      cateImg: process.env.PUBLIC_URL+"/images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg:process.env.PUBLIC_URL+ "/images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
