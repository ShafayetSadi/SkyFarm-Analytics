import React from "react";
import "./AlertCard.css"; // Ensure the cloud styling is in this file

const AlertCard = ({ alert }) => {
  // Generate rain drops for each cloud
  const rainDrops = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className="rain-drop"
      style={{
        left: `${Math.random() * 100}%`, // Randomize horizontal positioning
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ));

  return (
    <div className="alert-card">
      <h3 className="text-xl font-semibold">{alert.title}</h3>
      <p>{alert.description}</p>
      <p className="text-sm text-gray-600">{alert.region}</p>
      <p className="text-sm text-gray-500">{alert.issued}</p>

      {/* Rain Animation below the cloud */}
      {rainDrops}
    </div>
  );
};

export default AlertCard;
