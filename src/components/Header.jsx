import React from 'react'
import logo from "../assets/logo.png"
import "../styles/header.css"

function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img src={logo} alt="logo" />
          <a className="navbar-brand" href="#">Travlog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Discover</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Special Deals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn me-2 login-btn" type="submit">Log In</button>
              <button className="btn  sign-btn" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div className="div">
      <section class="travel-section">
      <div class="container">
      <div class="text-content">
        <div class="explore">
          <button class="explore-btn">Explore the world!</button>
        </div>
        <h1>Travel <span>top destination</span> of the world</h1>
        <p>We always make our customers happy by providing as many choices as possible</p>
        <div class="buttons">
          <button class="btn get-started">Get Started</button>
          <button class="btn watch-demo">Watch Demo</button>
        </div>
      </div>
      <div class="image-content">
        <div class="image-grid">
          <div class="image-card">
            <img src="https://via.placeholder.com/300" alt="Destination 1"/>
          </div>
          <div class="image-card">
            <img src="https://via.placeholder.com/300" alt="Destination 2"/>
            <span class="label">Top Places</span>
          </div>
          <div class="image-card">
            <img src="https://via.placeholder.com/300" alt="Destination 3"/>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div> */}
    </div>
    
  )
}

export default Header
