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
        <p className="summium-lower-title">
          With Wapice's <b>Summium®</b> product family{" "}
        </p>
        <p className="summium-article">
          Summium Sales digitalization platform links customer and salesman in
          one sales process in a completely new way. Create quotes based on
          requests for quote received from customer – all in one platform.
        </p>
        <p className="summium-button">Read more</p>
      </div>
      <div className="join-team-article-container">
        <img src="https://www.wapice.com/user/pages/01.home/_latest-openings/woman-interviewer-mod.svg?g-18ac159b" />
      </div>
    </div>
  );
};

export default Summium;
