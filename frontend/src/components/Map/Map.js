// components/Map.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add marker for flood alerts
    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup("Flood alert here!")
      .openPopup();
  }, []);

  return <div id="map" className="h-96 w-full rounded-md shadow-lg"></div>;
};

export default Map;
