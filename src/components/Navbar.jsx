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
        <Link to="/react-portfolio" className="logo nav-link">
          Luis Alvarez{" "}
        </Link>
        <button
          onClick={handleClick}
          className="nav-toggle"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-menu ${toggleClassCheck}`}>
          <li className="nav-menu-item">
            <Link
              to="/aboutme"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              About me
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/works"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Works
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/contact"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}
export default Navbar;
