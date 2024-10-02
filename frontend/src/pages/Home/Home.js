import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import InfoBox from "../../components/InfoBox/InfoBox"; // Import the new InfoBox component
import "./Home.css";

const Home = () => {
  return (
    <div className="relative w-full bg-primary text-lightText font-mono">
      {/* Earth Model */}
      <div className="earth-container">
        <EarthModel />
      </div>

      {/* Info Section with alternating positions for each InfoBox */}
      <div className="info-section flex flex-col gap-6 px-8">
        {/* Row 1 - Home Page Info on the left */}
        <div className="flex justify-start w-full">
          <InfoBox position="home" className="bg-secondary text-lightText" />
        </div>

        {/* Row 2 - About Page Info on the right */}
        <div className="flex justify-end w-full">
          <InfoBox position="about" className="bg-secondary text-lightText" />
        </div>

        {/* Row 3 - Alerts Page Info on the left */}
        <div className="flex justify-start w-full">
          <InfoBox position="alerts" className="bg-secondary text-lightText" />
        </div>

        {/* Row 4 - Flood Map Page Info on the right */}
        <div className="flex justify-end w-full">
          <InfoBox position="floodMap" className="bg-secondary text-lightText" />
        </div>

        {/* Row 5 - Contact Page Info on the left */}
        <div className="flex justify-start w-full">
          <InfoBox position="contact" className="bg-secondary text-lightText" />
        </div>

        {/* Row 6 - Quiz Page Info on the right */}
        <div className="flex justify-end w-full">
          <InfoBox position="quiz" className="bg-secondary text-lightText" />
        </div>

        {/* Row 7 - Research Page Info on the left */}
        <div className="flex justify-start w-full">
          <InfoBox position="research" className="bg-secondary text-lightText" />
        </div>
      </div>

      {/* Background Space Image */}
      <div className="space-background"></div>
    </div>
  );
};

export default Home;
