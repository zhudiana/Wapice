import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

const Body1 = () => {
  return (
    <>
      <div className="body1-container">
        <div className="body1-text">
          <h2 className="on-text">
            From ideas to applications
            <strong className="yellow-lightest"> in minutes</strong>
          </h2>
          <p>
            <span className="under-text">
              With <b>IoT-TICKET®</b>, Wapice's award-winning solution
            </span>
          </p>
          <div className="read_more-container">
            <Link to="/" className="text-link">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
