import React from 'react';
import {FaCoins} from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <FaCoins className="icon" />
            <h1>Crypto <span className="purple">Search</span></h1>
            <h6>by Anthony Stenson</h6>
        </div>
    </div>
  )
}

export default Navbar;