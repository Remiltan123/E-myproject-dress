import React, { useEffect, useState } from 'react'
//import newcollection from "../Assets/new_collections"
import Items from '../Items/Items'
import "./Newcollection.css"

export const Newcollection = () => {

  const[newcollection,SetNewCollection]=useState([]);


  useEffect(()=>{
    const GetNewCollection = async()=>{
      try{
        const response = await fetch("http://localhost:4000/NewCollection",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const responseData = await response.json();
        if(!responseData.success){
          alert(responseData.meassage)
        }else{
          SetNewCollection(responseData.Data)
        }
      }catch(err){
        console.error("error"+err)
      }
      
    }

    GetNewCollection();
  },[])

  console.log(newcollection);

  return (
    <div className='new-collection'>
        <div className='header'>
            <h2>New Collection</h2>
            <hr/>
        </div>

        <div className='footer'>
            {newcollection.map((item)=>{
                return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
            })}
        </div>


    </div>
  )
}

