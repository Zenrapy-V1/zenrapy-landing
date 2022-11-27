import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown, } from 'react-icons/bs'
import { AiOutlineMenu,} from 'react-icons/ai'
import {FaTimes } from 'react-icons/fa'
import Logo from "../../assets/logo2.png"
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    // const [navbar, setNavbar] = useState(false);

        const handleClick = () => {
        setToggle(!toggle);
        };

    return (  
        <div className='nav-container'>
              
            <div className="navbar" >
                <div className='logo'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <img src={Logo} alt="" />                
                        </li>
                    </Link>
                </div>

                <div className={toggle ? "nav-menu active" : "nav-menu"}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className='home nav-item'>
                        Home
                    </li>
                </Link>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <li className='nav-item'>
                            Contact
                        </li>
                    </Link>

                    {/* <li>
                        Blogs
                    </li> */}
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <li className='nav-item'>
                            About Us                
                        </li>
                    </Link>
                    <Link to="/join-us" style={{ textDecoration: 'none' }}>
                        <li className='join nav-item'>                
                        <span>
                            <button>
                            Are you a therapist ? Join Us
                        </button></span>
                        </li>
                    </Link>
                    
                </div>
                
                <div className="nav-icon" onClick={handleClick}>
                    {toggle ? <FaTimes /> : <AiOutlineMenu />}
                </div>
            
            </div>

        </div>
    );
}
 
export default NavBar;