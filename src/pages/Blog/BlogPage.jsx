import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";
import About from "../../assets/about.png";
import wavingHand from "../../assets/wavingHand.svg";
import Smiley from "../../assets/smiley.svg";
import Polygon1 from "../../assets/Polygon1.svg";
import Polygon2 from "../../assets/Polygon2.svg";
import Polygon4 from "../../assets/Polygon4.svg";
import Polygon5 from "../../assets/Polygon5.svg";
import BlogAwait from "../../assets/blogAwait.png";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="top-section">
        <h1>
          <span className="heading-dark">
            Hello <img src={wavingHand} alt="wavinghand" />, We are Zenrapy Blog.
          </span>
          <span className="heading-light">
            {" "}
            see our thoughts, stories and ideas
          </span>
        </h1>
      </div>

      <div className="bottom-section">
        <h2>Page Under Construction</h2>
        <div className="context-container">
          <div className="context">
            <p>
              Hello, the page you are tying to view is under construction and
              temporarily unavailable. The team is doing some work behind the
              scenes, do check back later. <img src={Smiley} className="smiley" alt="smiley" /> <br /> 
              <p className="thanks">Thank you</p>
            </p>
          </div>
          <div className="context-image-container">
            <img src={BlogAwait} alt="" />
          </div>
        </div>
      </div>
      <div className="polygonContainer">
        <img className="polygon1" src={Polygon1} alt="" />
        <img className="polygon2" src={Polygon2} alt="" />
        <img className="polygon3" src={Polygon4} alt="" />
        <img className="polygon4" src={Polygon5} alt="" />
      </div>
    </div>
  );
};

export default BlogPage;
