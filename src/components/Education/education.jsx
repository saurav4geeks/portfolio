import React from "react";
import "./education.css";
import CardSmall from "../CardsSmall/CardSmall";
function education() {
  return (
    <div className="education-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="education-content">
              <h1 className="font-playfair">Education</h1>
              <CardSmall
                startDate="Aug 2019"
                endDate="May 2023"
                position="Electronics and Instrumentation Control"
                location="Thapar Institute of Engineering and Technology"
              />
              <CardSmall
                startDate="April 2016"
                endDate="June 2018"
                position="Higher Secondary School"
                location="Patna Central School"
              />
              <CardSmall
                startDate="April 2011"
                endDate="April 2016"
                position="Primary Secondary School"
                location="Don Bosco Academy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
