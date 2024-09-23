import React from "react";
import img1 from "../assets/Group 9238.png";
import "../styles/travelpoint.css"

function TravelPoint() {
  return (
  
      <div className="container-fluid travel-section">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 ">
            <img src={img1} alt="" />
          </div>
          <div className="col-lg-5 col-md-12 col-12 text-area ">
            <h3>Travel Point</h3>
            <h2 className="text-area-h2">We helping you find your dream location</h2>
            <p id="paragraph">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
  <div className="container-fluid details">
    <div className="row details-row">
      <div className="col-lg-6 col-xl-6 col-md-6 col-12   detail-card ">
        <div className="div d-flex flex-column">
        <h2>500+</h2>
        <p>Holiday Package</p>
        </div>
      </div>
      <div className="col-lg-6  col-xl-6 col-md-6  col-12  detail-card"><h2>500+</h2>
      <p>Luxuary Hotel</p></div>
    </div>
    <div className="row details-row ">
      <div className="col-lg-6   col-xl-6 col-md-6 col-12  detail-card"><h2>7</h2>
      <p>Premium Airlinesl</p></div>
      <div className="col-lg-6  col-xl-6  col-md-6 col-12 detail-card"><h2>2k+</h2>
      <p>Happy Customer</p></div>
    </div>
  </div>
          </div>
        </div>
      </div>
    
  );
}

export default TravelPoint;
