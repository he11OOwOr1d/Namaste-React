import React from 'react';
import './Login.css'; // Separate CSS file

const Login = () => {
  return (
    <div className='login-body'>
      <div className="login-background">
      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <form className="login-form">
        <h3>Login Here</h3>
        <label htmlFor="username" >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit" className='login'>Log In</button>
        <div className="social"></div>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
