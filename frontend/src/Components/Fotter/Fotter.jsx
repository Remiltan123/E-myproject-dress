import React from 'react'
import "./Fotter.css"
import logo from "../Assets/logo.png"
import instra from "../Assets/instagram_icon.png"
import whatsup from "../Assets/whatsapp_icon.png"
//import hosport from "../Assets/"

export const Fotter = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='logo'><img src={logo} alt="" />
                <h2>SHOPPER</h2>
            </div>
            
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='img'>
              <img src={instra}alt="" />
              <img src={whatsup} alt="" />

            </div>

            <div><hr /></div>
            <div className='copyright'>Copyright @2024 - All Right Reserved.</div>

        </div>
    </>
  )
}
