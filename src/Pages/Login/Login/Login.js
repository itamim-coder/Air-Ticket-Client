import React from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import './Login.css'

const Login = () => {
    const {user, signInUsingGoogle, logOut} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)

        })
        

    }

    return (
        <div className="text-center m-5">
<form action="">
<h1>User Login</h1>
<label htmlFor="email"> <b>User Email </b></label>
     <input type="text" placeholder="enter username" name="" id="" required /> <br />
     <label htmlFor="password"><b>Password </b></label>
      <input type="password" placeholder="enter password" name="" id="" required /> <br />
       <input type="submit" id="" /> 
       <p>or</p>
<h3>log in via</h3>
   <button onClick={handleGoogleLogin} className="btn btn-danger">
       Google Sign In
   </button>

        
    </form>	
	</div>

    );
};

export default Login;