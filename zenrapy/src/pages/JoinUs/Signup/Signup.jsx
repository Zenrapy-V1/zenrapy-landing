import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo1.png";
import Loginpic from "../../../assets/loginpic.png";
import Google from "../../../assets/google.svg";
import "./signup.scss";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(
      `Signing up with first name: ${firstName}, last name: ${lastName}, email: ${email}, phone number: ${phoneNumber}, password: ${password}`
    );
    // Handle sign-up logic here
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
        <p className="login">Sign Up</p>
        <p className="signup">
          Already have an account? <Link to="/sign-in">Login</Link>
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

        <form onSubmit={handleSignUp}>
          <div className="form">
            <div className="email">
              {/* <label> */}
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              {/* </label> */}
            </div>
            <div className="email">
              {/* <label> */}
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
              {/* </label> */}
            </div>
            <div className="email test">
              {/* <label> */}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {/* </label> */}
            </div>
            <div className="email test">
              {/* <label> */}
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
              {/* </label> */}
            </div>
            <div className="email password  test">
              {/* <label> */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {/* </label> */}
            </div>
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
          </div>
          <div className="loginBtn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
