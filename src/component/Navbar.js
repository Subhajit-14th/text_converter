import React from "react";
import PropTypes from "prop-types";

export default function Navbar(profs) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {profs.title}
        </a>
      </div>
    </nav>
  );
}

Navbar.prototype = { title: PropTypes.string };
