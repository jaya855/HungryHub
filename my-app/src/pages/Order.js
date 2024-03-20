import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Order = () => {
    
    const [myorder, setMyorder] = useState([]);
    console.log("heeloo")
    console.log(myorder)
    const handleMYorder = async () => {
        try {
            const myuser = localStorage.getItem("email");
            const ress = await axios.get(`http://localhost:8080/api/v1/myOrder/${myuser}`);
            
            if (ress.data.orderhis !== undefined) {
              setMyorder(ress.data.orderhis);
            } else {
              console.log("Order history is undefined");
            }
          } catch (error) {
            console.log(error);
          }
    };

    useEffect(() => {
      handleMYorder();
    }, []);

  return (
    <div>
      <Navbar/>
      <div>
        {
          myorder.map((ele, id) => (
            <div key={id}>
                <div>{ele.userDate}</div>
              
              {ele.userItem && ele.userItem.map((item, itemId) => (
                <div key={itemId}>
                  <div>{item.fdName}</div>
                  <div>{item.otp}</div>
                  <div>{item.price}</div>
                  <div>{item.qnty}</div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  );
};

export default Order;
