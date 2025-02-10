import React from 'react'
import "./index.css"
import Signup from './LoginSignup/Signup'
import Login from './LoginSignup/Login'
import Home from './LoginSignup/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App