import React, { useState } from 'react'
import "./index.scss"
import { AiOutlineMail} from 'react-icons/ai'
import SubImage from "../../assets/subscribeImage.png"
import {useNavigate} from 'react-router-dom';
import axios from "axios"


const Subscribe = ({modalShow, setModalShow, errorModalShow, setErrorModalShow}) => {
    const [email, setEmail] = useState("")
    const [join, setJoin] = useState("Subscribe")
    const navigate = useNavigate();

        console.log(email)

         const handleJoin = () => {
        setJoin("Subscribing...")
        }

        const submitForm = async (e) => {
            e.preventDefault();
            const emailData = {
            email   
            }

        axios.post("http://zenrapy.up.railway.app/landing_page/newsletter_subscription/",  emailData,{
             headers: {
                'Content-Type': 'application/json'
            }
            }).then((response) => {
            setEmail("");
            setModalShow(true)
            setJoin("Subscribe")
                
            }).catch(error => {
            console.log(error)
            setErrorModalShow(true)
            setJoin("Subscribe")
            })    
            navigate.push("/about")
        }


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
                        <form className='input' onSubmit={submitForm}>
                            <AiOutlineMail />
                            <input
                                 name='email' 
                                value={email} 
                                type="text" 
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Mail Address' 
                             />
                            <button 
                            type="submit" 
                            name="submit"  
                             onClick={handleJoin}                 
                            >{join}</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Subscribe;