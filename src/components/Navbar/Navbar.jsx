import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import "./index.scss";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={`menu ${isOpen ? "show" : ""}`}>
          <div>
            <Link
              to="/"
              className={`link ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/blog"
              className={`link ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className={`link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About Us
            </Link>
          </div>
          <div className=" joinus">
            Are you a therapist?
            <Link to="/join-us" style={{ textDecoration: "none" }}>
              <span>Join Us</span>
            </Link>
          </div>
        </div>
        <button className="toggler" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
