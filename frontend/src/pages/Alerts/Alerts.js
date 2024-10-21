import React, { useState } from "react";
import "./Alerts.css";
import AlertCard from "../../components/AlertCard/AlertCard";
import WaterLevel from "../../components/WaterLevel/WaterLevel";
import flooddata from "./Alerts.json"; // Import the JSON data
import { Link } from "react-router-dom"; // Ensure you have react-router-dom for navigation
import Menu from "../../components/Menu/Menu"; // Import the Menu component
import SkyFarmBot from "../SkyFarmBot/SkyFarmBot"; // Import the SkyFarmBot component
const Alerts = () => {
  const [alerts] = useState(flooddata.alerts); // Accessing alerts from the JSON structure
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [currentLevel, setCurrentLevel] = useState(0); // State for current water level
  const [dangerLevel, setDangerLevel] = useState(0); // State for danger water level

  // Filter the alerts based on search term
  const filteredAlerts = alerts.filter(
    (alert) =>
      alert.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to update water levels based on selected alert
  const handleAlertClick = (alert) => {
    // Update current and danger levels based on the clicked alert
    setCurrentLevel(alert.currentLevel);
    setDangerLevel(alert.dangerLevel);
  };

  return (
    <div className="container   md:mx-auto p-6 pt-20 lg:pt-10 bg-dark-futuristic min-h-screen relative">
      <div className="Menu absolute top-5 left-5">
        {/* Hamburger Menu */}
        <Menu />
      </div>
      <div className="neon-rain"></div> {/* Futuristic neon rain background */}
      <h1 className="  text-5xl font-bold mb-6 text-neon-blue text-center glow-effect">
        Active Flood Alerts
      </h1>
      <div className="search-bar-container text-center mb-6">
        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search for region or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* WaterLevel component receives current and danger levels */}
      <WaterLevel currentLevel={currentLevel} dangerLevel={dangerLevel} />
      {/* Alert cards filtered based on search term */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 alert-grid">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert) => (
            <div key={alert.id} onClick={() => handleAlertClick(alert)}>
              <AlertCard alert={alert} /> {/* Render the AlertCard */}
            </div>
          ))
        ) : (
          <p className="text-neon-red text-center">
            No alerts found for the searched location.
          </p>
        )}
      </div>
      <SkyFarmBot />
    </div>
  );
};

export default Alerts;
