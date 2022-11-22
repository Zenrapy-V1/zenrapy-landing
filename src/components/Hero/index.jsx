import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import HeroImage from "../../assets/heroImage1.png"
import HeroBg2 from "../../assets/heroBg2.png"
import MobileImage from "../../assets/mobileHeroImg.png"


const HeroSection = () => {

    return (  
        <div className='hero'>
           <div className='left'>
            <h3>
                Just like Uber! we connect you to Top and Talented therapists anywhere in the world.
            </h3>
            <div className='left-text'>
                <p>
                    We aim to connect you to the best top talented massage 
                    therapists anywhere around the world to ease your pain and
                    give you a topnotch relaxation.
                </p>
                <button 
                onClick={(e) => {e.preventDefault(); window.location.replace('/#launch');}}
                >
                    Join the waitlist
                </button>
            </div>
           </div>
            <div className='right'>
                <img className='main-image' src={HeroImage} alt="" /> 
                <img className="mobile-img" src={MobileImage} />
                <img className='elipse' src={HeroBg2} alt="" />
            </div>
            
        </div>
    );
}
 
export default HeroSection;