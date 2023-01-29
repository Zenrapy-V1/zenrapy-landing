import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import About from "../../assets/about.png"
import AboutMission from "../../assets/mission.png"

const AboutPage = () => {

    return (  
        <div className='about-page'>
           <div className='about-top'>
            <div className='right-img'>
                <img src={About} />
            </div>
            
            <div className='right-about'>
                <h3>By aiming to make mobile massage bookings more 
                    accessible, we founded zenrapy!
                </h3>
                <p>
                    Zenrapy, A mobile booking on-demand wellness platform connecting users to top, talented,
                    and licensed massage professionals, allows users to book or schedule same-day/ at later
                    time wellness services in the comfort of their home/offices. We are specialists and
                    innovators in connecting patients and clients with trusted and experienced professionals
                    (uber for masseurs) Our mission is to bring comfort to patients and clients by making 
                    mobile massage more accessible, we look forward to making vital and wellness treatments
                    seamless and more accessible to everyone. wherever you are, we come to you.
                </p>
            </div>
           </div>
           <div className='mission-section'>
                <h2>Our Mission/Vission</h2>
                <div className='mission'>
                    <p>When it comes to relaxation and health related issue, we are a team
                        of technopreneurs who have an aim to make it more accessible and 
                        seamlessly easy for users like you, we aim to ease your stress by 
                        founding zenrapy, let the professionals come to you!
                    </p>
                    <img src={AboutMission} />
                </div>
           </div>
           
        </div>
    );
}
 
export default AboutPage;