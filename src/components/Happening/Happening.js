import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./Happening.css";
import { FiCalendar } from "react-icons/fi";
import timelineElements from "./TimelineElements";
import { FiExternalLink } from "react-icons/fi";
import { EventData } from "./EventData";
import { FaNewspaper } from "react-icons/fa";

const Happening = () => {
  return (
    <div className="happening-main-container">
      <h2 className="happening-title">What's Happening</h2>
      <img
        src="https://www.wapice.com/user/pages/01.home/_whats-happening/globe-circular-optimized.svg?g-18ac159b"
        className="world-bg-image"
      />
      <div className="grid-wrapper">
        <div className="events-timeline">
          <h2>
            <FiCalendar />
            Events
          </h2>
          <span className="menu-label">Upcoming & Current Events</span>
          <div className="timeline-container">
            {timelineElements.map((item) => (
              <div className="timeline-item-content">
                <h3>{item.date}</h3>
                <p>{item.text}</p>
                <span className="circle">ou</span>
              </div>
            ))}
            <span className="choice-circle">ou</span>
            <span className="choice-circle2">ou</span>
          </div>
          <p className="inbetween-title">PAST EVENTS</p>
          <div className="under-button-container">
            <span className="under-button">No events in the past 3 months</span>
          </div>
          <div className="event-container">
            <img
              className="event-image"
              src="https://pbs.twimg.com/media/Fhg0Sd3XoAAcupY.jpg:small"
            />

            <p>
              A huge thanks to all of you who visited us in our common stand
              with Wirepas at #SPS Smart Production Solution 2022 exhibition in
              Nürnberg. Thanks for the inspiring exchange of thoughts on the
              future of automation!' Thanks Wirepas! #SPS #futureofautomation
              #Wapice #IoT #IoTTICKET pic.twitter.com/epXQoPTLyo
            </p>
            <footer className="event-footer">
              <time style={{ paddingLeft: "20px" }}>11.14.2022</time>
              <FiExternalLink className="icon" />
            </footer>
          </div>
        </div>

        <div className="second-column-container">
          <div className="latest-news-container">
            <h3 className="latest-head">
              <FaNewspaper style={{ color: "#7a7a7a", paddingRight: "10px" }} />
              Latest News
            </h3>
            {EventData.map((item) => (
              <table>
                <tbody>
                  <tr>
                    <td className="date">{item.date}</td>
                    <td className="event-text">{item.text}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>

          <div className="event2-container">
            <img
              className="event2-image"
              src="https://www.wapice.com/images/1/a/d/9/e/1ad9efd2ee4bc0cb6e688b229ef9c2c72f17ad4d-energy-services-with-iot-and-ai.jpg?g-18ac159b"
            />
            <article className="event2-article">
              <small className="insight">INSIGHT</small>
              <h4>Energy Services with IoT and AI</h4>
            </article>
            <footer className="event-footer" style={{ marginTop: "0px" }}>
              <time>18.10.2022</time>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happening;
