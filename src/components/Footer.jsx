import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 footer-left">
            <div className="d-flex  logo-section align-items-center">
            <img src={logo} alt="" />
            <h1 className="mx-2 fw-bold fs-5">Travlog</h1>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="icons text-light d-flex">
            <div className="div icon"><i class="fa-brands  fa-facebook-f"></i></div>
           <div className="div icon"> <i class="fa-brands fa-twitter"></i></div>
         <div className="div icon">
         <i class="fa-brands fa-instagram"></i>
         </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12  footer-right">
           <div className="container-fluid"> 
           <div className="row ">
              <div className="col-lg-4 col-md-4 col-12">
                <ul>
                    <li className="fw-bold">Company</li>
                    <li>Career</li>
                    <li>About</li> <li>Mobile</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4  col-12"> <ul>
                    <li className="fw-bold">Contact</li>
                    <li>Why Travlog?</li> <li>Partner with us</li><li>FAQs</li><li>Blog</li>
                </ul></div>
              <div className="col-lg-4 col-md-4  col-12"> <ul>
                    <li className="fw-bold">Meet Us</li>
                    <li>+00 92 1234 56789</li> <li>info@travlog.com</li> <li>205. R Street, New York</li> <li>BD23200</li>
                </ul></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
