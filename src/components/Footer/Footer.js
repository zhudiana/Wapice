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
        <img src={logo} alt="logo" className="logo-img" />
        <address>
          <span>Wapice Ltd.</span>
          <ul>
            <li>Vaasa (HQ)</li>
            <li>Vaasa (Runsor)</li>
            <li>Vaasa (Energylab)</li>
            <li>Helsinki ( Hyvinkää)</li>
            <li> Jyväskylä</li>
            <li>oulu</li>
            <li> Seinäjoki</li>
            <li> Tampere</li>
            <li> Turku</li>
          </ul>
        </address>
        <address>
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </address>
        <div>
          <p>
            <FaPhoneAlt /> +358 10 277 5000
          </p>
          <p>
            <FaEnvelope /> info@wapice.com
          </p>
          <p>
            <FiInfo /> Our pricy policy
          </p>
          <span>
            We use cookies to ensure you get the best experience on our website.
          </span>
          <span>Copyright © 2022 Wapice Ltd.</span>
        </div>
      </div>

      <div>
        <span>Latest news</span>
        <table>
          <tbody>
            <tr>
              <td>
                <time
                  class="menu-label is-block yellow-lightest is-bold mb-xs"
                  datetime="2022-11-09T09:00:00+02:00"
                >
                  9th Nov
                </time>
              </td>
              <td>Smart City Expo World Congress</td>
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
              <td class="p-xs">
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
              <td class="p-xs">
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
              <td class="p-xs">
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
              <td class="p-xs">Welcome to the Energia 2022 Event</td>
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
              <td class="p-xs">.NET Conf 2022 watch party</td>
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
              <td class="p-xs">
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
            <span class="menu-label">Navigation</span>
            <nav>
              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/careers">Careers</a>
              <a href="/customers">Customers</a>
              <a href="/news">News &amp; Events</a>
              <a href="/insights">Insights</a>
              <a href="/contact">Contact</a>
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
