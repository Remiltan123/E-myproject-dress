import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"

import logo from "../Assets/logo.png"
import cartlogo from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

  
  const[menu,setMenu]=useState("Shop")
  const {TotalCartIems} = useContext(ShopContext)
  const [log,Setlog]=useState("Login")

  useEffect(()=>{
    if(localStorage.getItem('auth-token')){
      Setlog("Logout")
    }
  },[log])
 

  const logout = ()=>{
    localStorage.removeItem('auth-token')
    Setlog("Login")
  }

  return (
   <>
    <div className='navber-header'>
      <div className='shoper'>
        <img src={logo} alt="logo" />
        <p>SHOPER</p>
      </div>
      <div className='mid-nav'>
        <ul>
          <li onClick={()=>{setMenu("Shop")}}> <Link to="/" style={{textDecoration:"none"}}>Shop</Link> {menu === "Shop"?<hr/> : <></> }</li>
          <li onClick={()=>{setMenu("Men")}}> <Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu==="Men" ? <hr/>: <></>}</li>
          <li onClick={()=>{setMenu("Women")}}> <Link to="/womens" style={{textDecoration:"none"}}>Women</Link> {menu==="Women" ? <hr/>: <></>}</li>
          <li onClick={()=>{setMenu("Kids")}}> <Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {menu==="Kids" ? <hr/>: <></>}</li>
        </ul>
      </div>
      <div className='end-anv'>
      
        {log === "Login" ?
        <Link to="/login" ><button>Login</button></Link> 
        :<Link to="/" onClick={logout}><button>Logout</button></Link> }

        <Link to="/cart"> <img src={cartlogo} alt="" className='image'/> </Link>
        
       <div className='counter'>{TotalCartIems()}</div>
      </div>
      
    </div>
   
   </>
  )
}
