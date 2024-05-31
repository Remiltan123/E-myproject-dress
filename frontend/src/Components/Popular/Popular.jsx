import React from 'react'
import "./Popular.css"

import product_Data from "../Assets/data"
import Item, { Items } from "../Items/Items.jsx"


export const Popular = () => {
  return (
    <div className='popular'>
        <h2>POPULAR IN WOMEN</h2>
        <hr />
        <div className='womenitems'>
            {product_Data.map((item)=>{
                return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
            })}
        </div>
    </div>
  )
}
export default Popular
