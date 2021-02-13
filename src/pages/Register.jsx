import React from 'react';
import {Link} from 'react-router-dom'
import "../style/app.scss";
import principalLogo from '../../public/assets/logos/logo1.png'
import group_image from '../../public/assets/logos/group.png'
// eslint-disable-next-line arrow-body-style
const Register = () => {
    return (
      <>
        <section className="principal-content">
          <div className="section-one"> 
            <img src={principalLogo} alt="logo" className="image-main" />
            <img src={group_image} alt="photo group" className="image-group" />
              
          </div>
          <div className="section-two">
            <h2>Sign in to COMFECO</h2>
            <div className="container-form">
              <form>
                <br />
                <label htmlFor="email">
                  Username 
                  <br />
                  <input type="text" id="email" name="email" placeholder="input email" />
                  <br />
                </label>
                <label htmlFor="email">
                  Username or Email address 
                  <br />
                  <input type="text" id="email" name="email" placeholder="input email" />
                  <br />
                </label>
                <label htmlFor="password">
                  password
                  <br />
                  <input type="text" id="password" name="email" placeholder="input password" />
                </label>
                <br />
                <button type="submit" className="button_submit"> Sign In </button>
              </form>
              <Link to="/" className="forgot-password">Forgot password</Link>
              <div className="create-account">
                <span>
                  you don't have a account
                </span>
                <Link to="/" className="create">Registrarse</Link>
              </div>
            </div>
          </div>
        </section>
      </>
      )
    };
    
 
export default Register;