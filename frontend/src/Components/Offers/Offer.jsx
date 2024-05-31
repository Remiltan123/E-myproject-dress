import React from 'react'
import offerimage from "../Assets/exclusive_image.png"
import "./Offer.css"

export const Offer = () => {
  return (
    <>
        <div className='continer'>
            <div className='text'>
                <div><h1>Speceial</h1></div>
                <div><h1>Offers For You</h1></div>
                <div className='bestslae'>ONLY ON BEST SELLERS PRODUCTS</div>
                <button>View Now</button>
            </div>
            <div>
                <img src={offerimage} alt="" />
            </div>
        </div>
    </>
  )
}
