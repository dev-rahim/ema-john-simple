import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {user?.displayName ?
                    <Link onClick={logOut} > Logout</Link>
                    :
                    <NavLink to="/login">Login</NavLink>
                }

            </nav>
        </div >
    );
};

export default Header;