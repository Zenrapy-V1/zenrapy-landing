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

const Landing = () => {
 const [modalShow, setModalShow] = useState(false);

    return (  
        <div className='landing'>
            <NavBar />
           <HeroSection />
           <Launch modalShow={modalShow} setModalShow={setModalShow} />
           <Therapist />
           <Subscribe modalShow={modalShow} setModalShow={setModalShow} />
           <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible="true">
              <Booking />
           </AnimationOnScroll>
           <Footer />
           <VerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </div>
    );
}
 
export default Landing;



