import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./InfoBox.css";

const InfoBox = ({ position }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullTexts = {
    weather: "Get the latest weather updates and forecasts in your area.",
    about:
      "Learn more about our mission to revolutionize flood prevention and provide essential services to keep you safe.",
    alerts:
      "Stay updated with real-time flood alerts in your area, ensuring you have the latest information at your fingertips.",
    floodMap:
      "Visualize flood data on our real-time interactive map and understand the risks in your area.",
    contact:
      "Need assistance or have any questions? Contact us for support and more information.",
    quiz: "Test your flood knowledge with our interactive quiz and enhance your preparedness for emergencies.",
    research:
      "Explore the latest research on flood risks, climate change, and prevention strategies.",
    skyfarmai:
        "Discover the power of AI and machine learning in predicting and mitigating flood risks.",
  };

  const titles = {
    about: "About Our Mission",
    alerts: "Real-Time Alerts",
    floodMap: "Explore the Flood Map",
    weather: "Weather Updates",
    contact: "Get in Touch",
    quiz: "Test Your Flood Knowledge",
    research: "Discover Our Research",
    skyfarmai: "SkyFarm AI",
  };

  const links = {
    about: "/about",
    alerts: "/alerts",
    floodMap: "/floodmap",
    weather: "/weather",
    contact: "/contact",
    quiz: "/quiz",
    research: "/research",
    skyfarmai: "/skyfarmai",
  };

  const buttonTexts = {
    about: "Read About Us",
    alerts: "Get Alerts Now",
    floodMap: "View the Flood Map",
    weather: "Check the Weather",
    contact: "Contact Us",
    quiz: "Take the Quiz",
    research: "Explore Our Research",
    skyfarmai: "Chat with SkyFarm AI",
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView || !fullTexts[position]) return;
    if (index < fullTexts[position].length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + fullTexts[position][index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, index, fullTexts, position]);

  if (!fullTexts[position]) {
    return <div>Error: Invalid position provided</div>;
  }

  return (
    <div
      ref={ref}
      className={`info-box bg-opacity-80 p-6 bg-black/70 rounded-lg shadow-lg border-4 mb-6 transition-transform transform hover:scale-105 hover:border-[#00FFFF] ${
        position === "left"
          ? "border-l-cyan-500 animate-slide-left self-start"
          : "border-r-cyan-500 animate-slide-right self-end"
      } glow ${inView ? "in-view" : "opacity-0"}`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-[#00FFFF]">{titles[position]}</h2>

      {/* Typing text */}
      <p className="text-base mt-3 text-gray-200 typing-text">{text}</p>

      {/* Call-to-action button */}
      <Link to={links[position]}>
        <button className="  transition ease-in-out  mt-5 py-3 px-6 bg-[#07b0b0] rounded-md text-white shadow-md hover:bg-gradient-to-r from-cyan-500 to-cyan-700 hover:shadow-cyan-500/50 transition-all">
          {buttonTexts[position]}
        </button>
      </Link>
    </div>
  );
};

export default InfoBox;
