import React from 'react'
import main from "../Images/main.jpg";
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

const userDetail = {
    name:"",
    email:"",
    password:""
}

const [data, setData] = useState(userDetail);

const navigate = useNavigate();

const handleInput = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setData({...data, [name]:value})
}

const handleSubmit = (event)=>{
    event.preventDefault() 
    // event.preventDefault() jab bhe hum form submit krte hai utni baar page refresh ho raha hai usko rokne ke liye hum event.preventDefault use krte hai
    // jab bhi hum localstorage me data ko save karenge toh usko hame json me convert krna padenga...
   
    if(data.name == "" || data.email == "" || data.password == ""){
        alert("Please Enter Details")
    }else{
        const getData = JSON.parse(localStorage.getItem("user") || "[]")
    // json.parse ek method hoti hai jo json ko object me convert kr deti hai
    let arr = [];
    arr = [...getData];
    //  ...getData se hamare pass jo previous data honga wo hamare pass store honga.
    arr.push(data)

    localStorage.setItem("user", JSON.stringify(arr));
    // hamare pass ek stringify method hoti hai jo object ko json me convert kr deti hai

    alert("Signup Sucessfully")
    navigate("/login");

    }
   
}


  return (
    <div>
        <Navbar/>
        <div className='main-page'> 
            <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Sign Up</p>
                </div>
                <div className='account'>
                 <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput}/>
                 <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}/> 
                 <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/> 
                 <p>Already have an account ?<a href='/login'>Login</a></p>    
                </div>
                <button className='sign'>SignUp</button>
            </form>
            <div>
                <img src={main} alt='image'/>
            </div>
        </div>
    </div>
  )
}

export default Signup