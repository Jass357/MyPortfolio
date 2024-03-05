import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
    
  
    return (
        <div className="links">
          <Link to="Home"> Home </Link>
          <Link to="/About"> About </Link>
          <Link to="/Skills"> Skills </Link> 
          <Link to="/Projects"> Projects </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
    );
  }
  
  export default Navbar;