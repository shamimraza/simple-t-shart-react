import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/review">Order Review</Link>
           <Link to="/grandpa">Grandpa</Link>
           <Link to="/checaboutkout">About</Link>
           <Link to="/contack">Contack</Link>

        </nav>
    );
};

export default Header;