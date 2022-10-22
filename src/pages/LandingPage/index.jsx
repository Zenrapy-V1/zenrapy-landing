import React, { useState } from 'react'
import "./index.scss"
import NavBar from "../../components/Navbar/Navbar"
import HeroSection from "../../components/Hero"
import Launch from "../../components/Launch"
import Therapist from "../../components/Therapist"
import Subscribe from '../../components/Subscribe'
import Booking from "../../components/BookSession"
import Footer from '../../components/Footer'


const Landing = () => {

    return (  
        <div className='landing'>
            <NavBar />
           <HeroSection />
           <Launch />
           <Therapist />
           <Subscribe />
           <Booking />
           <Footer />
        </div>
    );
}
 
export default Landing;