/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/images/LOGO1.png";
function Header() {
  console.log("from header");
  return (
    <nav className="bg-blur-dark navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="w-25 nav-brand">
          <a href="#">
            <img src={logo} className="w-50" alt="" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          <div className="right d-flex justify-content-end  w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              
            </ul>
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
