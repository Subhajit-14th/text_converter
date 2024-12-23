import React from "react";
import PropTypes from "prop-types";

export default function Navbar(profs) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${profs.mode} bg-${
        profs.mode === "dark" ? "black" : "white"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {profs.title}
        </a>
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
