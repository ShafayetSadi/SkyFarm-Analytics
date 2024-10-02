import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import InfoBox from "../../components/InfoBox/InfoBox"; // Import the new InfoBox component
import "./Home.css";

const Home = () => {
  return (
    <div className="relative w-full bg-[#1c1c1e] text-white font-mono">
      {/* Earth Model */}
      <div className="earth-container">
        <EarthModel />
      </div>
      {/* Info Section with Left and Right Info Boxes */}
      <InfoBox position="left" /> {/* About Page Link */}
      <InfoBox position="right" /> {/* Alerts Page Link */}
      <InfoBox position="center" /> {/* Research Page Link */}
      <InfoBox position="extra" /> {/* Quiz Page Link */}
      <InfoBox position="floodMap" /> {/* Flood Map Page Link */}
      <InfoBox position="contact" /> {/* Contact Page Link */}
      <InfoBox position="home" /> {/* Home Page Link */}
      {/* Background Space Image */}
      <div className="space-background">
        {/* Optional: you can add a space background image or more content here */}
      </div>
    </div>
  );
};

export default Home;
