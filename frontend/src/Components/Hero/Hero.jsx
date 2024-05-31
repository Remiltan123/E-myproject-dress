import React from 'react'
import "./Hero.css"
import Hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero from "../Assets/hero_image.png"




export const Hero = () => {
  return (
    <>
        <div className='container'>
            <div className='sub-body1'>
                <div><p>NEW ARRIVALS ONLY</p></div>
                <div className='new'>
                    <div className='hand'>
                        <h1>NEW</h1>
                        <img src={Hand_icon} alt="" />
                    </div>
                    <div  className='para'><h1>Collections</h1></div>
                    <div  className='para'><h1>for everyone</h1></div>
                </div>
                <div className='Latest_Collection'>
                    <div className='collection'>Latest Collection</div>
                    <div><img src={arrow} alt="" /></div>
                </div>
            </div>

            <div className='sub-body2'>
                <img src={hero} alt="" />
            </div>
        </div>
    </>
  )
}
