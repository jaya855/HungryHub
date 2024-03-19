import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import Card from '../components/Card';
import Carousel from '../components/Carousal';
import axios from 'axios';

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadFoodItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/foodData");
        setFoodItems(response.data.foodData);
        setFoodCat(response.data.categoryData);
      } catch (error) {
        console.log(error);
      }
    };

    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel srch={search} setsrch={setSearch} />
      <div className='boxx'>
        <div className='container'>
          {foodCat.length!==0 && foodCat.map((data) => {

            return (
              <div key={data.id} className='row pb-5'>
                <div className='fs-3 m-3 text-white'>{data.CategoryName}</div>
                <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

                {foodItems.length > 0 ? (
                  foodItems.filter((item) => {
                    if (search === "") {
                      return item.CategoryName === data.CategoryName;
                    } else {
                      return item.name.toLowerCase().includes(search.toLowerCase()) && item.CategoryName === data.CategoryName;
                    }
                  }).map((filterItems) => (
                    <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
                    </div>
                  ))
                ) : (
                  <div>No Such Data</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
