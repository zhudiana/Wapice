import React from "react";
import "./Summium.css";

const Summium = () => {
  return (
    <div className="summium-container">
      <div>
        <figure>
          <img
            className="summium-image"
            src="https://www.wapice.com/user/pages/01.home/_summium-highlight/summium-rocket-white.svg?g-18ac159b"
          />
        </figure>
      </div>
      <div className="summium-description">
        <h2 className="summium-title">Digitalize your Sales Process</h2>
        <p>
          With Wapice's <b>Summium®</b> product family{" "}
        </p>
        <p>
          Summium Sales digitalization platform links customer and salesman in
          one sales process in a completely new way. Create quotes based on
          requests for quote received from customer – all in one platform.
        </p>
        <p>Read more</p>
      </div>
    </div>
  );
};

export default Summium;
