import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleInput = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        if("email" == name){
        setEmail(value)
        }
        if("password" == name){
            setPassword(value)
        }

    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(email =="" || password ==""){
            alert("Please Enter Details!")
        }else{
            let getDetails = JSON.parse(localStorage.getItem("user"))
        console.log(getDetails);
        getDetails.map((curValue) => {
            console.log(curValue.password);
            let storeEmail = curValue.email;
            let storePassword = curValue.password;

            if(storeEmail == email && storePassword == password){
                alert("Login Sucessfully !")
                navigate("/home")
            }else{
              return setMsg("Inavlid Email or password !")
            }
        })
        

        }
    }
  return (
    <div>
        <Navbar/> 
        <div className='container'>
            <p className='errMsg'>{msg}</p>
        <form onSubmit={handleSubmit} className='login-form'>
                <div className='heading'>
                    <p>Log In</p>
                </div>
                <div className='account'>
                 <input type="text" name='email' placeholder='Enter your Email' onChange={handleInput}/> 
                 <input type="text" name='password' placeholder='Enter your Password' onChange={handleInput}/> 
                 <p>If you have to create account ?<a href='/'>Signup</a></p>    
                </div>
                <button className='kp'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
