import React from "react";
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <div>
      <nav style={{backgroundColor:"white"}} className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img src={logo} alt="logo" />
          <a className="navbar-brand" href="#">
            Travlog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">     
                   <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Special Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn me-2 login-btn" type="submit">
                Log In
              </button>
              <button className="btn  sign-btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
