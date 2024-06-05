import React from 'react'
import { Link } from 'react-router-dom';
import { useState} from 'react';
import Dropdown from './drop/Dropdown';



const Head = () => {
 
 
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 

  

  const handleClick = () => {setClick(!click);}
  const closeMobileMenu = () => {setClick(false);}

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth>960 && setDropdown(false);
  };



  return (
    <>
     <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +98012 6785 4322</label>
            <i className='fa fa-envelope'></i>
            <label> support@info.com</label>
           
          </div>
          
          <div className='right row RText' onClick={handleClick}>
          
          <li
            className='nav-item'
          
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            

          >
          <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Help<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          </div>
          
        </div>
        
      </section>
    </>
    
  )
}

export default Head
