import React from 'react'
import "./Navbar.css"
import navbarlogo from "../../assets/nav-logo.svg"
import navbarprofile from "../../assets/nav-profile.svg"

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={navbarlogo} alt="" className='navbarlogo'/>
        <img src={navbarprofile} alt="" className='navbarprofile'/>
    </div>
  )
}
