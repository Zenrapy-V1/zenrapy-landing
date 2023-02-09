import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";
import About from "../../assets/about.png";
import AboutMission from "../../assets/mission.png";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-top">
        {/* <div className="right-img">
          <img src={About} alt="" />
        </div> */}

        <div className="right-about">
          <h3>
            Making it easier for users to get real relaxation, wellness and
            access to Alternative/Integrated medicinal practice in Africa
          </h3>
          <p>
            Zenrapy is a health-tech platform looking to solve various
            patients/clients problem by introducing the innovation of tech for
            health purposes and giving power to users.
          </p>
          <p className="right-about-content2">
            There are a lot of problems we lookout to solve in the nearest
            future but at our most early stage we want to make sure
            patients/clients who needs professional massage therapy gets what
            they need by us onboarding licensed massage therapists and we create
            an on-demand booking platform for users In the nearest future we
            look to solve other pressing demands/needs we can solve in the
            health industry as tech innovators. however one at a time they say
            so we keep building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
