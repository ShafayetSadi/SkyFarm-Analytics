import React from "react";
import Menu from "../../components/Menu/Menu"; // Import the Menu component
import "./FloodMap.css";

const FloodMap = () => {
  return (
    <div className="floodMapContainer mx-auto p-6 text-gray-200 bg-gray-900 min-h-screen relative">
      {/* Hamburger Menu */}
      <div className=" absolute top-5 left-5">
          <Menu />
      </div>
    

      <section className="map-container">
        {/* Alert Button */}
        <a
          href="/alerts"
          className="absolute z-20 top-32 right-10 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          Go to Alerts
        </a>

        {/* Wrapper div for the iframe and the overlay */}
        <div className="iframe-container mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            SKY FARM ANALYTICS
          </h2>

          {/* Embedded ArcGIS map as an iframe */}
          <iframe
            src="https://www.ventusky.com/?p=34.5;98.2;3&l=clouds-total&t=20240930/1800&m=gem"
            title="ArcGIS Flood Map"
            className="h-screen w-full rounded-md shadow-lg mb-6"
          ></iframe>

          {/* Overlay to visually hide the top portion of the iframe */}
          <div className="overlay bg-gray-900 text-center text-4xl pt-10 font-bold text-blue-500">
            Real-Time Data
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloodMap;
