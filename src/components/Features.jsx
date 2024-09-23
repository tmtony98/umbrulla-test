import React from "react";
import "../styles/features.css";
import img1 from "../assets/BACKGROUND.png";
import img2 from "../assets/location 2.png";
import img3 from "../assets/calendar 1.png";
import img4 from "../assets/Vector (7).png";

function Features() {
    return (
        <div className="features-section">
            <div className="container-fluid">
                <div className="row features-row">
                    <div className="col-lg-6 col-md-12 features-left ">
                        <h2>KEY FEATURES</h2>
                        <h1>We offer best services</h1>
                        <p className="features-left-para" >
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC.
                        </p>
                        <div className="div  d-flex flex-column">
                            <div className="div feature-row">
                                <div className="feature-img-1">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="div feature-row-text">
                                    <h3>We offer best services</h3>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                            <div className="div feature-row ">
                                <div className="feature-img-2">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="div feature-row-text">
                                    <h3>We offer best services</h3>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                            <div className="div feature-row">
                                <div className="feature-img-3">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="div feature-row-text">
                                    <h3>We offer best services</h3>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12  features-right">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
