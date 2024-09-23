import React from "react";
import "../styles/services2.css";
import img1 from "../assets/destination 1.png";
import img2 from "../assets/booking 1.png";
import img3 from "../assets/cloudy 1.png";

function Services2() {
  return (
    <>
     <div className="container-fluid service-area">
        <div className="row">
          <div className="col-lg-4 col-md-12 text">
            <div className="text-box">
              <div className="div">
                <h4>SERVICES</h4>
              </div>
              <div className="div">
                <h1>Our top value categories for you</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="service-list container">
              <div className="row d-flex ">
                <div className="col-lg-4 col-md-4 col-4 service-card card border-1">
                  <img src={img1} alt="" />
                  <h1>Best Tour Guide</h1>
                  <p>
                    What looked like a small patch of purple grass, above five
                    feet.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-4 service-card card">
                  <img src={img2} alt="" />
                  <h1>Easy Booking</h1>
                  <p>Square, was moving across the sand in their direction.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-4 service-card">
                  <img src={img3} alt="" />
                  <h1>Weather Forecast</h1>
                  <p>
                    What looked like a small patch of purple grass, above five
                    feet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
     
  
  );
}

export default Services2;
