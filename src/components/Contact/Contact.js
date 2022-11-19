import React from "react";
import "./Contact.css";
import { BsChatLeft } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="form-container">
      <form>
        <h2>
          {" "}
          <BsChatLeft style={{ paddingRight: "15px" }} />
          Let's Get Started
        </h2>
        <div className="first-row-form-container">
          <div>
            <label>Email Address</label>
            <br />
            <input
              type="email"
              name="Enter email"
              className="form-inputt"
              placeholder="Email"
            />
          </div>
          <div>
            <label>Message Category</label>
            <br />
            <select className="form-inputt" style={{ backgroundColor: "#fff" }}>
              <option value="General" className="items-in-selectt">
                General
              </option>
              <option value="Product inquiries" className="items-in-selectt">
                Product inquiries
              </option>
              <option value="Marketing" className="items-in-selectt">
                Marketing
              </option>
              <option value="Recruitment" className="items-in-selectt">
                Recruitment
              </option>
              <option value="Summium support" className="items-in-selectt">
                Summium support
              </option>
            </select>
          </div>
          <div>
            <label>Message Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              className="form-inputt"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="text-area-container">
          <label>Message</label>
          <br />
          <textarea
            type="textarea"
            className="form-input-text-areaa"
            placeholder="Your message"
          />
        </div>
        <div className="checkbox-container">
          <input name="checkbox-privacy-policy" type="checkbox" />
          <label>
            I AGREE WITH{" "}
            <b>
              OUR PRIVACY POLICY <FiExternalLink />
            </b>
          </label>
          <button className="send-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
