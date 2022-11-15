import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import logo from "../../images/logo.png";

const Header2 = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FiX className="icons" /> : <BiMenu className="icons" />}
        </div>

        {/* <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Customers
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              News & Events
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Insights
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul> */}
      </nav>
    </>
  );
};

export default Header2;
