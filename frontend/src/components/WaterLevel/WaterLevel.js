import React from "react";
import "./WaterLevel.css";

const WaterLevel = ({ currentLevel, dangerLevel }) => {
  // Calculate percentage positions for current and danger levels
  const currentLevelPercentage = (currentLevel / dangerLevel) * 100;
  const currentLevelPosition = `${100 - currentLevelPercentage}%`; // Blue line position
  const waveHeight = `${currentLevelPercentage}%`; // Wave should not exceed this height

  return (
    <div className="water-level-container">
      <div className="header">
        <div className="inner-header flex">
          <h1>Water Level</h1>
        </div>
        <div className="water-info">
          <p>Current Level: {currentLevel}m</p>
          <p>Danger Level: {dangerLevel}m</p>
        </div>

        {/* Water wave */}
        <div className="wave-wrapper">
          {/* Current water level line */}
          <div
            className="current-level-line"
            style={{ bottom: currentLevelPosition }}
          ></div>

          {/* Danger water level line */}
          <div className="danger-level-line"></div>

          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            style={{
              height: waveHeight, // Dynamically set the wave height
              bottom: 0, // Align the wave to the bottom of the container
            }}
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WaterLevel;
