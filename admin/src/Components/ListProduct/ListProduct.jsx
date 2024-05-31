import React, { useEffect, useState } from 'react'
import "./ListProduct.css"

export const ListProduct = () => {

  const[allproducts,setAllproducts]=useState([]);

  const getall_Product = async ()=>{
    await fetch('http://localhost:4000/allproduct') //gerting the response
    .then((res)=>res.json())  //converted using json 
    .then((data)=>{setAllproducts(data)})//save the in data in alllproduct variable
  }

  //whenever this function montated for that use useeefect
  useEffect(()=>{
    getall_Product();
  },[])

  //Remove function
  const RemoveFunction = async (Id)=>{
      await fetch('http://localhost:4000/removeproduct',{
        method: "POST",
        headers: {
                    "Content-Type": 'application/json',
                  },
        body: JSON.stringify({id:Id}),
      })
      await getall_Product();   
    }
  

  return (
    <div className='List-Product'>
      <h2>ALL PRODUCT LIST</h2>
      <div className='listproduct-container'>
        <p>Product</p>
        <p>Title</p>
        <p>New Price</p>
        <p>Old price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className=' all_product'>
        {allproducts.map((products,index)=>{
          return <><div key={index} className='listproduct-container listproduct_withmap'>
            <img src={products.image} alt="" className='listproduct_withmap_image' />
            <p className='listproduct_withmap-name'>{products.name}</p>
            <p className='listproduct_withmap-newpricwe'>{products.new_price} $</p>
            <p className='listproduct_withmap-oldprice'>{products.old_price} $</p>
            <p className='listproduct_withmap-category'>{products.category}</p>
            <button className='listproduct_remove_button' onClick={()=>{RemoveFunction(products.id)}}>Remove</button>
          </div> 
          <hr />
          </>
        })}
      </div>
    </div>
  )
}
