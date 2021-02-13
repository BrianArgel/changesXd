import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import "../style/app.scss";
import principalLogo from '../../public/assets/logos/logo1.png'
import secondLogo from '../../public/assets/logos/group.png'

// eslint-disable-next-line arrow-body-style
const Login = () => {

  const [ handlerUser, setHanldeUser] = useState({
    
    email: '',
    password: ''
  })
  const LoginInAccount = (e) => {
    setHanldeUser({
      ...handlerUser,
      [e.target.name] : e.target.value
    })
  }
  return (
    <>
      <section className="principal-content">
        <div className="section-one"> 
          <img
            src={principalLogo}
            alt="logo" 
            className="image-main"
          />
          <img src={secondLogo} className="image-group" alt="logo"  />

        </div>
        <div className="section-two">
          <h2>Sign in to COMFECO</h2>
          <div className="container-form">
            <form>
              <br />
              <label htmlFor="email">
                Username or Email address 
                <br />
                <input
                  type="text" 
                  id="email"
                  name="email" 
                  placeholder="input email"
                  onChange={LoginInAccount}
                />
                <br />
              </label>
              <label htmlFor="password">
                password
                <br />
                <input
                  type="text" 
                  id="password"
                  name="password"
                  placeholder="input password" 
                  onChange={LoginInAccount}
                />
              </label>
              <br />
              <button type="submit" className="button_submit"> Sign In </button>
            </form>
            <Link to="/" className="forgot-password">Forgot password</Link>
            <div className="create-account">
              <span>
                you don&#39;t have a account
              </span>
              <Link to="/register" className="create">Registrarse</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Login;
