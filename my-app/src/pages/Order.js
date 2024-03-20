import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Order = () => {
    
    const [myorder, setMyorder] = useState([]);

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

    // Function to convert date to a better understandable format
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <div style={{ backgroundColor: "#000", color: "#fff", paddingTop: "20px" }}> {/* Added paddingTop */}
        {
          myorder.map((element) => (
            element.map((ele, id)=>(
              <div key={id}>
                  <div style={{"text":"green" , "backgroundColor":"#944E63","fontWeight":"bold"}}>Time { }: {formatDate(ele.userDate)}</div>
                  <hr/>
                  <br/>
                
                  {Object.entries(ele.userItem).map(([itemName, item], itemId) => (
                      <div key={itemId} style={{'fontWeight':"bold"}} >
                          <div >FoodName {" : "} {item.fdName}</div>
                          <div>Option {" : "} {item.opt}</div>
                          <div>Price {" : "} {item.price}</div>
                          <div>Quantity {" : "} {item.qnty}</div>
                          <hr/>
                      </div>
                      
                  ))}
                  <hr/>
              </div>

            ))
          ))
        }
      </div>
      <Footer/>
    </div>
  );
};

export default Order;
