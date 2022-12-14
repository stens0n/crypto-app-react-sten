import React from 'react';
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
        <div className="navbar">
            <FaCoins className="icon" />
            <h1>Top 20 <span className="blue">Crypto</span></h1>
            <h6>by Anthony Stenson</h6>
        </div>
    </Link>
  )
}

export default Navbar;