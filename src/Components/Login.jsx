import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate =useNavigate();
 
  const handleLogin=(e)=>{
    e.preventDefault();
 
    
      
    navigate("/home");

  }
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className='login-container'>
      <h1 style={{color:'blue'}}>Login</h1>
      <form onSubmit={handleLogin}>
        <label> Email </label>
        <input type='email' placeholder='email' required />
        <label> Password </label>
        <input type='password' placeholder='password' required/>
        <button style={{backgroundColor:'blue',color:'white',margin:'20px'}} type='submit'>Login</button>
      </form>

    </div>
    </div>
    </>
  )
}

export default Login;