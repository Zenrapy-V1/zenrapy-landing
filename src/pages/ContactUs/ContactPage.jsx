import React, { useState } from 'react'
import "./index.scss"
import ContactBg from "../../assets/contactBg.png"
import { BsChevronDown } from 'react-icons/bs'



const ContactPage = () => {

    return (  
        <div className='contact-page'>
           <div className='contact-container'>
            <div className='left'>
                <h3>Contact Us</h3>
                <p>Send a message to us, we will receive it.</p>
                <form>
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="text" placeholder='Subject'/>
                    <textarea placeholder='Your Message'>                
                    </textarea>
                    <button type='submit'>Submit</button>
                </form>

            </div>
            <div className='right'>
                <div className='call'>
                <h2>
                    Or
                </h2>
                <h3>
                    Call Us Now
                </h3>
                </div>
               
            <button>Call</button>
            </div>
           
           </div>
           <div className='down'>
                <p>We respect your privacy and your information can’t be shared with a third party</p>
            </div>
           
        </div>
    );
}
 
export default ContactPage;