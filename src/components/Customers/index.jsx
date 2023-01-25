import React, { useState } from 'react'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Customer1 from "../../assets/customer1.png"
import Customer2 from "../../assets/customer2.png"
import Customer3 from "../../assets/customer3.png"

const Customer = () => {

    return (  
        <div className='customer'>                  
            <p className='heading'>What our customers say</p>
            <div className='customer-column'>
                <div className='block'>
                    <img src={Customer1} alt="" />
                    <p className='customer-comment'>
                        “If you need real relaxation and professional 
                        massage check zenrapy, they onboard real
                        professional massage therapists” 
                    </p>
                    <p className='customer-comment-sub'>Femi A ~ lagos Nigeria</p>
                </div>
                <div className='block'>
                    <img src={Customer2} alt="" />
                    <p className='customer-comment'>
                        “After the long week, I book massage therapists 
                        from zenrapy and i get topnotch relaxation, would 
                        highly recommend”
                    </p>
                    <p className='customer-comment-sub'>Ige C ~ Abuja Nigeria</p>
                </div>
                <div className='block'>
                    <img src={Customer3} alt="" />  
                    <p className='customer-comment'>
                        “Very professional and skilled therapists,
                        will book again” 
                    </p>        
                    <p className='customer-comment-sub'>Jide S ~ Portharcourt Nigeria</p>     
                </div>
            </div>

        </div>
    );
}
 
export default Customer;