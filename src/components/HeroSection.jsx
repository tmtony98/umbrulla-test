import React from "react";
import "../styles/heroSection.css";
import icon from "../assets/Vector (3).png";
import bg from "../assets/layer.png";
import  img1 from "../assets/Rectangle 1.png"
import  img2 from "../assets/Rectangle 2.png"
import  img3 from "../assets/Rectangle 3.png"
import send from "../assets/Vector (5).png"
import add from "../assets/Vector (4).png"



function HeroSection() {
  return (
    <div>
      <div className="hero-section">
        <div className="text-column border-1">
          <div className="text-area border-1">
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
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
            <div className="hero-btns">
              <button className="started-btn">Get Started</button>
              <button>Watch Demo</button>
            </div>
          </div>
        </div>
        <div className="hero-img-section border-1">
          <div className="bg-img">
            <img src={bg} alt="" />
          </div>
          <div className="img-grid ">
           <div className="div img-grid-left border-1">
           <div className="div send">
           <img src={send} alt="send" />
           </div>
           <div className="img-card">
              <img src={img1} alt="" />
            </div>
            <div className="img-card">
              <img src={img2} alt="" />
          

            </div>
           </div>

           <div className="div img-grid-right">
           <div className="img-card  border-1">
              <img src={img3} alt="" />
              <div className="div add">
           <img src={add} alt="add friend" />
           </div>
           <div className="div button">
          <button>Top Places</button>
           </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
