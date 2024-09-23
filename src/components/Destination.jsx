import React from "react";
import "../styles/destination.css";
import img1 from "../assets/Rectangle 6.png"
import img2 from "../assets/Rectangle 6 (2).png"
import img3 from "../assets/Rectangle 6 (1).png"


function Destination() {
    return (
        <div className="destination-section " >
            <div className="destination-text container-fluid ">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12">
                        <h3>TOP DESTINATION</h3>
                        <h2>Explore Top Destination</h2>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="div arrow-btn">
                            <div className="arrow-left">
                                <button>
                                    <i class="fa-solid fa-arrow-left"></i>
                                </button>
                            </div>
                            <div className="div arrow-right">
                                <button>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="destination-cards container-fluid">
                <div className="row ">
                    <div className="col-lg-4  col-md-4 col-12">
                        <div className="destination-card  ">
                            <img src={img1} alt="" />
                            <div className="card-contents">
                                <div className="div heading">
                                    <h2>Paradise Beach, Bantayan Island</h2>
                                    <h3>$550.16</h3>
                                </div>
                                <div><p>Rome, Italy</p></div>
                                <h6>4.8 <span className="star"><i class="fa-solid mx-1 fa-star"></i></span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-12">
                    <div className="destination-card ">
                            <img src={img2} alt="" />
                            <div className="card-contents">
                                <div className="div heading">
                                    <h2>Ocean with full of Colors</h2>
                                    <h3>$20.99</h3>
                                </div>
                                <div><p>Maldives</p></div>
                                <h6>4.5 <span className="star"><i class="fa-solid mx-1 fa-star"></i></span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="destination-card ">
                            <img src={img3} alt="" />
                            <div className="card-contents">
                                <div className="div heading">
                                    <h2>Mountain View, Above the cloud</h2>
                                    <h3>$150.99</h3>
                                </div>
                                <div><p>United Arab Emeries </p></div>
                                <h6>5 <span className="star"><i class="fa-solid mx-1 fa-star"></i></span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
