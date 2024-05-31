import React, { useState } from 'react'
import "./CSS/Loginpage.css"

export const Loginpage = () => {

  const[state,setState]=useState("Login")
  const[formdata,setFormdat]=useState({
    username:"",
    password:"",
    email:""
  })

  const ChangeHandle = (e)=>{
    setFormdat({...formdata,[e.target.name]:e.target.value})
  }

  const LoginFun = async()=>{
    let responsedata; // Corrected variable name
    await fetch('http://localhost:4000/Login', {
      method: "post",
      headers: {
        Accept: "application/from-data",
        'content-Type': "application/json"
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => (responsedata = data)); // Corrected assignment
  
    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.errors);
    }
  
    
  }

  const signupFun = async () => {
    let responsedata; // Corrected variable name
    await fetch('http://localhost:4000/Signup', {
      method: "post",
      headers: {
        Accept: "application/from-data",
        'content-Type': "application/json"
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => (responsedata = data)); // Corrected assignment
  
    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      alert(responsedata.errors);
    }
  };
  
  return (
    <>
      <div className='login'>
        <div className='login-container'>
          <div><h2>{state}</h2></div>
          {state === "Sign Up" ? <input type="text" placeholder='Username' name='username' value={formdata.username} onChange={ChangeHandle }/>: <></>}
          <input type="text" placeholder='Email Address' name='email' value={formdata.email} onChange={ChangeHandle }/>
          <input type="text" placeholder='Enter password' name='password' value={formdata.password} onChange={ChangeHandle }/> 

          <div><button onClick={()=>{state==="Login" ? LoginFun():signupFun() }}>Continue</button></div>


          {state === "Login" ? 
          <div className='login-here' ><p>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span> </p></div>
          :<div className='login-here'><p>Already Have an account? <span onClick={()=>{setState("Login")}}>Login here</span> </p></div>}
         

          <div className='login-checkbox'>
             <p> <input type="checkbox"  />By continuing, i agree to the terms of use and privacy ploicy </p> 
          </div>

        </div>
      </div>
    </>
    
  )
}
