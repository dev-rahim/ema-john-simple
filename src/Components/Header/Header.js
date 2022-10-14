import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav className='menu'>
                <a href="./shop">Shop</a>
                <a href="./review">Order Review</a>
                <a href="./inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;