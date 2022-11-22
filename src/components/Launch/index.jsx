import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitMark from "../../assets/submitMark.png"
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'



const Launch = () => {
    const [success, setSuccess] = useState("false")

    return (
        <>  
        <div id="launch" className='launch'>
           <h2>WE LAUNCH SOON!!!! 🥳</h2>
           <p>Sign up to join our waitlist and get a free massage session when we launch</p>
           <p>Also get amazing discounts and be updated about our journey before we launch</p>
           <div className='join-form'>
            <input type="text" placeholder='Input mail address'/>
            <button
            onClick={() => (
                setSuccess("true")
            )}
            >Joint waitlist</button>
           </div>
            
        </div>
        {/* {success === "true" &&
       <div className='therapist_join'>
             <div className='page2'>
                 <div className='submit-page'>
                    <div className='submit-item'>
                       <img src={SubmitMark } />
                     </div>
                     <div className='submit-item'>
                      <h5>We have received your Application </h5>
                        
                    </div>
                     <div className='submit-item'>
                       <p>We will get back to you shortly, please check your mail</p>
                    </div>
                     <div className='submit-item'>
                      <Link to="/">
                         <button>Done</button>
                      </Link>
                    </div>
                    
                 </div>
                               
              </div>  
        </div>
       } */}
        </>
    );
}
 
export default Launch;