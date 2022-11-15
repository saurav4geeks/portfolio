import React, { useState } from "react";
import ShowEye from "../../assets/images/view-show.svg";
import HideEye from "../../assets/images/view-hide.svg";
import Accordion from "react-bootstrap/Accordion";
import "./Card.css";
function Card(props) {
  //detect Accordion change
  const handleAccordionChange = (eventKey) => {
    console.log(eventKey);
    setAccordianState(eventKey);
  };

  const [accordianState, setAccordianState] = useState(0);

  return (
    <div className="card-wrapper">
      <Accordion onSelect={handleAccordionChange} defaultActiveKey="0">
        <Accordion.Item eventKey={props.ekey}>
          <Accordion.Header>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2 w-30">
                  <p className="card-date">{props.startDate} </p>
                </div>
                <div className="col-sm-2 w-30">
                  <p className="card-date">{props.endDate}</p>
                </div>
                <div className="col-sm-8 w-30">
                  <p className="card-date align-self-end text-end">
                    {accordianState === "1" ? (
                      <>
                        <img className="toggle-show" src={ShowEye} alt="Open" />
                      </>
                    ) : (
                      <>
                        <img className="toggle-hide" src={HideEye} alt="Open" />
                      </>
                    )}
                  </p>
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
          <Accordion.Body>
            <ul className="detail-list">
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Card;
