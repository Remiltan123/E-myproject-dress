import React from 'react'
import related_product from "../Assets/data"
import Items from '../Items/Items'
import "./RelatedProduct.css"

export const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
        <h1>Related Product</h1>
        <hr />
        <div className='RelatedProduct-item'>
            {related_product.map((item,i)=>{
                return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
            })}
        </div>
    </div>
  )
}
