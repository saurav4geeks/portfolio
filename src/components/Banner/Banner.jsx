import React from "react";
import bannerImg from "../../assets/images/portfolio_banner_crop.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-wrapper" id="section-banner">
      <img className="img-fluid" src={bannerImg} alt="Banner Image" />
      <div className="social-links d-flex align-items-center d-none d-lg-block d-md-block d-xxl-block">
        <a
          className="mx-2 link hover-underline-animation-wt"
          href="https://www.linkedin.com/in/saurav-suman-ind/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LN
        </a>
        <a
          className="mx-2 link hover-underline-animation-wt"
          href="https://github.com/saurav4geeks"
          target="_blank"
          rel="noopener noreferrer"
        >
          GH
        </a>
      </div>
      <div className="banner-content d-none d-lg-block d-md-block d-xxl-block">
        <h6>LET'S WORK TOGETHER</h6>
        <p>I’m available at</p>
        <ul className="list-unstyled">
          <li>
            <a
              className="link hover-underline-animation-wt"
              href="mailto:sauravsuman5980@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sauravsuman5980@gmail.com
            </a>
          </li>
          <li>
            <a
              className="link hover-underline-animation-wt"
              href="tel:+9155962770"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+91) 9155962770
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
