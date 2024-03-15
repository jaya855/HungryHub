import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({name:"",email:"",address:"",password:""});

  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
      if (!formData.name || !formData.email || !formData.address || !formData.password) {
        console.log("Please fill out all fields");
        return;
      }
      await axios.post("http://localhost:8080/api/v1/signup",formData);
      navigate("/login")
    }
    catch(error){
      console.log(error)
      console.log("not able to signup")
    }
  }


  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar/>
      </div>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' >
            <div className="m-3">
              <label htmlFor="name" className="form-label" style={{"color":"white"}}>Name</label>
              <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label" style={{"color":"white"}}>Email address</label>
              <input type="email" className="form-control" id="email" name='email'  aria-describedby="emailHelp" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label" style={{"color":"white"}}>Address</label>
              <fieldset>
                <input type="text" onChange={handleChange} className="form-control"  id="address" value={formData.address} name='address' placeholder='"Click below for fetching address"'  aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="m-3">
              <button type="button"  name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div>
            <div className="m-3">
              <label htmlFor="password" className="form-label" style={{"color":"white"}}>Password</label>
              <input type="password" className="form-control" id="password" name='password'value={formData.password}  onChange={handleChange}/>
            </div>
            <button type="submit" className="m-3 btn btn-success" onClick={submitHandler}>Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
  )
}

export default Signup
