import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(profs) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${profs.mode} bg-${
        profs.mode === "dark" ? "black" : "white"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {profs.title}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`form-check form-switch text-${
          profs.mode === "dark" ? "light" : "dark"
        } darkmode-toggle`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={profs.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enabled Darkmode
        </label>
      </div>
    </nav>
  );
}

Navbar.prototype = { title: PropTypes.string };
