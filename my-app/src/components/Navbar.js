import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken')

    navigate("/login")
}
  return (
   
    <nav className="navbar navbar-expand-lg bg-success navbar-dark position-sticky"  style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
      
      <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fst-italic" to="/">Hungryhub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/" >My Orders</Link> 
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 fw-bold" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1 fw-bold" to="/signup">Signup</Link>
                            </form> :
                            <div>

                                  <div className="btn bg-white text-success mx-2 " >
                                   
                                        <AddShoppingCartIcon />
                                    
                                       Cart
                                </div>

                                <button onClick={handleLogout} className="btn bg-white text-danger fw-bold" >Logout</button></div>}
                    </div>
                </div>
    
      
    </nav>
  );
}

export default Navbar;
