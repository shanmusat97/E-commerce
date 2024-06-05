import React from "react"
import "./Footer.css"
import logo from "../../Components/asset/image/logo.png"
import { FaGoogle,FaInstagram,FaFacebookSquare,FaLinkedin,FaWhatsapp} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='boximg'>
            <img src={logo} alt="logo" />
            <p>  online best prices Flipmart Check out ethnic wear, formal wear western wear Blood Pressure Rate Monito.</p>
            <div className='icon '>
          <FaGoogle style={{color: 'white', fontSize: '30px',margin:'8px'}}/>
          <FaFacebookSquare style={{color: 'white', fontSize: '30px',margin:'8px'}}/>
           <FaInstagram style={{color: 'white', fontSize: '30px',margin:'8px'}}/> 
           <FaWhatsapp style={{color: 'white', fontSize: '30px',margin:'8px'}} /> 
          <FaLinkedin style={{color: 'white', fontSize: '30px',margin:'8px'}}/> 
            </div>
          </div>

        
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Store Pickup</li>

            </ul>
          </div>
          <div className='box'>
            
            <h2>Contact Us</h2>
            <ul>
              <li>70 Anna Square South,chennai,TamilNadu,India </li>
              <li>Email: Flipmart.help@gmail.com</li>
              <li>Phone: +91123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer