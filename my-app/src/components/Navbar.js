import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CartModal from './CartModal';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../context/Cart';

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const cnt =Object.keys(cart).length
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/login");
  };

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark position-sticky" style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
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
            {(localStorage.getItem("authToken")) &&
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">My Orders</Link>
              </li>}
          </ul>
          {(!localStorage.getItem("authToken")) ?
            <form className="d-flex">
              <Link className="btn bg-white text-success mx-1 fw-bold" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1 fw-bold" to="/signup">Signup</Link>
            </form> :
            <div>
              <button className="btn bg-white text-danger fw-bold position-relative mx-4" onClick={handleCartClick}>
                <AddShoppingCartIcon /> Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cnt!==0 && cnt}
                </span>
              </button>
              <button onClick={handleLogout} className="btn bg-white text-danger fw-bold" >Logout</button>
            </div>}
        </div>
      </div>
      {showModal && <CartModal cartItems={cart} onClose={handleCloseModal} />}
    </nav>
  );
}

export default Navbar;
