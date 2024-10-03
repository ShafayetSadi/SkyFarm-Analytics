import React from "react";
import "./About.css";
import Menu from "../../components/Menu/Menu"; // Import the Menu component
import SkyFarmBot from "../SkyFarmBot/SkyFarmBot"
const About = () => {
  return (
    <div className="about-container bg-primary min-h-screen p-8 flex flex-col items-center justify-center relative">
      {" "}
      {/* Add relative positioning */}
      <div className=" absolute top-5 left-5">
        <Menu /> {/* Add the Menu component here */}
      </div>
      {/* Neon Title with Subtle Glow Effect */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-neon-green glow-effect animate-glow-pulse">
        SkyFarm Analytics
      </h1>
      {/* Mission and Vision Section */}
      <div className="text-section bg-secondary rounded-lg shadow-lg p-8 mb-10 max-w-4xl animate-fade-in-up">
        <h2 className="text-3xl font-semibold text-center text-lightText mb-4 animate-slide-in-left">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 animate-fade-in delay-1">
          At SkyFarm Analytics, our mission is to empower farmers and
          communities with cutting-edge data analytics to monitor and adapt to
          environmental challenges. We provide real-time insights using advanced
          satellite technology and predictive algorithms to optimize resource
          usage and combat climate-induced agricultural challenges, including
          floods, droughts, and soil degradation.
        </p>

        <h2 className="text-3xl font-semibold text-center text-lightText mb-4 animate-slide-in-left delay-2">
          Our Vision
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-3">
          We envision a future where technology and nature coexist harmoniously,
          where farms are smart, self-sustaining ecosystems. Through continuous
          innovation and global data collaboration, SkyFarm Analytics strives
          to create a world where food production is resilient, sustainable, and
          accessible for all, while mitigating the effects of climate change on
          agriculture.
        </p>
      </div>
      <a
        href="/contact"
        className="explore-button bg-neon-cyan text-neonBlue font-bold py-3 px-6 rounded-full shadow-md hover:bg-neon-green transition-transform transform hover:scale-105 animate-glow-btn"
      >
        Contact Us
      </a>
      <SkyFarmBot />
    </div>
  );
};

export default About;
