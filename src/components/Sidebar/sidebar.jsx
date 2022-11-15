import React from "react";
import DownloadIcon from "../../assets/images/download-icon.png";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <a href="#section-banner">
          <h1 className="font-ibm">S</h1>
        </a>
      </div>
      <div className="menu-wrapper">
        <ul className="side-menu">
          <li>
            <a
              className="sideMenu-Link hover-underline-animation "
              href="#section-intro"
            >
              BIOGRAPHY
            </a>
          </li>
          <li>
            <a
              className="sideMenu-Link hover-underline-animation "
              href="#section-expertise"
            >
              EXPERTISE
            </a>
          </li>
          <li>
            <a
              className="sideMenu-Link hover-underline-animation "
              href="#section-projects"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="sideMenu-Link hover-underline-animation "
              href="#section-contact"
            >
              GET IN TOUCH
            </a>
          </li>
        </ul>
      </div>
      <div className="download-wrapper">
        <p>
          Feel free to send me a message if you want to enhance your IT
          department.
        </p>
        <div className="download-btn">
          <a
            href={require("../../assets/resume/Resume_Saurav_Suman.pdf")}
            download="Resume"
          >
            <img src={DownloadIcon} alt="" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
