import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import  Login from './Components/Login';


import "./App.css";

function App() {
  return (
    <>
     
      <Routes>
        
        <Route path='/' element={<Registration />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />

      </Routes>
    </>
  );
}

export default App;