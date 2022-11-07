import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit="">
                <input placeholder='Your email' type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-john ? <Link to='/register'>Create Account</Link></p>
            <div>--------or--------</div>
            <br />
            <button onClick={signInUsingGoogle} className='btn-regular'>Google Sign In</button>
        </div>
    );
};

export default Login;