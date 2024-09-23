import React from "react";
import "../styles/brands.css"
import img1 from "../assets/brands/Group (1).png";
import img2 from "../assets/brands/Group 2.png";
import img3 from "../assets/brands/Group 3.png";
import img4 from "../assets/brands/Group 4.png";
import img5 from "../assets/brands/Group 5.png";

function Brands() {
  return (
    <div>
      <div className="container-fluid brands">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 brands-icon col-md-4 col-4">
            <img src={img1} alt="" />
          </div>
          <div className="col-lg-2  brands-icon col-md-4 col-4">
            <img src={img2} alt="" />
          </div>
          <div className="col-lg-2  brands-icon col-md-4 col-4">       
            <img src={img3} alt="" />
          </div>
          <div className="col-lg-2 brands-icon col-md-6 col-6">
           
            <img src={img4} alt="" />
          </div>
          <div className="col-lg-2  brands-iconcol-md-6 col-6">
         
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
