import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiMenu } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import logo from "../../images/logo.png";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons/lib";

const Header2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <nav className="navbar"> */}
      {/* <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FiX className="icons" /> : <BiMenu className="icons" />}
        </div> */}

      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
          <Link to="#" className="menu-bars">
            <BiMenu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#">
                <FiX className="close-icon" />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      {/* </nav> */}
    </>
  );
};

export default Header2;
