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
    <div className="relative w-full bg-primary text-lightText font-mono">
      {/* Earth Model Section */}
      <div className="earth-container relative">
        {/* Welcome Message */}
        <div className="welcome-message">
          <h1>Welcome to Sky Farm Analytics</h1>
          <p>Find live weather and flood updates</p>
        </div>

        {/* Earth Model */}
        <EarthModel />

        {/* Scroll Down Button */}
        <button onClick={scrollToSection} className="scroll-button">
          <span className="arrow-down">&#x2193;</span>{" "}
          {/* Unicode arrow down */}
        </button>
      </div>

      {/* Info Section with alternating positions for each InfoBox */}
      <div className="info-section glow-background flex flex-col gap-6 px-8">
        <div className="flex justify-start w-full">
          <InfoBox position="home" className="bg-secondary text-lightText" />
        </div>
        <div className="flex justify-end w-full">
          <InfoBox position="about" className="bg-secondary text-lightText" />
        </div>
        <div className="flex justify-start w-full">
          <InfoBox position="alerts" className="bg-secondary text-lightText" />
        </div>
        <div className="flex justify-end w-full">
          <InfoBox
            position="floodMap"
            className="bg-secondary text-lightText"
          />
        </div>
        <div className="flex justify-start w-full">
          <InfoBox position="contact" className="bg-secondary text-lightText" />
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
      </div>

      {/* Background Space Image */}
      <div className="space-background"></div>
    </div>
  );
};

export default Home;
