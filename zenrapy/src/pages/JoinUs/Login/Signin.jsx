import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo1.png";
import Loginpic from "../../../assets/loginpic.png";
import Google from "../../../assets/google.svg";
import "./signin.scss";

const Signin = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidEmail(emailOrPhone)) {
      // Handle login with email
      console.log(
        `Logging in with email: ${emailOrPhone}, password: ${password}`
      );
    } else if (isValidPhoneNumber(emailOrPhone)) {
      // Handle login with phone number
      console.log(
        `Logging in with phone number: ${emailOrPhone}, password: ${password}`
      );
    } else {
      // Display error message for invalid email/phone number
      console.log("Invalid email/phone number");
    }
  };

  const isValidEmail = (value) => {
    // Check if the value matches a valid email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidPhoneNumber = (value) => {
    // Check if the value matches a valid phone number pattern
    return /^\d{10}$/.test(value);
  };

  const handleForgotPassword = () => {
    // Handle forgot password flow
  };

  return (
    <div className="signWrapper">
      <div className="left">
        <div className="imgContainer">
          <img src={Loginpic} alt="loginpic" />
        </div>
      </div>

      <div className="right">
        <div className="logoContainer" to="/">
          <img src={Logo} alt="logo" />
        </div>
        <p className="login">Log In</p>
        <p className="signup">
          Don’t have an account yet? <Link to="/sign-up">Sign Up</Link>
        </p>
        <div className="googleOR">
          <div className="googlebtn">
            <button>
              <img src={Google} alt="google" />
              Continue with Google
            </button>
          </div>
          <p>OR</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="email">
            {/* <label> */}
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email/Phone Number"
            />
            {/* </label> */}
          </div>

          <div className="password">
            {/* <label> */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* </label> */}
          </div>

          <div className="remember-forgotten">
            <div className="checkbox">
              <label>
                <div>
                  <input
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={handleRememberMe}
                  />
                </div>
                <div>Remember me</div>
              </label>
            </div>
            <div className="forgotten">
              <button type="button" onClick={handleForgotPassword}>
                Forgotten Password?
              </button>
            </div>
          </div>
          <div className="loginBtn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
