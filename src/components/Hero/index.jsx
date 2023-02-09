import React, { useState } from "react";
import "./index.scss";
// import HeroImage from "../../assets/heroImage.png"
// import MobileHeroImage from "../../assets/mobileHeroBg.png"
// import HeroImage1 from "../../assets/heroImage1.png";
// import MobileImage from "../../assets/straight.png";
import mainHome from "../../assets/mainHome.png";
import mainHomeMobile from "../../assets/mainHomeMobile.png";
import HeroBg2 from "../../assets/heroBg2.png";
import HeroBg4 from "../../assets/heroBg4.png";
import heroTick from "../../assets/hero-tick.png";
import BookingBtn from "../BookingBtn";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeroSection = () => {
  return (
    <header>
      <div className="hero">
        <div className="pre-left">
          <div className="left">
            <h3>
              <span className="hero-sub-color">Premium</span> Health <br />{" "}
              Massage from <br /> professional Therapists
            </h3>
            <div className="left-text">
              <ul>
                <li className="hero-list">
                  Get Massaged by Top and Talented Massage Therapists around
                  your locality.
                  <img className="hero-tick" src={heroTick} alt="" />
                </li>
                <li className="hero-list">
                  Licensed professionals that heals the pain in your body and
                  help you reduce stress?
                  <img className="hero-tick" src={heroTick} alt="" />
                </li>
                <li className="hero-list">
                  Makes your search for real massage ends?
                  <img className="hero-tick" src={heroTick} alt="" />
                </li>
                <li className="hero-list">
                  Leave it to us we got you covered, we built a uber for massage
                  therapists
                </li>
              </ul>
            </div>
            <div className="hero-btn-laptop">
              <BookingBtn />
            </div>
          </div>
        </div>
        <div className="hero-btn-mobile">
          <BookingBtn />
        </div>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          initiallyVisible="true"
        >
          <div className="right">
            {/* <img className='main-image' src={HeroImage} alt="" />  */}
            <div className="mainimage-container">
              {/* <img className="hero-image1" src={HeroImage1} alt="" /> */}
              <img className="main-image" src={mainHome} alt="" />
            </div>
            <div className="mobileimg-container">
              <img className="mobileHeroImg" src={mainHomeMobile} alt="" />
              {/* <img src={MobileImage} className="mobileImg" alt="" /> */}
            </div>
            <img className="ellipse" src={HeroBg2} alt="" />
            <img className="sparkle" src={HeroBg4} alt="" />
          </div>
        </AnimationOnScroll>
      </div>
    </header>
  );
};

export default HeroSection;
