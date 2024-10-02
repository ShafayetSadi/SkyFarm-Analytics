import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./InfoBox.css";

const InfoBox = ({ position }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // Track index in state

  // Full texts for each InfoBox position
  const fullTexts = {
    left: "Harness the power of innovation to safeguard our planet from flood risks. Stay informed, stay prepared.",
    right:
      "Join us in revolutionizing flood risk management through geolocation and real-time alerts.",
    center:
      "Understand the science behind floods and learn how to stay safe in emergencies with our comprehensive research.",
    extra:
      "Test your knowledge with our interactive quiz and learn more about how to protect yourself from flood hazards.",
    floodMap:
      "Explore our real-time Flood Map and stay up-to-date with changing weather conditions in your area.",
    contact:
      "Need help or want more information? Contact us for any queries or support.",
    home: "Welcome to our Flood Risk Management Platform. Learn more about our mission and vision.",
  };

  // Titles for each InfoBox position
  const titles = {
    left: "Explore the Future of Flood Prevention",
    right: "Empower Your Future with Technology",
    center: "Discover the Science Behind Floods",
    extra: "Take the Quiz: Are You Prepared?",
    floodMap: "Monitor Real-Time Flood Conditions",
    contact: "Get in Touch with Us",
    home: "Welcome to Flood Management Platform",
  };

  // Links for each box's buttons
  const links = {
    left: "/about", // Navigates to About page
    right: "/alerts", // Navigates to Alerts page
    center: "/research", // Navigates to Research page
    extra: "/quiz", // Navigates to Quiz page
    floodMap: "/floodmap", // Navigates to Flood Map page
    contact: "/contact", // Navigates to Contact page
    home: "/", // Navigates to Home page
  };

  // React hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return; // Don't start typing until in view

    if (index < fullTexts[position].length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + fullTexts[position][index]);
        setIndex(index + 1); // Move to the next character
      }, 50); // Adjust the typing speed here

      // Clear timeout when the component unmounts or when the text is fully typed
      return () => clearTimeout(timeoutId);
    }
  }, [inView, index, fullTexts, position]);

  return (
    <div
      ref={ref}
      className={`info-box bg-opacity-80 p-6 bg-black/70 rounded-lg shadow-lg border-4 ${
        position === "left"
          ? "border-l-cyan-500 animate-slide-left"
          : position === "right"
          ? "border-r-cyan-500 animate-slide-right"
          : "border-t-cyan-500 animate-slide-up"
      } glow ${inView ? "in-view" : "opacity-0"}`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-cyan-400">{titles[position]}</h2>

      {/* Typing text */}
      <p className="text-base mt-3 text-gray-200 typing-text">{text}</p>

      {/* Call-to-action button with a Link for navigation */}
      <Link to={links[position]}>
        <button className="cta-button mt-5 py-3 px-6 bg-cyan-600 rounded-md text-white shadow-md hover:shadow-cyan-400 hover:bg-cyan-700 transition-all">
          {position === "left" || position === "home"
            ? "Learn More"
            : position === "right" || position === "floodMap"
            ? "Explore More"
            : position === "contact"
            ? "Contact Us"
            : "Discover More"}
        </button>
      </Link>
    </div>
  );
};

export default InfoBox;
