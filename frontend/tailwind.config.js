/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1e",  // Dark background color
        secondary: "#2a2a2c", // Slightly lighter background color
        accent: "#0bc5ea",    // Cyan for buttons, links, or important highlights
        highlight: "#34d399", // Green highlight color
        danger: "#ef4444",    // Red for warnings or alerts
        lightText: "#e5e7eb", // Light text color for readability on dark backgrounds
        darkText: "#374151",  // Dark text for contrast on lighter areas
      },
      animation: {
        "fade-in-delay": "fadeIn 2s ease-in-out 0.5s forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
