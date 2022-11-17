import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form-container">
      <form>
        <h2>Let's Get Started</h2>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="Enter email"
            className="form-inputt"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Message Category</label>
          <select className="form-inputt">
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
          <input
            type="text"
            name="subject"
            className="form-inputt"
            placeholder="Enter Subject"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="textarea"
            className="form-input-text-areaa"
            placeholder="Your message"
          />
        </div>
        <div>
          <input name="checkbox-privacy-policy" type="checkbox" />
          <label>I AGREE WITH OUR PRIVACY POLICY</label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
