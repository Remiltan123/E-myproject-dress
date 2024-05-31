import React, { createContext, useContext, useState, useEffect } from 'react';
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0; 
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCart] = useState(getCart());

  const Addcart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const Removecart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const TotalAmount = ()=>{
    let totalAmount =0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo = all_product.find((product)=>product.id === Number(item))
        totalAmount += iteminfo.new_price * cartItems[item] 
      }
    }
    return totalAmount;
    
  }

  const TotalCartIems = ()=>{
    let totalitem =0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalitem += cartItems[item] ;
      }
    }
    return totalitem;
  }

  const contextValue = { all_product, cartItems, Addcart, Removecart,TotalAmount,TotalCartIems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
