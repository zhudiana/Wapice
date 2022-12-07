import React from "react";
import "./Footer.css";
import logo from "../../images/logo2.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-list-container">
        <img src={logo} alt="logo" className="logo2-img" />
        <address className="places-container">
          {/* <span className="address-title">Wapice Ltd.</span>
          <div>
            <p>Vaasa (HQ),</p>
            <p>Vaasa (Runsor),</p>
            <p>Vaasa (Energylab),</p>
            <p>Helsinki ( Hyvinkää),</p>
            <p> Jyväskylä,</p>
            <p>oulu,</p>
            <p> Seinäjoki,</p>
            <p> Tampere,</p>
            <p> Turku</p>
          </div> */}
        </address>
        <address className="social-media-icons-container">
          <a className="social-media-icon">
            <FaFacebook className="each-icon" />
          </a>
          <a className="social-media-icon">
            <FaLinkedin />
          </a>
          <a className="social-media-icon">
            {" "}
            <FaTwitter />
          </a>
          <a className="social-media-icon">
            {" "}
            <FaYoutube />
          </a>
          <a className="social-media-icon">
            {" "}
            <FaInstagram />
          </a>
        </address>
        <div>
          <p className="phone-number">
            <FaPhoneAlt /> +358 10 277 5000
          </p>
          <p className="phone-number">
            <FaEnvelope /> info@wapice.com
          </p>
          <p className="phone-number">
            <FiInfo /> Our pricy policy
          </p>
          <p className="white-text1">
            We use cookies to ensure you get the best <br /> experience on our
            website.
          </p>
          <p className="white-text2">Copyright © 2022 Wapice Ltd.</p>
        </div>
      </div>

      <div className="second-column-container">
        <span>Latest news</span>
        <table className="table-content">
          <tbody>
            <tr>
              <td className="time-container">
                <time
                  class="menu-label yellow-lightest"
                  datetime="2022-11-09T09:00:00+02:00"
                >
                  9th Nov
                </time>
              </td>
              <td className="p-xs">Smart City Expo World Congress</td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-11-02T11:00:00+02:00"
                >
                  2nd Nov
                </time>
              </td>
              <td className="p-xs">
                Wapice joins the key partners of Olympic medalist Joni Mäki
              </td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-10-25T15:00:00+03:00"
                >
                  25th Oct
                </time>
              </td>
              <td className="p-xs">
                Meet Wapice at the SPS22 trade fair in Germany 8.-10.11.2022
              </td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-10-18T09:00:00+03:00"
                >
                  18th Oct
                </time>
              </td>
              <td className="p-xs">
                Bauma 22 - Are you near Munich on October 24-30?
              </td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-10-17T09:00:00+03:00"
                >
                  17th Oct
                </time>
              </td>
              <td className="p-xs">Welcome to the Energia 2022 Event</td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-10-14T17:00:00+03:00"
                >
                  14th Oct
                </time>
              </td>
              <td className="p-xs">.NET Conf 2022 watch party</td>
            </tr>
            <tr>
              <td class="py-xs pr-xs has-text-right">
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-10-14T12:00:00+03:00"
                >
                  14th Oct
                </time>
              </td>
              <td className="p-xs">
                IoT-TICKET® Partner: Nobody cares about your old building
                automation
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div class="columns">
          <aside>
            <span class="menu-label-remove">Navigation</span>
            <nav className="navigation-list">
              <p>
                <a href="/services">Services</a>
              </p>
              <p>
                <a href="/products">Products</a>
              </p>
              <p>
                <a href="/careers">Careers</a>
              </p>
              <p>
                {" "}
                <a href="/customers">Customers</a>
              </p>
              <p>
                {" "}
                <a href="/news">News &amp; Events</a>
              </p>
              <p>
                {" "}
                <a href="/insights">Insights</a>
              </p>
              <p>
                {" "}
                <a href="/contact">Contact</a>
              </p>
            </nav>
          </aside>
          <aside class="column menu">
            <span class="menu-label">Product Sites</span>
            <ul class="menu-list">
              <li>
                <a>IoT-Ticket</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Footer;
