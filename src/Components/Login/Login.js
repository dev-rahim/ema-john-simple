import React from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/shop'

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then(result => {

                navigate(redirect_uri)
            })
    }
    return (
        <div>
            <h2>Login</h2>
            <form >
                <input placeholder='Your email' type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-john ? <Link to='/register'>Create Account</Link></p>
            <div>--------or--------</div>
            <br />
            <button onClick={handleSignInUsingGoogle} className='btn-regular'>Google Sign In</button>
        </div>
    );
};

export default Login;