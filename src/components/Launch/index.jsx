import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitMark from "../../assets/submitMark.png"
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import axios from "axios"
import {useNavigate} from 'react-router-dom';


const Launch = ({modalShow, setModalShow}) => {
    const [success, setSuccess] = useState("false")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    console.log(email)

 const submitForm = async (e) => {
    e.preventDefault();
    const emailData = {
      email   
     }

   axios.post("https://zenrapy.up.railway.app/landing_page/newsletter_subscription/",  emailData,{
      headers: {
        'Content-Type': 'application/json'
    }
    }).then((response) => {
     setEmail("");
     setModalShow(true)
        
    }).catch(error => {
      console.log(error)
    })    
    navigate.push("/about")
   }

    return (
        <>  
        <div id="launch" className='launch'>
           <h2>WE LAUNCH SOON!!!! 🥳</h2>
           <p>Sign up to join our waitlist and get a free massage session when we launch</p>
           <p>Also get amazing discounts and be updated about our journey before we launch</p>
           <form className='join-form' onSubmit={submitForm}>
            <input 
            name='email' 
            value={email} 
            type="text" 
             onChange={(e)=>setEmail(e.target.value)}
            placeholder='Input mail address'
            />
            <button
            type="submit" 
            name="submit"
            // onClick={() => setModalShow(true)}
            >Joint waitlist</button>
           </form>
            
        </div>
        </>
    );
}
 
export default Launch;