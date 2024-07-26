import React, { createContext, useContext, useState, useEffect } from 'react';
//import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0; 
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const[all_product,Setall_products]=useState([]);
  const [cartItems, setCart] = useState(getCart());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/allproduct", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
  
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        Setall_products(data);
      } catch (error) {
        console.error("Error fetching the data:", error);
        alert("Please wait, something went wrong");
      }
    };
  
    fetchData();
  }, []);

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
