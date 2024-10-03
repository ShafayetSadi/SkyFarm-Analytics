import React from "react";
import "./AlertCard.css";

const AlertCard = ({ alert }) => {
  return (
    <div className="alert-card">
      <h3 className="text-xl font-semibold">{alert.title}</h3>
      <p>{alert.description}</p>
      <p className="text-sm text-gray-300">{alert.region}</p>
      <p className="text-sm text-gray-300">{alert.district}</p>

      <p className="text-sm text-gray-200">{alert.issued}</p>
    </div>
  );
};

export default AlertCard;
