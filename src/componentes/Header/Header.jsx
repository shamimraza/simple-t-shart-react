import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/review">Order Review</Link>
           <Link to="/checaboutkout">About</Link>
           <Link to="/contack">Home</Link>
        </nav>
    );
};

export default Header;