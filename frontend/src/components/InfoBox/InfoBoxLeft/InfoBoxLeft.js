import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../InfoBox.css";

const InfoBoxLeft = () => {
  const [text, setText] = useState("");
  const fullText =
    "Discover the technology that is shaping the world of tomorrow.";

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Ensure at least 50% is in view
  });

  useEffect(() => {
    if (!inView) return;

    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [inView, fullText]);

  return (
    <div
      ref={ref}
      className={`info-box bg-opacity-80 p-6 bg-black/70 rounded-lg shadow-lg border-l-4 border-cyan-500 glow ${
        inView ? "animate-slide-left in-view" : "opacity-0"
      }`}
    >
      <h2 className="text-xl font-bold text-cyan-400">Explore the Future</h2>
      <p className="text-base mt-3 text-gray-200 typing-text">{text}</p>
      <button className="cta-button mt-5 py-3 px-6 bg-cyan-600 rounded-md text-white shadow-md hover:shadow-cyan-400 hover:bg-cyan-700 transition-all">
        Learn More
      </button>
    </div>
  );
};

export default InfoBoxLeft;
