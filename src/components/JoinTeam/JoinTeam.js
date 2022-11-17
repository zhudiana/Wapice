import React from "react";
import "./JoinTeam.css";

const JoinTeam = () => {
  return (
    <div className="join-team-article-container">
      <div className="join-team-image-container">
        <img
          className="join-team-image"
          src="https://www.wapice.com/user/pages/01.home/_latest-openings/woman-interviewer-mod.svg?g-18ac159b"
        />
      </div>
      <div className="join-team-article-container">
        <article className="join-team-article">
          <h2 className="join-title">Join our team</h2>
          <p className="join-article-p">
            Naturally, we're nothing without our people. We're passionate about
            what we do and we grow together, which is reflected in our values.{" "}
            <b>Read more</b> about our career possibilities and culture and join
            us!
          </p>
          <p className="join-button">See all job openings</p>
        </article>
      </div>
    </div>
  );
};

export default JoinTeam;
