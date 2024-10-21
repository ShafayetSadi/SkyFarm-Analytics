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
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className=" flex flex-row">
        <div>
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
        </div>

        <div className=" z-30 mt-2">
          {/* Menu Options */}
          <div className={`menu-items ${isOpen ? "show" : ""}`}>
            <Link to="/" className="menu-item">
              <FontAwesomeIcon icon={faHome} />
              <span className="menu-text">Home</span>
            </Link>

            <Link to="/weather" className="menu-item">
              <FontAwesomeIcon icon={faCloudSun} />
              <span className="menu-text">Weather</span>
            </Link>
            <Link to="/floodmap" className="menu-item">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <span className="menu-text">Flood Map</span>
            </Link>
            <Link to="/alerts" className="menu-item">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="menu-text">Alerts</span>
            </Link>
            <Link to="/research" className="menu-item">
              <FontAwesomeIcon icon={faBook} />
              <span className="menu-text">Research</span>
            </Link>

            <Link to="/quiz" className="menu-item">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="menu-text">Quiz</span>
            </Link>

            <Link to="/contact" className="menu-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="menu-text">Contact</span>
            </Link>

            <Link to="/skyfarmai" className="menu-item">
              <FontAwesomeIcon icon={faHeadset} />
              <span className="menu-text">SkyFarm AI</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
