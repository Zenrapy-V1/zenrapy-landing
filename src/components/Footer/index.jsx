import React, { useState } from 'react'
import "./index.scss"
import linkedinIcon from "../../assets/linkedin.png"
import facebookIcon from "../../assets/facebook.png"
import instagramIcon from "../../assets/instagram.png"
import twitterIcon from "../../assets/twitter.png"

import Logo from "../../assets/logo2.png"


const Footer = () => {

    return (  
        <section className='footer-section'>
            <div className='footer'>
              <div className='left-section'>
                <div className='logo'>
                    <li>
                        <img  src={Logo} alt="" />
                        
                    </li>
                 </div>
                  <p>
                    Zenrapy connects you to top talented 
                    masssage therapists.
                  </p>
                </div>

                <div className='right-section'>
                  <div className='socials'>
                    <a
                      href="https://twitter.com/zummitafrica"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="linkedin logo" />
                    </a>
                    <a
                      href="https://linkedin.com/company/zummit-africa/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={facebookIcon} alt="facebook logo" />
                    </a>
                    <a
                      href="https://youtube.com/channel/UC64g6K2pxfFwbFufOCcTJfQ"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={instagramIcon} alt="instagram logo" />
                    </a>
                    <a
                      href="https://youtube.com/channel/UC64g6K2pxfFwbFufOCcTJfQ"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={twitterIcon} alt="twitter logo" />
                    </a>
                  </div>                  
                </div>


            </div>
          
        </section>
        
    );
}
 
export default Footer;