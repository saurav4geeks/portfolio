import React from "react";
import "./projects.css";
import Card from "../Cards/Card";
function experience() {
  return (
    <div className="projects-wrapper" id="section-projects">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="font-playfair project-header">Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="projects-content">
              <Card
                ekey="1"
                startDate="Ongoing"
                // endDate="July 2022"
                position="Companion Web App for Safety Band"
                location="HTML, CSS, JavaScript, Maps Js API, Python, Django"
                list1="Developing a full stack mobile-first web app for an Arduino pro mini based automated safety band."
                list2="Integrated Arduino via Bluetooth to Web App to send automated SMS along with user’s location"
                list3=" Integrated Maps JavaScript API to frontend to display user’s location along with various pages along with a user authentication system and SOS contact add remove functionality"
              />
              <Card
                ekey="1"
                startDate="April 2022"
                // endDate="July 2022"
                position="Freelancing Portal"
                location="HTML, CSS, JavaScript, Python, Django, Git"
                list1="Developed an online platform where developers from around the world can create a profile and
                share their work with others."
                list2="Build various static pages along with user authentication system user registration."
                list3="Analyzed and optimized website performance and built a search by name or attribute functionality."
              />
              <Card
                ekey="1"
                startDate="January 2022"
                // endDate="July 2022"
                position="Blogging Site"
                location="HTML, CSS, JavaScript, Python, Django, Git"
                list1="Developed a full stack cross-platform compatible web application with login authentication."
                list2="Sketched and build various static pages for interface along with CRUD operation on Posts."
                list3="Analyzed and optimized website performance."
              />
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="intro-side ">
              <h4>MY SKILLS</h4>
              <ul>
                <li>HTML5/ CSS3</li>
                <li>C++</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>Python</li>
                <li>Django</li>
                <li>Git</li>
                <li>UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
