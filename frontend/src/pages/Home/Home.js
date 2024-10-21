import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import InfoBox from "../../components/InfoBox/InfoBox";
import "./Home.css";

const Home = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <div className="relative w-full bg-primary text-lightText font-semibold">
      {/* Earth Model Section */}
      <div className="earth-container relative">
        {/* Welcome Message */}
        <div className="welcome-message ">
          <h1>Welcome to SkyFarm Analytics</h1>
          <p>Your gateway to real-time weather insights and flood tracking.</p>
        </div>

        {/* Earth Model */}
        <EarthModel />

        {/* Scroll Down Button */}
        <button onClick={scrollToSection} className="scroll-button">
          <span className="arrow-down">&#x2193;</span>
        </button>
      </div>
      <div className="skyfarm-container_info-section ">
        {/* New SkyFarm Analytics Section with moving space background */}
        <div className="skyfarm-container">
          <h2>About SkyFarm Analytics</h2>
          <div className=" mb-8">          <p >
            SkyFarm Analytics is an innovative platform that provides real-time
            insights into climate data, weather patterns, and flood risks. Our
            goal is to equip communities with the information they need to
            respond proactively to environmental challenges.
          </p></div>

        </div>

        {/* Info Section with alternating positions for each InfoBox */}
        <div className="info-section glow-background flex flex-col gap-6 px-8">
          {/* Reordered InfoBoxes */}
          <div className="flex justify-start w-full">
            <InfoBox
              position="weather"
              className="bg-secondary text-lightText"
            />
          </div>
          <div className="flex justify-end w-full">
            <InfoBox
              position="floodMap"
              className="bg-secondary text-lightText"
            />
          </div>
          <div className="flex justify-start w-full">
            <InfoBox
              position="alerts"
              className="bg-secondary text-lightText"
            />
          </div>
          <div className="flex justify-end w-full">
            <InfoBox position="quiz" className="bg-secondary text-lightText" />
          </div>
          <div className="flex justify-start w-full">
            <InfoBox
              position="research"
              className="bg-secondary text-lightText"
            />
          </div>
          <div className="flex justify-end w-full">
            <InfoBox position="about" className="bg-secondary text-lightText" />
          </div>
          <div className="flex justify-start w-full">
            <InfoBox
              position="skyfarmai"
              className="bg-secondary text-lightText"
            />
          </div>
          <div className="flex justify-end w-full">
            <InfoBox
              position="contact"
              className="bg-secondary text-lightText"
            />
          </div>
        </div>

        {/* Background Space Image */}
        <div className="space-background"></div>
      </div>
    </div>
  );
};

export default Home;
