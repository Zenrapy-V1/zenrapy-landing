import React from "react";
import "./index.scss";
import Provider from "../../assets/providernetwork.png";

const ProviderNetwork = () => {
  return (
    <div className="provider">
      <div className="providerWrapper">
        <div className="imgProvider">
          <img src={Provider} alt="Providernetworkimage" />
        </div>
        <div className="rightProviderContent">
          <div className="rightProvider">
            <h6>Join zenrapy provider Network</h6>
            <p>Bring your expertise to the most trusted network of in-home healthcare professionals.</p>
          </div>
          <div className="providerBtn">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderNetwork;
