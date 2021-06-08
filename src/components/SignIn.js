import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Login = (props) => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();

    axios.post('http://18.117.145.31/user/login/', {
      email,
      password
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  
  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="registration">
          <h1>Welcome back!</h1>
          <h2>Please login below to gain access to your favorite sneakers.</h2>
          <label>Email </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password </label>
          <input
            type="password"
            name="password"            
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="invButtons">
        <button onClick={ () => navigate('/index')} className="homeBtn">Login</button>
        <h5>Not a member? Click <Link to='/signup'>here</Link> to signup!</h5>
        </div>
      </form>
    </div>
  )
}

export default Login; 