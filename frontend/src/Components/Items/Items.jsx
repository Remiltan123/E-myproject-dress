import React from 'react'
import "./Items.css"
import { Link } from 'react-router-dom'

export const Items = (props) => {
  return (
    <div className='iteam'>
        <Link to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={window.scrollTo(0,0)}/> </Link>
        <div className='details'>
            <p>{props.name}</p>
            <div className='iteam_price'>
                <div className='newprice'>$ {props.new_price}</div>
                <div className='oldprice'>$ {props.old_price}</div>
            </div>
        </div>
        
            
    </div>
  )
}
export default Items
