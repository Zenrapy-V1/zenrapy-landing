import React, { useState } from 'react'
import "./index.scss"
import { AiOutlineMail} from 'react-icons/ai'
import SubImage from "../../assets/subscribeImage.png"

const Subscribe = () => {

    return (  
        <section className='sub-section'>     
            <div className='subscribe'>                  
                <h3>Anywhwere you are around the world, we have Talented
                    therapists waiting to help ease your pain.  
                </h3>
                <div className='sub-mail'>
                    <img src={SubImage} /> 
                    <div className='mail'>
                        <p>Suscribe to our news letter to get latest updtaes about
                            our services and weekly health tips 
                        </p>
                        <div className='input'>
                            <AiOutlineMail />
                            <input placeholder='Mail Address' />
                            <button                     
                            >Subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Subscribe;