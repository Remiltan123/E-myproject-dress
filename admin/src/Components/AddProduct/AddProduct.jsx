import React from 'react'
import "./AddProduct.css"
import upload_image from "../../assets/upload_area.svg"
import { useState } from 'react'

export const AddProduct = () => {

    const[image,setImage]=useState(false);
    const[productDetails,setproductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })

    const imageHandle =(e)=>{
        setImage(e.target.files[0])
    }

    const changeHandle = (e)=>{
        setproductDetails({...productDetails,[e.target.name]:e.target.value})
    }
/*
    const Addproduct = async ()=>{

        let responsData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product',image)

        await fetch( 'http://localhost:5000/upload',{
            method:"POST",
            mode: 'cors',
            headers:{
                Accept:'application/json',
            },
            body:formData
        }).then((resp)=>resp.json()).then((data)=>{responsData=data})

        if(responsData.success){
            product.image = responsData.image_url;
            console.log(product)

            //add prouct to backen
            await fetch('http://localhost:5000/addproduct',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.JSON())
              .then((data)=>{
                data.success?alert("product added"):alert("Failed")
              })
        }
        

    } */

    const Addproduct = async () => {
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);
    
        try {
            // Upload image
            const imageResponse = await fetch('http://localhost:4000/upload', {
                method: "POST",
                mode: 'cors',
                body: formData
            });
            
            const imageData = await imageResponse.json();
            
            if (!imageData.success) {
                throw new Error('Image upload failed');
            }
    
            product.image = imageData.image_url;
            console.log(product);
            
    
            // Add product to backend
            const productResponse = await fetch('http://localhost:4000/addproduct', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
    
            const productData = await productResponse.json();
    
            if (!productData.success) {
                throw new Error('Failed to add product');
            }
    
            alert("Product added successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred. Product not added.");
        }
    }
    

  return (
    <div className='AddProduct'>

        <div className='AddProduct-itemfiled'>
            <p>PRODUCT TITLE</p>
            <input value={productDetails.name}  type="text" name='name' placeholder='name' onChange={changeHandle}/>
        </div>

        <div className='AddProduct-price'>
            <div className='AddProduct-itemfiled'>
                <p>PRICE</p>
                <input value={productDetails.old_price} type="text" name='old_price' placeholder='price' onChange={changeHandle}/>
            </div>

            <div className='AddProduct-itemfiled'>
                <p>OFFER PRICE</p>
                <input value={productDetails.new_price} type="text" name='new_price' placeholder='name' onChange={changeHandle}/>
            </div>
        </div>

        <div className='AddProduct-itemfiled'>
            <p>PRODUCT Category</p>
            <select value={productDetails.category} name="category" className='select' onChange={changeHandle}>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="Kid">Kid</option>
            </select>
        </div>

        <div className='AddProduct-itemfiled-image'>
            <label htmlFor="file-input">
                {image ? (<img  src={URL.createObjectURL(image)} alt=""  style={{ border: "1px solid black" }} className='upload_image' />) 
                : (<img src={upload_image} alt="" className='upload_image'/>)}
            </label>

            <input type="file" name='image' id='file-input' hidden onChange={imageHandle}/> 
        </div>

        <button className='AddProduct-button' onClick={Addproduct}>UPLOAD</button>
        
    </div>
  )
}
