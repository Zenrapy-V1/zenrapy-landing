import React, { useState } from "react";
import "./index.scss";
import linkedinIcon from "../../assets/linkedin.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import whatsappIcon from "../../assets/whatsapp.png";
import Logo from "../../assets/logo1.png";
// import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* <hr  className='horizontal-line'/> */}
        <div className="footer">
          <div className="left-section">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <p>Zenrapy connects you to top talented masssage therapists.</p>
          </div>

          <div className="right-section">
            <div className="socials">
              <div>
                <a
                  href="https://www.linkedin.com/company/zenrapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedin logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/zenrapy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="facebook logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/invites/contact/?i=1gbvque4eyyjs&utm_content=ovrg5bf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="instagram logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/zenrapy_?t=QZCU_jsTK97_FbcMV3lqcQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="twitter logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/message/YNQGXF43I7LEA1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsappIcon} alt="whatsapp logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
