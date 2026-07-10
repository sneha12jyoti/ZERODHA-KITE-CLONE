import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top py-3">
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Left Side: Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            src="media/images/logo.svg" 
            style={{ width: "25%", minWidth: "120px" }} 
            alt="Logo" 
          />
        </Link>
        
        {/* Mobile Toggle Button */}
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
        </button>
        
        {/* Right Side: Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* ms-auto pushes the entire list to the right side of the navbar */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" type="button" aria-label="Open menu">
                <i className="fa fa-th" aria-hidden="true"></i>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
