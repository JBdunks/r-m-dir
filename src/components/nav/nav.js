import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar-fixed">
      <nav className="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center" id="logo">
            Rick and Morty Directory
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
