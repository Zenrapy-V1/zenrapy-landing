import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo.png"


const NavBar = () => {

    return (  
        <div className='navbar'>
           <div className='logo'>
            <li>
                <img  src={Logo} alt="" />
                Zenrapy
             </li>
           </div>
            <div className='nav-items'>
                <li>
                    Home
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Blogs
                </li>
                <li>
                    About Us
                </li>
                <li className='join'>
                Are you a therapist? Join Us
                <span><BsChevronDown/></span>
                </li>
            </div>
           
        
        </div>
    );
}
 
export default NavBar;