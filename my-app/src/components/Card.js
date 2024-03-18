import React from 'react'

const Card = ({foodName,item,options,ImgSrc}) => {

   
  let priceOptions = Object.keys(options);
    return (
      
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" ,"objectFit":"fill"}}>
                <img src={ImgSrc} style={{ "width": "18rem", "height": "150px" ,"objectFit":"fill" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                   
                    <div className='container w-100'>
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

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Card