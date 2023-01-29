import React, { useState } from 'react'
import "./index.scss"
import feelBetterSquare2 from "../../assets/feelBetterSquare2.png"

const feelingBetter = () => {

    return (  
        <div>
            <p className='heading'>Want to feel Better Instantly?</p>
            <div className="feel-better reverse-illustration section__padding" id="possibility">
                <div class="container">
                  <div class="card-wrapper">
                    <div class="card-img">
                      <img src={feelBetterSquare2} alt="possibility"/>
                    </div>
                    <div class="card-body">
                      <h5>Now is the time 🏖</h5>
                      <p>
                        Rest assured! You can't go wrong with Zenrapy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-text">
                  <div className='context'>
                      <p>
                          Book a relaxing deep tissue, sports, or Swedish<br/> 
                          massage to relieve stress and pain while<br/> 
                          improving circulation and healthy body
                      </p>
                      <a target='_blank' href={'https://wa.me/message/YNQGXF43I7LEA1'}>
                          <button  className='context-button'>Book a session</button>
                      </a>
                  </div>
                </div>
            </div>


        </div>
    );
}
 
export default feelingBetter;