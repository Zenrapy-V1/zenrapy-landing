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
                <p>Zenrapy is a mobile massage booking paltform for clients where we aim to
                    connect clients to professional massues of their choice which is closest to
                    them, over the recent trend of times we have come to discover that people
                    no longer want to go to spas to get massaged This is because massage is
                    for relaxation anyways and did rather get massaged in their comfort zone 
                    instead of stressing around for it..........................
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