import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import InfoSection from "../../components/InfoSection/InfoSection"; // Import the new component
import "./Home.css";

const Home = () => {
  return (
    <div className="relative w-full bg-[#1c1c1e] text-white font-mono">
      {/* Earth Model */}
      <div className="earth-container">
        <EarthModel />
      </div>

      {/* Info Section */}
      <InfoSection />

      {/* Background Space Image */}
      <div className="space-background">
        {/* Optional: you can add a space background image or more content here */}
      </div>
    </div>
  );
};

export default Home;
