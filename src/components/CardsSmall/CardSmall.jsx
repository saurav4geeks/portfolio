import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./CardSmall.css";
function CardSmall(props) {
  return (
    <div className="card-wrapper">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2 w-30">
                  <p className="card-date">{props.startDate}</p>
                </div>
                <div className="col-sm-2 w-30">
                  <p className="card-date">{props.endDate}</p>
                </div>
                <div className="col-sm-4 w-30">
                  <p className="card-date"></p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h6 className="card-position">{props.position}</h6>
                </div>
                <div className="col-sm-6 text-md-end">
                  <em className="card-location">{props.location}</em>
                </div>
              </div>
            </div>
          </Accordion.Header>
          {/* <Accordion.Body>
            <ul className="detail-list">
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
            </ul>
          </Accordion.Body> */}
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CardSmall;
