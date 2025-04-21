import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate =useNavigate()
  const [password, setPassword]=useState("");
  const [confirmPassword, setconfirmPassword]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      alert("password do not match!")
      return;

    }
    navigate("/login");
  };
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className='main-container'>
      <h1 style={{color:'blue'}}>Register</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>UserName </label>
      <input type='text' placeholder='Username' required />
      <label>Email </label>
      <input type='email' placeholder='email' required />
      <label>Password </label>
      <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} required />
      <label>   Confirm password </label>
      <input type='password' placeholder='confirm password'onChange={(e)=>setconfirmPassword (e.target.value)} required />
        <button style={{backgroundColor:'blue',color:'white',margin:'15px',cursor:'pointer'}} type='submit'>Submit</button>
      </form>

    </div>
    </div>
    </>
  )
}

export default Registration;