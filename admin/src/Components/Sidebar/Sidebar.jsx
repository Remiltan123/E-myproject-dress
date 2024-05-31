import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import addprosuct_icon from "../../assets/Product_Cart.svg"
import listproduct from "../../assets/Product_list_icon.svg"

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Link to={"/AddProduct"} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={addprosuct_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={"/ListProduct"} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={listproduct} alt="" />
                <p>List Product</p>
            </div>
        </Link>
    </div>
  )
}
