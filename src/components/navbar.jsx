import React from "react";
//import arrowIcon from "../assets/icon/arrow-right.png";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="Navbar">
        <div className="flex justify-between items-center">
          <div className="nav-group-link">
            <a href="#" className="nav-item">
              About
            </a>
            <a href="#" className="nav-item">
              News
            </a>
            <a href="#" className="nav-item">
              Services
            </a>
            <a href="#" className="nav-item">
              Our Teams
            </a>
            <a href="#" className="nav-item">
              Make Enquiry
            </a>
          </div>
          <div className="btn-group flex justify-between items-center w-full">
            <button className="btn-nav-toggle">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
            <button className="btn-primary">
              <span>
                Contact us
                {/* <img src={arrowIcon} alt="arrow-right" /> */}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
