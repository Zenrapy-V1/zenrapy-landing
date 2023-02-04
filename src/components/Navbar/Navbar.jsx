import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
const [activePage, setActivePage] = useState("/")
  // const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const manageClick = (href) => {
    setActivePage(href);
  };

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <img src={Logo} alt="" />
            </li>
          </Link>
        </div>
        
        <div className={toggle ? "nav-menu active" : "nav-menu"}>
          <div className="links">
            
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => manageClick(item.href)}
                  className={item.href === activePage ? "nav-link active" : "nav-link"}
                >
                  {item.name}
                </NavLink>
              ))}
          </div>
          
          <li className="join nav-item">
            Are you a therapist?
            <NavLink to="/join-us" style={{ textDecoration: "none" }}>
              <span>Join Us</span>
            </NavLink>
          </li>
        </div>

        <div className="nav-icon" onClick={handleClick}>
          {toggle ? <FaTimes /> : <AiOutlineMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// {/* <NavLink
//             to="/"
//             className={({ isActive }) => {}}
//             activeClassName="activeItem"
//             exact
//           >
//             <li className="linkbefore home nav-item">Home</li>
//           </NavLink>

//           <NavLink
//             to="/blog"
//             style={{ textDecoration: "none" }}
//             activeClassName="activeItem"
//           >
//             <li className="linkbefore nav-item">Blog</li>
//           </NavLink>

//           <NavLink
//             to="/about"
//             style={{ textDecoration: "none" }}
//             activeClassName="activeItem"
//           >
//             <li className="linkbefore nav-item">About Us</li>
//           </NavLink> */}