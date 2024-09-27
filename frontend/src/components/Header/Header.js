import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center md:flex-row flex-col">
        <h1 className="text-2xl font-bold tracking-wide">Flood Tracker</h1>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 absolute top-5 right-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full h-screen md:h-auto md:w-auto items-center justify-center md:justify-between`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-3xl md:text-2xl">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/flood-map"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Flood Map
              </a>
            </li>
            <li>
              <a
                href="/alerts"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Alerts
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
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
