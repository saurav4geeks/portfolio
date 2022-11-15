import React from "react";
import introImg from "../../assets/images/intro-img.jpg";
import "./Intro.css";
function Intro() {
  return (
    <div className="Intro-wrapper" id="section-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="font-playfair intro-header">
              Self-driven and proactive Recruiting Manager with a passion for
              creative problem-solving methods.
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="intro-content">
              <p>
                Experienced Recruiting Specialist with years of experience in
                hiring process management and recruitment procedure monitoring,
                developer of cross-company work force allocation strategies, a
                true team leader & most importantly, a good friend.
              </p>
              <p>
                Currently working at the Softworks Verity Technologies LTD as a
                senior Human Resources Manager and Digital Business Automation
                Specialist, with more than twenty teams in her official
                jurisdiction.
              </p>
              <img src={introImg} alt="Office Image" />
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="intro-side ">
              <h4>HELLO! I’M SAURAV</h4>
              <p>
                Entry level <span>Software Engineer</span> with psychological
                background and proven experience in global mobility and office
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
