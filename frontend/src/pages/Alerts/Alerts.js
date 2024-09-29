import React, { useState } from "react";
import "./Alerts.css";
import AlertCard from "../../components/AlertCard/AlertCard";

// Sample data for alerts
const sampleAlerts = [
  {
    title: "Flood Warning - Riverbank",
    description:
      "Heavy rainfall expected to cause severe flooding near the riverbank.",
    severity: "Severe",
    region: "Riverbank Area",
    issued: "2024-09-30 08:00 AM",
  },
  {
    title: "Flood Watch - Downtown",
    description: "Watch for potential flooding due to increasing water levels.",
    severity: "Moderate",
    region: "Downtown Area",
    issued: "2024-09-30 10:30 AM",
  },
  {
    title: "Flash Flood Alert - Highway 56",
    description:
      "Flash flood expected in low-lying areas near Highway 56. Immediate action needed.",
    severity: "High",
    region: "Highway 56",
    issued: "2024-09-30 06:00 AM",
  },
];

const Alerts = () => {
  const [alerts] = useState(sampleAlerts);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">
        Active Flood Alerts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => <AlertCard key={index} alert={alert} />)
        ) : (
          <p className="text-red-500">No active alerts at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Alerts;
