import React, { useContext } from 'react'
import './ProctDisplay.css'
import star_icon from "../Assets/star_icon.png" 
import { ShopContext } from '../../Context/ShopContext'

export const ProctDisplay = ({product}) => {
 
    const {Addcart} = useContext(ShopContext)
 
    return (
    
    <div className='prodct-dispaly'>
        <div className='prodct-dispaly-left'>
            <div className="prodct-dispaly-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>  

            <div className='product-img'>
                <img src={product.image} alt="" className='main-image'/>
            </div>    
        </div>

        <div className='prodct-dispaly-right'>
            <h1>{product.name}</h1>
            <div className='prodct-dispaly-right-star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <p>(150)</p>
            </div>
            
            <div className='product-price'>
                <div className='product-old-price'>${product.old_price}</div>
                <div className='product-new-price'>${product.new_price}</div>
            <div/>
                
            <div className='product-descripition'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente molestias expedita nemo nobis. Beatae accusantium iusto pariatur officiis expedita facere iste atque vero ullam, consequatur delectus quidem quos. Reiciendis.</p>
            </div>

            <div className='select-size'>
                <h1>SElECT SIZE</h1>
                <div className='slect-right-size'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{Addcart(product.id)}} className='addcart-buttun'>ADD CART</button>
            
            
        </div>
        </div>  

        
    </div>
  )
}
