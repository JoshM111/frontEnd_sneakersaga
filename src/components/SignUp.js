import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Signup = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confPassword, setConfPassword ] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();

    axios.post('http://18.117.145.31/', {
      firstName,
      lastName,
      email,
      password,
      confPassword
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  return(
    <div>
      <h1>SneakerSaga</h1>
      <h2>Create An Account</h2>
      <form onSubmit={onSubmitHandler}>
        <div className='registration'>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <button onClick={ () => navigate('/index')} className="homeBtn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup; 