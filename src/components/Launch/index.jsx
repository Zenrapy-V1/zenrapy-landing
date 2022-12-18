import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitMark from "../../assets/submitMark.png"
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import FlashMessage from "../../pages/layout/landingFlash"
import FlashMessageError from "../../pages/layout/flashMessage"


const Launch = ({modalShow, setModalShow, errorModalShow, setErrorModalShow}) => {
    const [success, setSuccess] = useState("false")
    const [error, setError] = useState("false")
    const [email, setEmail] = useState("")
    const [join, setJoin] = useState("Join waitlist")
    const navigate = useNavigate();

    console.log(email)

    const handleJoin = () => {
      setJoin("Joining...")
    }

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
    //  setModalShow(true)
     setJoin("Join waitlist")
     setSuccess(true)
        
    }).catch(error => {
      console.log(error)
      // setErrorModalShow(true)
      setJoin("Join waitlist")
      setError(true)
    })    
    
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
            onClick={handleJoin}
            >{join}</button>
           </form>
        </div>
        {
          success === true ? <FlashMessage color="warning" message="We are glad to have you!!! 🥳" /> : ""
        }
        {
          error === true ? <FlashMessageError color="warning" message="Whoops!!! There's an error, Please try again" /> : ""
        }
        </>
    );
}
 
export default Launch;