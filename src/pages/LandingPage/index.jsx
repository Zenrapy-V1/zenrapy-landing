import React, { useState } from 'react'
import "./index.scss"
import NavBar from "../../components/Navbar/Navbar"
import HeroSection from "../../components/Hero"
import Launch from "../../components/Launch"


const Landing = () => {

    return (  
        <div className='landing'>
            <NavBar />
           <HeroSection />
           <Launch />
        </div>
    );
}
 
export default Landing;