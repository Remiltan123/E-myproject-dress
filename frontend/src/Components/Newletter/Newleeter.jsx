import React from 'react'
import "./Newletter.css"

export const Newleeter = () => {
  return (
    <div className='Newleeter'>
        <div className="Newleeter-text">
            <h1>Get Exclusive Offers On Your Email</h1>
            <div>Subcribe to our newletter and stay updated
        </div>
        <div className='subcribe'>
            <input type="text" placeholder='Enter Email Id'/>
            <button>Subcribe</button>
        </div>
        </div>
    </div>
  )
}
