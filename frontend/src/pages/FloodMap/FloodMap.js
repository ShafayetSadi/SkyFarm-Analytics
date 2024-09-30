import React from "react";
import "./FloodMap.css";

const FloodMap = () => {
  return (
    <div className="container mx-auto p-6 mt-[-80px]">
      <section className="map-container mt-16">
        {/* Wrapper div for the iframe and the overlay */}
        <div className="iframe-container mb-8">
          <h2 className="text-xl font-semibold mb-2">ArcGIS Flood Map</h2>
          {/* Embedded ArcGIS map as an iframe */}
          <iframe
            src="https://www.ventusky.com/?p=34.5;98.2;3&l=clouds-total&t=20240930/1800&m=gem"
            title="ArcGIS Flood Map"
            className="h-screen w-full rounded-md shadow-lg mb-6"
          ></iframe>

          {/* Overlay to visually hide the top portion of the iframe */}
          <div className="overlay text-center text-3xl pt-20 font-bold">Real Time Data </div>
        </div>

      </section>
    </div>
  );
};

export default FloodMap;
