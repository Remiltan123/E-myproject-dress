import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offer } from '../Components/Offers/Offer'
import { Newcollection } from '../Components/NewCollection/Newcollection'
import { Newleeter } from '../Components/Newletter/Newleeter'
import { Fotter } from '../Components/Fotter/Fotter'


export const Shop = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newleeter/>
    </>
  )
}
