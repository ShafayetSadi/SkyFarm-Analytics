import React, { useState } from "react";
import "./Alerts.css";
import AlertCard from "../../components/AlertCard/AlertCard";
import WaterLevel from "../../components/WaterLevel/WaterLevel";

const sampleAlerts = [
  {
    id: 1,
    title: "Severe Flood Warning",
    description: "Flood expected in region X.",
    severity: "high",
  },
  {
    id: 2,
    title: "Moderate Flood Alert",
    description: "Flooding likely in region Y.",
    severity: "moderate",
  },
  {
    id: 3,
    title: "Flood Watch",
    description: "Potential flood risk in region Z.",
    severity: "low",
  },
];

const Alerts = () => {
  const [alerts] = useState(sampleAlerts);

  const currentLevel = 5;
  const dangerLevel = 10;

  return (
    <div className="container mx-auto p-6 bg-dark-futuristic min-h-screen relative">
      <div className="neon-rain"></div> {/* Futuristic neon rain background */}
      <h1 className="text-5xl font-bold mb-6 text-neon-blue text-center glow-effect">
        Active Flood Alerts
      </h1>
      <WaterLevel currentLevel={currentLevel} dangerLevel={dangerLevel} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 alert-grid">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => <AlertCard key={index} alert={alert} />)
        ) : (
          <p className="text-neon-red text-center">
            No active alerts at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Alerts;
