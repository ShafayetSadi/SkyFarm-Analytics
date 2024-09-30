import React, { useEffect, useRef, useState } from "react";
import "./SciFiText.css";

const SciFiText = ({ index, children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [randomPosition, setRandomPosition] = useState({});

  useEffect(() => {
    // Randomize the position of the text either to the left or right
    const randomizePosition = () => {
      const side = Math.random() > 0.5 ? "left" : "right";
      const topOffset = `${index * 100}vh`; // Large vertical spacing for scrolling

      setRandomPosition({
        [side]: "10%", // Set a 10% margin from the side
        top: topOffset, // Significant vertical spacing
      });
    };
    randomizePosition();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={textRef}
      style={randomPosition}
      className={`absolute z-10 space-y-6 text-center transition-all duration-1000 ease-out ${
        isVisible ? "animate-slide-in" : "opacity-0 translate-y-20"
      }`}
    >
      <h1 className="text-6xl font-bold mb-4 text-white tracking-wide neon-text typing-animation">
        {children}
      </h1>
      <p className="text-lg text-gray-400 max-w-lg neon-text typing-animation-delay">
        Track real-time flood warnings and risks with our interactive tool,
        designed to keep you safe and informed.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 neon-button text-white rounded-full hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default SciFiText;
