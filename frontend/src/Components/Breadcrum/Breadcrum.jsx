import React from 'react'
import "./Breadcrum.css"
import arrowicon from "../Assets/breadcrum_arrow.png"

export const Breadcrum = ({product}) => {
    
  return (
    <div className='breadcrum'>
        Home <img src={arrowicon } alt="" />
        Shop <img src={arrowicon } alt="" />
        {product.category} <img src={arrowicon} alt="" />
        {product.name}
    </div>
  )
}
