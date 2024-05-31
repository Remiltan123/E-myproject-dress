import React, { useContext } from 'react'
import "./CSS/cart.css"
import remove_icon from "../Components/Assets/cart_cross_icon.png"
import { ShopCatelog } from './ShopCatelog'
import { ShopContext } from '../Context/ShopContext'

export const Cart = () => {

  const{all_product, cartItems, Removecart,TotalAmount,TotalCartIems}=useContext(ShopContext)

  return (
    <>
    <div className='cart-container'>
      <div className='cart-items'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>

      
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
            return (
              <>
                <div className='item-display'>
                  <img src={e.image} alt="" className='item-display-image'/>
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button>{cartItems[e.id]}</button>
                  <p>{e.new_price*cartItems[e.id]}</p>
                  <img src={remove_icon} alt="" onClick={()=>{Removecart(e.id)}}/>
                </div>
              </>  
            )         
          }
        })}
      
    </div>

    <div className='cart-Total-container'>
      <div className="cart-total-left">
        <h2>Cart Totals</h2>
        <div className='Subtotals'>
          <p>Subtotals</p>
          <p>${TotalAmount()}</p>
        </div>
        
        <hr />
        <div className='shippingfee'>
          <p>shipping fee</p>
          <p className='free'>free</p>
        </div>
        
        <hr />
        <div className='total'>
          <h3>Total</h3>
          <p className='price'>${TotalAmount()}</p>
        </div>
        
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='cart-total-right'>
        <p>if you have promo code enter here</p>
        <div className='promobox'>
          <input type="text" placeholder='promo code' />
          <button >Submit</button>
        </div>
      </div>
    </div>
    </>
    
  )
}
