import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum'
import { ProctDisplay } from '../Components/ProctDisplay/ProctDisplay'
import { Discription } from '../Components/Discription/Discription'
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct'

export const Product = (props) => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product =  all_product.find ((e)=> e.id === Number(productId));


  return (
    <div>
      <Breadcrum product = {product}/>
      <ProctDisplay product ={product}/>
      <Discription/>
      <RelatedProduct/>
    </div>
  )
}
