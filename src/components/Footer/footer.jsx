import React from "react";
import "./footer.css";
function footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row ">
          <div className="col-md-8 ">
            <div className="footer-content ">
              <p>©{year} Saurav Suman, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
