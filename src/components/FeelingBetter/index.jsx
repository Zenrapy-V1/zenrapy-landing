import React, { useState } from "react";
import "./index.scss";
import feelBetterSquare2 from "../../assets/feelBetterSquare2.png";
import BookingBtn from "../BookingBtn";

const feelingBetter = () => {
  return (
    <div className="feelingbetter">
      <p className="heading">Want to feel Better Instantly?</p>
      <div className="feel-better" id="possibility">
        <div class="card-wrapper-container">
          <div class="card-wrapper">
            <div className="card-body"></div>
            <div class="card-img">
              <img src={feelBetterSquare2} alt="possibility" />
            </div>
          </div>
        </div>

        <div className="content-text">
          <p>
            Book a relaxing deep tissue, sports, or Swedish massage to relieve
            stress and pain while improving circulation and healthy body
          </p>
          <div className="btn-feeling-better">
            <BookingBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default feelingBetter;
