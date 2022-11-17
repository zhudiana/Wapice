import React from "react";
import "./Services.css";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <div className="services-container">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
      </div>
      <ul className="list-contianer">
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/analytics-artificial-intelligence-and-big-data/big-data.svg?g-18ac159b"
          />{" "}
          <h4>Analytics, Artificial Intelligence and Big Data</h4>
        </li>

        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/cloud-services/laptop.svg?g-18ac159b"
          />{" "}
          <h4>Cloud Services</h4>
        </li>

        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/consulting/consulting.svg?g-18ac159b"
          />

          <h4>Consulting</h4>
        </li>
      </ul>
      <ul className="list-contianer">
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/design-services/computer-graphic.svg?g-18ac159b"
          />

          <h4>Design Services</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/devops/process.svg?g-18ac159b"
          />

          <h4>DevOps</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/electronics-design-and-device-manufacturing/planning.svg?g-18ac159b"
          />

          <h4>Electronics Design and Device Manufacturing</h4>
        </li>
      </ul>
      <ul className="list-contianer">
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/embedded-systems/chip.svg?g-18ac159b"
          />

          <h4>Embedded Systems</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/internet-of-things-services/internet-of-things.svg?g-18ac159b"
          />

          <h4>Internet of Things Services</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/security/password.svg?g-18ac159b"
          />

          <h4>Security</h4>
        </li>
      </ul>
      <ul className="list-contianer">
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/smart-energy-services/ecosystem.svg?g-18ac159b"
          />

          <h4>Smart Energy Services</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/technology-and-digitalization-services/programming.svg?g-18ac159b"
          />

          <h4>Technology and Digitalization Services</h4>
        </li>
        <li className="each-list">
          <img
            className="list-image"
            src="https://www.wapice.com/user/pages/02.services/web-and-mobile-solutions/mobile-design.svg?g-18ac159b"
          />

          <h4>Web and Mobile Solutions</h4>
        </li>
      </ul>
    </div>
  );
};

export default Services;
