import React from "react";
import "../styles/herosection2.css";
import img1 from "../assets/Rectangle 1.png";
import img2 from "../assets/Rectangle 2.png";
import img3 from "../assets/Rectangle 3.png";
import send from "../assets/Vector (5).png";
import add from "../assets/Vector (4).png";
import play from "../assets/Vector (8).png";
import icon from "../assets/Vector (3).png";
import bg from "../assets/layer.png";

function HeroSection2() {
  return (
    <div className="hero-section">
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-lg-5 text-area2">
            <div className="div text-area2-column">
              <button className="top-btn">
                <p>Explore the world!</p>
                <img
                  className="mx-2"
                  style={{ width: "20px", height: "20px" }}
                  src={icon}
                  alt=""
                />
              </button>
              <h1>
                Travel <span className="pink-text">top destination </span>
                of the world
              </h1>
              <p className="text-para">
                We always make our customer happy by providing as many choices
                as possible{" "}
              </p>
              <div className="hero-btns">
                <button className="started-btn">Get Started</button>
                <button className="watch-btn mx-2">
                  <div className="d-flex">
                    <img src={play} alt="" /> <p className="mx-2">Watch demo</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ position: "relative" }}
            className="col-lg-7 col-md-12 col-12 hero-right"
          >
            <div className="div bg-image">
              <img src={bg} alt="" />
            </div>

            <div className="container-fluid hero-right-img">
              <div className="row d-flex flex-row">
                <div className="col-lg-6 col-md-6 col-6">
                <div className="div send">
           <img src={send} alt="send" />
           </div>
                  <div className="img1">
              
                    <img src={img1} alt="" />
                  </div>
                  <div className="img2 mt-4">
                    <img src={img2} alt="" />
                  </div>
                </div>
                <div style={{position:"relative"}} className="col-lg-6 col-md-6 col-6 d-flex align-items-center">
               
               <div  className="d-flex top-places">
                 <span style={{color:"yellow"}}><i class="fa-solid mx-2 fa-location-dot"></i></span> <p>Top Places</p>
                </div> <div className="div add">
           <img src={add} alt="add friend" />
           </div>
                  <div className="div">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
