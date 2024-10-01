import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../InfoBox.css";

const InfoBoxRight = () => {
  const [text, setText] = useState(""); // Start as an empty string
  const fullText =
    "Empowering innovation with state-of-the-art technology solutions.";

  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger animation only once

  useEffect(() => {
    if (!inView) return; // Don't start typing until in view

    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index + 1)); // Ensure the first letter is included
        index++;
      } else {
        clearInterval(intervalId); // Stop interval when the text is complete
      }
    }, 50); // Adjust speed of typing here

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [inView, fullText]);

  return (
    <div
      ref={ref}
      className={`info-box bg-opacity-80 p-6 bg-black/70 rounded-lg shadow-lg border-r-4 border-cyan-500 glow animate-slide-right ${
        inView ? "in-view" : ""
      }`}
    >
      <h2 className="text-xl font-bold text-cyan-400">Innovate with Us</h2>
      <p className="text-base mt-3 text-gray-200 typing-text">{text}</p>
      <button className="cta-button mt-5 py-3 px-6 bg-cyan-600 rounded-md text-white shadow-md hover:shadow-cyan-400 hover:bg-cyan-700 transition-all">
        Discover More
      </button>
    </div>
  );
};

export default InfoBoxRight;
