import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    <footer className=" bg-success  py-3 border-top">
      <div className="d-flex align-items-center justify-content-center  flex-wrap">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        </Link>
        <span className="text-white">© 2024 <i>HungryHub</i>, Inc</span>
      </div>
    </footer>
  </div>
 
  )
}

export default Footer
