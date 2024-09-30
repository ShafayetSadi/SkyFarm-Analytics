// InfoBoxLeft.js
import React from "react";
import "../InfoBox.css";

const InfoBoxLeft = () => {
  return (
    <div className="info-box bg-opacity-70 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">Explore the Future</h2>
      <p className="text-sm mt-2">
        Discover the technology that is shaping the world of tomorrow.
      </p>
      <button className="cta-button mt-4 py-2 px-4 bg-blue-500 rounded-md text-white">
        Learn More
      </button>
    </div>
  );
};

export default InfoBoxLeft;
