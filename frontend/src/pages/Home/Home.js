import React from "react";
import EarthModel from "../../components/EarthModel/EarthModel";
import SciFiText from "../../components/SciFiText/SciFiText";
import InfoBoxLeft from "../../components/InfoBox/InfoBoxLeft/InfoBoxLeft";
import InfoBoxRight from "../../components/InfoBox/InfoBoxRight/InfoBoxRight";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1c1c1e] text-white font-mono">
      {/* Sci-Fi Text Section */}
  

      {/* Earth Model */}
      <div className="flex items-center justify-center relative h-full">
        <EarthModel />

        {/* Info boxes */}
        <div className="absolute top-1/3 left-0 ml-8">
          <InfoBoxLeft />
        </div>

        <div className="absolute top-2/3 right-0 mr-8">
          <InfoBoxRight />
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Home;
