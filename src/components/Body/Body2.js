import React from "react";

const Body2 = () => {
  return (
    <>
      {" "}
      <div className="article-section-container">
        <div className="columns">
          <article className="column-content">
            <h1 className="body2-title">
              Creating a Smarter Future
              <span className="text-other-color">Today.</span>
            </h1>
            <h2 className="body2-subtitle">Full-Service Software Company</h2>
            <p>
              Founded in 1999, Wapice is a Finnish full-service software company
              whose solutions are used by domain leading industrial companies
              around the world. We offer close technology partnership and
              digital services to our customers.
            </p>
          </article>
          <figure className="article-image-container">
            <img
              src="https://www.wapice.com/user/pages/01.home/_about-wapice/wapice-smarter-future-optimized.svg?g-18ac159b"
              alt="light bulb illustration"
              className="article-image"
            />
          </figure>
        </div>
        <div className="highlighted-customer-logos">
          <div className="inside-content">
            <article className="container">
              <h3 className="logo-title">Trusted By</h3>
              <ul>
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/abb.svg?g-18ac159b" />
                </li>
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/caverion.svg?g-18ac159b" />
                </li>
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/danfoss.svg?g-18ac159b" />
                </li>
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/fortum.svg?g-18ac159b" />
                </li>
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/sandvik.svg?g-18ac159b" />
                </li>
              </ul>
              <ul className="under-logo">
                <li>
                  <img src="https://www.wapice.com/user/pages/images/customer_logos/schaeffler.svg?g-18ac159b" />
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body2;
