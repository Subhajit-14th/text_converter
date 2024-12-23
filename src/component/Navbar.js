import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(profs) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle side menu visibility
  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${profs.mode} bg-${
        profs.mode === "dark" ? "black" : "white"
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          {profs.title}
        </a>

        {/* Hamburger menu for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSideMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Side menu (initially hidden) */}
      <div
        className={`side-menu bg-${profs.mode} ${
          isOpen ? "side-menu-open" : "side-menu-closed"
        }`}
      >
        <div className="mySideContainer">
          <div
            className={`form-check form-switch text-${
              profs.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={profs.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enabled Darkmode
            </label>
          </div>
        </div>
      </div>

      {/* Dark Mode Switch */}
      <div
        className={`form-check form-switch text-${
          profs.mode === "dark" ? "light" : "dark"
        } darkmode-toggle d-none d-lg-block`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={profs.toggleMode}
        />
        <label
          className="form-check-label d-none d-lg-block"
          htmlFor="flexSwitchCheckDefault"
        >
          Enabled Darkmode
        </label>
      </div>
    </nav>
  );
}

Navbar.prototype = { title: PropTypes.string };
