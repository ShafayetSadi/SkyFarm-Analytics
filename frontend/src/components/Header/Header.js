// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg fixed w-screen top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Flood Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/flood-map" className="hover:text-blue-400">
                Flood Map
              </a>
            </li>
            <li>
              <a href="/alerts" className="hover:text-blue-400">
                Alerts
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
