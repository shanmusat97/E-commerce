import React from "react"
import logo from "../../Components/asset/image/logo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
          <span>All Category</span>
            <input type='text' placeholder='Search here...' />
            <i className='fa fa-search'></i>
            
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle search-acc'></i>
            
            <div className='cart'>
              <Link to='/cart' className="search-bag">
                <i className="fa fa-shopping-bag fs-2 align-middle me-1 col_yell"></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search