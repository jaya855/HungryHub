import React, { useState } from 'react';
import { useCart } from '../context/Cart';

const Card = ({ foodName, item, options, ImgSrc }) => {
  const bucket=useCart()

 
  const handleAddToCart = () => {
    bucket.setCart({
      ...bucket.cart,
      [foodName]: { 
        fdName: foodName,
        qnty: quantity,
        opt: selectedOption,
        price: options[selectedOption] * quantity
      } 
    });
    console.log(bucket.cart.length)
    console.log(bucket.cart); 
  };
  



     

  const priceOptions = Object.keys(options);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(priceOptions[0]); 

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); 
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "400px", objectFit: "fill" }}>
        <img src={ImgSrc} style={{ width: "18rem", height: "150px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body" style={{"background-color":"#181616"}}>
          <h5 className="card-title text-white">{foodName}</h5>
          <div className=' w-100'>
            <select className="m-2 h-100  bg-success rounded text-white" value={quantity} onChange={handleQuantityChange}>
              {Array.from(Array(6), (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded text-white" value={selectedOption} onChange={handleOptionChange}>
              {priceOptions.map((data, id) => (
                <option key={id} value={data}>{data}</option>
              ))}
            </select>
            <div className="d-inline ms-2 h-100 w-20 fs-5 text-white">
            ₹{options[selectedOption] * quantity}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2  `} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
