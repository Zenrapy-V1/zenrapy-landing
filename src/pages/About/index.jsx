import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer'
import AboutPage from './AboutPage'

const About = () => {

    return (  
        <div className='about'>
            <NavBar />
            <AboutPage />
            <Footer />
           
        </div>
    );
}
 
export default About;