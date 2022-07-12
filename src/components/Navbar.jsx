import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };

  let toggleClassCheck = btnState ? "nav-menu_visible" : "";

  return (
    <header className="header">
      <nav className="nav">
        {/* <Link to="/react-portfolio" className="logo nav-link">
          Luis Alvarez{" "}
        </Link> */}
        <a href="#/" className="logo nav-link">
          Luis Alvarez
        </a>
        <button
          onClick={handleClick}
          className="nav-toggle"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-menu ${toggleClassCheck}`}>
          <li className="nav-menu-item">
            {/* <Link
              to="/aboutme"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              About me
            </Link> */}
            <a
              href="#/aboutme"
              className="nav-menu-link nav-link"
              onClick={handleClick}
            >
              About Me
            </a>
          </li>
          <li className="nav-menu-item">
            {/* <Link
              to="/works"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Works
            </Link> */}
            <a
              href="#/works"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Works
            </a>
          </li>
          <li className="nav-menu-item">
            {/* <Link
              to="/contact"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Contact
            </Link> */}
            <a
              href="#/contact"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
