import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faExclamationTriangle,
  faCloudSun,
  faMapMarkedAlt,
  faPhone,
  faQuestionCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      {/* Hamburger Icon */}
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={handleToggleMenu}
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      {/* Overlay Blur when the menu is open */}
      {isOpen && (
        <div className="menu-overlay" onClick={handleToggleMenu}></div>
      )}

      {/* Menu Options */}
      <div className={`menu-items ${isOpen ? "show" : ""}`}>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/about" className="menu-item">
          <FontAwesomeIcon icon={faInfoCircle} />
        </Link>
        <Link to="/alerts" className="menu-item">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </Link>
        <Link to="/weather" className="menu-item">
          <FontAwesomeIcon icon={faCloudSun} />
        </Link>
        <Link to="/floodmap" className="menu-item">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </Link>
        <Link to="/contact" className="menu-item">
          <FontAwesomeIcon icon={faPhone} />
        </Link>
        <Link to="/quiz" className="menu-item">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Link>
        <Link to="/research" className="menu-item">
          <FontAwesomeIcon icon={faBook} />
        </Link>
      </div>
    </div>
  );
};

export default MenuIcon;
