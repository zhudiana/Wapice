import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./Happening.css";
import { FiCalendar } from "react-icons/fi";
import timelineElements from "./TimelineElements";

const Happening = () => {
  let upcomingEvent = { background: "red;" };
  let pastEvent = { background: "#fff" };
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
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Happening;
