import React, { useContext } from 'react'
import "./CSS/ShopCatelog.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Items from '../Components/Items/Items'


export const ShopCatelog = (props) => {

  var {all_product} = useContext(ShopContext)

  return (
    <>
      <div className='shop-catecory'>
      <img className='banner' src={props.banner} alt="" />
    </div>

    <div className='indexsort'>
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
    </div>

    <div className='shopcategory-sort'>
      sort by <img src={dropdown_icon} alt="" />
    </div>

    <div className='shopcategory-products'>
      {all_product.map((item)=>{
        if(props.category=== item.category){
          return(
            <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
          )
        }
        else{
          return null;
        }
      })}
    </div>

    
    </>
    
  )
}
