import React, { useState } from 'react'
import "./index.scss"
import NavBar from "../../components/Navbar/Navbar"
import HeroSection from "../../components/Hero"
import FeelingBetter from "../../components/FeelingBetter"
import GettingStarted from "../../components/GettingStarted"
import Customer from '../../components/Customers'
import Booking from "../../components/BookSession"
import Footer from '../../components/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import VerticallyCenteredModal from "./Modal"
import ErrorVerticallyCenteredModal from "./ErrorModal"

const Landing = () => {
 const [modalShow, setModalShow] = useState(false);
 const [errorModalShow, setErrorModalShow] = useState(false);

    return (  
        <div className='landing'>
           <NavBar />
           <HeroSection />
           <FeelingBetter
            modalShow={modalShow} 
            setModalShow={setModalShow} 
            errorModalShow={errorModalShow} 
            setErrorModalShow={setErrorModalShow} />
           <GettingStarted />
           <Customer />
           <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible="true">
              <Booking />
           </AnimationOnScroll>
           <Footer />
           <VerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/>
           <ErrorVerticallyCenteredModal 
            show={errorModalShow}
            onHide={() => setErrorModalShow(false)}/>
        </div>
    );
}
 
export default Landing;



