import React from 'react'
import newcollection from "../Assets/new_collections"
import Items from '../Items/Items'
import "./Newcollection.css"

export const Newcollection = () => {
  return (
    <div className='new-collection'>
        <div className='header'>
            <h2>New Collection</h2>
            <hr/>
        </div>

        <div className='footer'>
            {newcollection.map((item)=>{
                return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
            })}
        </div>


    </div>
  )
}

