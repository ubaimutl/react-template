import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar header-nav navbar-expand-lg one-page-nav">
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <h1>Hello</h1>
          </a>
          {/* / */}
          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse-toggle"
            aria-controls="navbar-collapse-toggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          {/* / */}
          {/* Top Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar-collapse-toggle"
          >
            <ul className="navbar-nav mx-auto">
              <li>
                <Link to="/" className="nav-link">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  <span>About</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="services" className="nav-link">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="skills" className="nav-link">
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="nav-link">
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="contact" className="nav-link">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* / */}
          {/* Top Menu */}
         
          {/* / */}
        </div>
        {/* Container */}
      </nav>{" "}
      {/* Navbar */}
    </header>
  );
};

export default Header;
