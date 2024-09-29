import React from "react";
import "./FloodMap.css";

const FloodMap = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="map-container mt-16">
        <h1 className="text-3xl font-bold mb-4">Flood Map</h1>

        {/* Wrapper div for the iframe and the overlay */}
        <div className="iframe-container">
          {/* Embedded ArcGIS map as an iframe */}
          <iframe
            src="https://www.arcgis.com/apps/webappviewer/index.html?id=8b0adb51996444d4879338b5529aa9cd"
            title="Flood Map"
            className="h-screen w-full rounded-md shadow-lg mb-6"
          ></iframe>

          {/* Overlay to visually hide the top portion of the iframe */}
          <div className="overlay"></div>
        </div>
      </section>
    </div>
  );
};

export default FloodMap;
