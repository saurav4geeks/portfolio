import React from "react";
import "./experience.css";
import Card from "../Cards/Card";
function experience() {
  return (
    <div className="Experience-wrapper" id="section-expertise">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="experience-content">
              <h1 className="font-playfair">Experience</h1>
              <Card
                ekey="1"
                startDate="June 2022"
                endDate="July 2022"
                position="Web Developer Intern"
                location="GAIA Smart Cities, IN"
                list1="Interacted with the business and software teams to understand requirements and worked
                in a team on a live client project"
                list2="Developed a responsive full stack web app for recording traffic infrastructure"
                list3="Implemented authentication system and report generation functionality"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
