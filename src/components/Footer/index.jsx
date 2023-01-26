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
            {/* <hr  className='horizontal-line'/> */}
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
                      href="https://www.linkedin.com/company/zenrapy/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="linkedin logo" />
                    </a>
                    <a
                      href="https://www.facebook.com/zenrapy"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={facebookIcon} alt="facebook logo" />
                    </a>
                    <a
                      href="https://www.instagram.com/invites/contact/?i=1gbvque4eyyjs&utm_content=ovrg5bf"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={instagramIcon} alt="instagram logo" />
                    </a>
                    <a
                      href="https://twitter.com/zenrapy_?t=QZCU_jsTK97_FbcMV3lqcQ&s=09"
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