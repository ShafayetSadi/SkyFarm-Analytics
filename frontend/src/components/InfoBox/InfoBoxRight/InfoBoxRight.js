// InfoBoxRight.js
import React from "react";
import "../InfoBox.css";

const InfoBoxRight = () => {
  return (
    <div className="info-box bg-opacity-70 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">Join the Revolution</h2>
      <p className="text-sm mt-2">
        Be part of the journey and help us build the future.
      </p>
      <button className="cta-button mt-4 py-2 px-4 bg-green-500 rounded-md text-white">
        Get Started
      </button>
    </div>
  );
};

export default InfoBoxRight;
