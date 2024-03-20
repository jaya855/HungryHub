import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Login = () => {
  // console.log("hello from frontend login")
  const [formdata,setFormData]=useState({email:"",password:""})
  const navigate=useNavigate()
  const handleChange=(e)=>{
   const {name,value}=e.target
   setFormData({...formdata,[name]:value})
  }
  const submitHandler=async(e)=>{
   
    e.preventDefault();
  //  console.log(formdata.email)
  //  console.log(formdata.password)
   
    try{
      const ress = await axios.post("http://localhost:8080/api/v1/auth/login", formdata);
      // console.log("Response data from login:", ress.data); // Log response data to check if email is present
  
      localStorage.setItem("authToken", ress.data.token);
      localStorage.setItem("email", ress.data.email);
      navigate("/");
    }
    catch(error){
      console.log(error)
      console.log("not able to login")
    }
  }
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
    <div>
      <Navbar/>
    </div>
    <div className='container'>
      <form className='w-50 m-auto mt-5 border bg-dark border-success rounded'>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"white"}}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"  name='email' aria-describedby="emailHelp" value={formdata.email} onChange={handleChange}/>
        
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}}>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"   name='password' value={formdata.password} onChange={handleChange} />
        </div>
        <button type="submit" className="m-3 btn btn-success" onClick={submitHandler}>Submit</button>
        <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
      </form>

    </div>
  </div>
  )
}

export default Login
