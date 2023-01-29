import React, { useState } from 'react'
import "./index.scss"
import HeroImage from "../../assets/heroImage1.png"
import HeroBg2 from "../../assets/heroBg2.png"
import HeroBg4 from "../../assets/heroBg4.png"
import MobileImage from "../../assets/heroImage2.png"
import heroTick from "../../assets/hero-tick.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const HeroSection = () => {

    return (  
        <div className='hero'>
           <div className='left'>
                <h3> 
                    <span className='hero-sub-color'>Premium</span> Health <br/> Massage from <br/> professional Therapists
                </h3>
                <div className='left-text'>
                    <ul>
                        <li className='hero-list'>
                            Get Massaged by Top and Talented Massage Therapists <br/> around your locality.
                            <img className='hero-tick' src={heroTick} alt="" />
                        </li>
                        <li className='hero-list'>
                            Licensed professionals that heals the pain in your <br/> body and help you reduce stress?
                            <img className='hero-tick' src={heroTick} alt="" />
                        </li>
                        <li className='hero-list'>
                            Makes your search for real massage ends?
                            <img className='hero-tick' src={heroTick} alt="" />
                        </li>
                        <li className='hero-list'>
                            Leave it to us we got you covered, we built a uber <br/> for masseurs
                        </li>                          
                    </ul>
                </div>
               <a target='_blank' href={'https://wa.me/message/YNQGXF43I7LEA1'}>
                    <button  className='hero-button'>Book a session</button>
                </a>
           </div>
            <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible="true">
              <div className='right'>
                <img className='main-image' src={HeroImage} alt="" /> 
                <img className="mobile-img" src={MobileImage} />
                <img className='elipse' src={HeroBg2} alt="" />
                <img className='sparkle' src={HeroBg4} alt="" />
            </div>
           </AnimationOnScroll>   
        </div>
    );
}
 
export default HeroSection;
