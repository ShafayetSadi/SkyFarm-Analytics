// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Alerts from "./pages/Alerts/Alerts";
import FloodMap from "./pages/FloodMap/FloodMap";
import Weather from "./pages/Weather/Weather";
import SkyFarmBot from "./pages/SkyFarmBot/SkyFarmBot";
import SkyFarmAI from "./pages/SkyFarmAI/SkyFarmAI";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Quiz from "./quiz_research/quiz/quiz.jsx";
import Research from "./quiz_research/research/research.jsx";
import "./App.css"; // Importing custom styles
import "./styles/animations.css"; // Import animations

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header Navigation */}
        {/* <Header /> */}

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/floodmap" element={<FloodMap />} />
            <Route path="/skyfarmai" element={<SkyFarmAI />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="research" element={<Research />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
       
        </main>


      </div>
    </Router>
  );
}

export default App;
