// components/AlertCard.js
import React from "react";

const AlertCard = ({ alert }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-red-600">{alert.event}</h3>
      <p>{alert.description}</p>
      <p className="text-sm text-gray-500">
        Start: {new Date(alert.start * 1000).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        End: {new Date(alert.end * 1000).toLocaleString()}
      </p>
      <p className="text-sm text-gray-700">Issued by: {alert.sender_name}</p>
    </div>
  );
};

export default AlertCard;
