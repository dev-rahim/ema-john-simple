import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Create Account</h2>
            <form >
                <input type="email" name="" placeholder='Your Email' id="" />
                <br />
                <input type="password" name="" placeholder='Your Password' id="" />
                <br />
                <input placeholder='Re-enter Password' type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>
            <div>-------- or --------</div>
            <br />
            <button className='btn-regular'>Google Sign In</button>
        </div>
    );
};

export default Register;