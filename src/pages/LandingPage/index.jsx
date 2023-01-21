import React, { useState } from 'react'
import "./index.scss"
import NavBar from "../../components/Navbar/Navbar"
import HeroSection from "../../components/Hero"
import Launch from "../../components/Launch"
import Therapist from "../../components/Therapist"
import Subscribe from '../../components/Subscribe'
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
           <Launch 
            modalShow={modalShow} 
            setModalShow={setModalShow} 
            errorModalShow={errorModalShow} 
            setErrorModalShow={setErrorModalShow} />
           <Therapist />
           <Subscribe 
            modalShow={modalShow} 
            setModalShow={setModalShow} 
            errorModalShow={errorModalShow} 
            setErrorModalShow={setErrorModalShow}/>
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



