import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text-container">
        <p className="header-text">
          <span>
            IoT Insights newsletter: stay up to date with the latest news from
            the world of IoT
            <Link to="/">
              <p className="subscribe-button">
                {" "}
                <FiExternalLink className="header-icon" />
                Subscribe now
              </p>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
