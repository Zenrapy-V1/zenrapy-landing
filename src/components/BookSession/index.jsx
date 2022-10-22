import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo.png"
import BodySession from "../../assets/bodySession.png"


const NavBar = () => {

    return (  
        <section className='book-session'>
          <div className='book'>
             <div>
                <h4>
                 Book a session and Get Massaged in comfort 
                </h4>
                <p>
                    Book a session, Give a location, A massage therapist
                    of your choice will be with you in a jiffy.
                </p>
                <button>Join the waitlist</button>
             </div>  
             <div className='image'>
                <img src={BodySession} alt="" />
            </div>  
        
         </div>
        </section>
        
    );
}
 
export default NavBar;