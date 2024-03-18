import React from 'react'

const Card = ({foodName,item,options,ImgSrc}) => {
  const handleAddToCart = ()=>{
    console.log("added")
  }
   
  let priceOptions = Object.keys(options);
    return (
      
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" ,"objectFit":"fill"}}>
                <img src={ImgSrc} style={{ "width": "18rem", "height": "150px" ,"objectFit":"fill" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                   
                    <div className=' w-100'>
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>)
                            })}
                        </select>

                        <select className="m-2 h-100 bg-success rounded">
                            {priceOptions.map((data, id) => {
                               return  <option key={id} value="full">{data}</option>
                            })}
                        </select>

                        <div className=' d-inline ms-2 h-100 w-20 fs-5 ' >
              finalPrice
            </div>

                        
                    </div>
                    <hr></hr>
          <button className={`btn btn-success justify-center ms-2  `} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>




        </div>
    )
}

export default Card