import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousal'
import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])

  const loadFoodItems=async(req,res)=>{
    try{
      const response= await axios.get("http://localhost:8080/api/v1/foodData")
      console.log("hello")
      console.log(response)
      console.log(response.data[0])
      console.log(response.data[1])
      setFoodItems(response.data[0])
      setFoodCat(response.data[1])
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    loadFoodItems()
  }, [])
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'>
      {
        foodCat.length !== 0 ? 
        (
          foodCat.map((data,id)=>{
            return <div key={id}>{data.CategoryName}</div>
          })
        ) 
        : 
        (
             <div>no such data</div>
        )
      }
     </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
