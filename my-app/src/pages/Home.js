import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'
import Card from '../components/Card'
import Carousel from '../components/Carousal'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])

  const loadFoodItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/foodData")
      setFoodItems(response.data.foodData)
      setFoodCat(response.data.categoryData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div className=''>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className='boxx'>
      <div className='container'>
        {
          foodCat.length !== 0
            ? foodCat.map((data) => {
              return (
          
                <div className='row pb-5'>
                  <div key={data.id} className='fs-3 m-3 text-white'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  { foodItems.length !== 0? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
