import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import BodySession from "../../assets/bodySession.png";
import BookingBtn from "../BookingBtn"

const BookSession = () => {
  return (
    <section className="book-session">
      <h2>Healthcare feels better at home</h2>
      <div className="book">
        <div className="booking-session-content">
          <h4>Book a session and Get Massaged in comfort</h4>
          <p>
            Book a session, Give a location, A massage therapist of your choice
            will be with you in a jiffy.
          </p>
          <div className="booking-session-btn">
            <BookingBtn />
          </div>
        </div>

        <div className="book-session-image">
          <img src={BodySession} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BookSession;
