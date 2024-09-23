import React from "react";
import "../styles/services.css";
import img1 from "../assets/destination 1.png"
import img2 from "../assets/booking 1.png"
import img3 from "../assets/cloudy 1.png"


function Services() {
  return (
    <div>
      <div className="container-fluid">
        <div className="service-section ">
          <div className="div service-heading">
            <div className="div">
              <h3>SERVICES</h3>
            </div>
            <div className="div">
              <h1>Our top value categories for you</h1>
            </div>
          </div>
          <div className="div service-cards">
            <div className="col">
              <div className="div">
                <img src={img1} alt="travel icon" />
              </div>
              <div className="div heading">
                <h2>Best Tour Guide</h2>
              </div>
              <div className="div para">
                <p>
                  What looked like a small patch of purple grass, above five
                  feet.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="div">
                <img src={img2}alt="booking img" />
              </div>
              <div className="div heading">
                <h2>Easy Booking</h2>
              </div>
              <div className="div para">
                <p>Square, was moving across the sand in their direction.</p>
              </div>
            </div>
            <div className="col">
              <div className="div">
                <img src={img3} alt="cloudy img" />
              </div>
              <div className="div heading">
                <h2>Weather Forecast</h2>
              </div>
              <div className="div para">
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
  );
}

export default Services;
