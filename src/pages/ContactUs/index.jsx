import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer'
import ContactPage from './ContactPage'

const Contact = () => {

    return (  
        <div className='contact'>
            <NavBar />
            <ContactPage />
            <Footer />
           
        </div>
    );
}
 
export default Contact;