import React, { useState } from 'react'
import "./index.scss"
import gettingStartedIllustration1 from "../../assets/gettingStartedIllustration1.png"
import gettingStartedIllustration2 from "../../assets/gettingStartedIllustration2.png"
import gettingStartedIllustration3 from "../../assets/gettingStartedIllustration3.png"
import gettingStartedIllustration4 from "../../assets/gettingStartedIllustration4.png"
import gettingStartedIllustration5 from "../../assets/gettingStartedIllustration5.png"
import gettingStartedIllustration6 from "../../assets/gettingStartedIllustration6.png"

const gettingStarted = () => {

    return (  
        <div className='wrapper'>
            <p className='getting-started'>How to get started?</p>
            {/* Illustration1 */}
            <div className="gpt3__possibility  section__padding" id="possibility">
                <div className="gpt3__possibility-content">
                    <div className="gpt3__possibility-image1">
                        <img src={gettingStartedIllustration1} alt="possibility"/>
                    </div>
                    <h1 className="gradient__text">
                        Book a session
                    </h1>
                    <p>
                        Book a massage session in seconds,<br/> 
                        schedule a massage anytime from anywhere
                    </p>
                </div>
                <div className="gpt3__possibility-image">
                    <img className='main-illustration' src={gettingStartedIllustration2} alt="possibility"/>
                </div>
            </div>
            {/* Illustration2 */}
            <div className="gpt3__possibility reverse-illustration section__padding" id="possibility">
                <div className="gpt3__possibility-image">
                    <img className='main-illustration' src={gettingStartedIllustration3} alt="possibility"/>
                </div>
                <div className="gpt3__possibility-content2">
                    <div className="gpt3__possibility-image1">
                        <img  src={gettingStartedIllustration4} alt="possibility"/>
                    </div>
                    <h1 className="gradient__text">
                        We come to you
                    </h1>
                    <p>
                        You book a preferred massage therapist<br/>
                        of your choice closest to you and we come to you.
                    </p>
                </div>
            </div>
            {/* Illustration3 */}
            <div className="gpt3__possibility section__padding" id="possibility">
                <div className="gpt3__possibility-content">
                    <div className="gpt3__possibility-image1">
                        <img src={gettingStartedIllustration5} alt="possibility"/>
                    </div>
                    <h1 className="gradient__text">
                        Chill and relax
                    </h1>
                    <p>
                        Now relax and let the therapist work their<br/>  
                        magic to heal your body,
                    </p>
                </div>
                <div className="gpt3__possibility-image">
                    <img className='main-illustration' src={gettingStartedIllustration6} alt="possibility"/>
                </div>
            </div>
        </div>
    );
}
 
export default gettingStarted;