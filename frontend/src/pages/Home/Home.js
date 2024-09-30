import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import InfoBoxLeft from "../../components/InfoBox/InfoBoxLeft/InfoBoxLeft";
import InfoBoxRight from "../../components/InfoBox/InfoBoxRight/InfoBoxRight";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative w-full bg-[#1c1c1e] text-white font-mono">
      {/* Earth Model */}
      <div className="earth-container">
        <EarthModel />
      </div>

      {/* Info Section */}
      <div className="info-section relative z-10 pt-8">
        {/* Info Box 1 */}
        <div className="flex justify-between mb-8 px-8">
          <InfoBoxLeft />
          <InfoBoxRight />
        </div>
        {/* Info Box 2 */}
        <div className="flex justify-between mb-8 px-8">
          <InfoBoxLeft />
          <InfoBoxRight />
        </div>
        {/* Info Box 3 */}
        <div className="flex justify-between mb-8 px-8">
          <InfoBoxLeft />
          <InfoBoxRight />
        </div>
      </div>

      {/* Background Space Image */}
      <div className="space-background">
        {/* Optional: you can add a space background image or more content here */}
      </div>
    </div>
  );
};

export default Home;
