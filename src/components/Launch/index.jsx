import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'



const Launch = () => {

    return (  
        <div className='launch'>
           <h2>WE LAUNCH SOON!!!! 🥳</h2>
           <p>Sign up to join our waitlist and get a free massage session when we launch</p>
           <p>Also get amazing discounts and be updated about our journey before we launch</p>
           <div className='join-form'>
            <input type="text" placeholder='Input mail address'/>
            <button>Joint waitlist</button>
           </div>
            
        </div>
    );
}
 
export default Launch;