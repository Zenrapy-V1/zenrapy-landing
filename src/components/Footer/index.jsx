import React, { useState } from 'react'
import "./index.scss"
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import Logo from "../../assets/logo1.png"


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
                        Zenrapy connects you to top talented massage 
                        therapists anywhere around the world.
                  </p>
                  <div className='socials'>
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                  </div>
                </div>

                <div className='right-section'>
                    <div className='product'>
                        <h5>Our Product</h5>
                        <ul>
                            <li>
                            Become a zenrapist
                            </li>
                            <li>
                            Create an account
                            </li>
                            <li>
                            Terms of service
                            </li>
                        </ul>
                        
                    </div>
                    <div className='product help'>
                    <h5>Help and Support</h5>
                        <ul>
                            <li>
                            Help center 
                            </li>
                            <li>
                            Contact
                            </li>
                            
                        </ul>

                    </div>
                    <div className='about product'>
                    <h5>About</h5>
                        <ul>
                            <li>
                              About Zenrapy
                            </li>
                            <li>
                              Career 
                            </li>
                            <li>
                              FAQs
                            </li>
                            <li>
                              Blog
                            </li>
                            <li>
                                Security and privacy
                            </li>                            
                        </ul>
                    </div>                    
                </div>


            </div>
          
        </section>
        
    );
}
 
export default Footer;