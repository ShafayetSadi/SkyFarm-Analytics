import React, { useState, useEffect } from "react";
import "./Alerts.css";
import AlertCard from "../../components/AlertCard/AlertCard";
import { getWeatherAlerts } from "../../services/weatherService";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState(null); // To capture any potential error

  useEffect(() => {
    getWeatherAlerts()
      .then((data) => setAlerts(data.alerts))
      .catch((error) => {
        console.error("Error fetching alerts in component:", error);
        setError("Failed to load alerts. Please try again later.");
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Active Flood Alerts</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.length > 0 ? (
            alerts.map((alert, index) => (
              <AlertCard key={index} alert={alert} />
            ))
          ) : (
            <p>No active alerts at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Alerts;
