import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Therapist1 from "../../assets/therapist1.png"
import Therapist2 from "../../assets/therapist2.png"
import Therapist3 from "../../assets/therapist3.png"



const Therapist = () => {

    return (  
        <div className='therapist'>                  
            <h3>With About 2000+ Talented Therapists on Board </h3>
            <p>
                We are constantly training and onboarding, talented and skilled therapists everywhere around 
                the world to help ease people’s pain and give them a feeling of real relaxation, whether you want 
                a walk-in service or a home come to service we have therapists ready to attend to you.
            </p>
            <div className='therapist-image'>
                <div>
                    <img src={Therapist1} alt="" />
                </div>
                <div>
                    <img src={Therapist2} alt="" />
                </div>
                <div>
                    <img src={Therapist3} alt="" />                    
                </div>
            </div>

        </div>
    );
}
 
export default Therapist;