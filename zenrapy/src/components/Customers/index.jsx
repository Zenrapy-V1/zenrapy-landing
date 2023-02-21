import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown } from "react-icons/bs";
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
//import Customer3 from "../../assets/customer3.png"
import Customer3 from "../../assets/customer4.png";

const Customer = () => {
  return (
    <div className="customer">
      <h2 className="heading">What our customers say</h2>
      <div className="customer-column">
        <div className="block">
          <div className="customer-img">
            <img src={Customer1} alt="" />
          </div>
          <p className="customer-comment">
            “If you need real relaxation and professional massage check zenrapy,
            they onboard real professional massage therapists”
          </p>
          <p className="customer-comment-sub">Femi A ~ lagos Nigeria</p>
        </div>

        <div className="block">
          <div className="customer-img">
            <img src={Customer2} alt="" />
          </div>
          <p className="customer-comment">
            “After the long week, I book massage therapists from zenrapy and I
            get topnotch relaxation, would highly recommend”
          </p>
          <p className="customer-comment-sub">Ige C ~ Abuja Nigeria</p>
        </div>

        <div className="block block3">
          <div className="customer-img">
            <img className="customer3" src={Customer3} alt="" />
          </div>
          <p className="customer-comment">
            “Very professional and skilled therapists, will book again”
          </p>
          <p className="customer-comment-sub">Jide S ~ Portharcourt Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
