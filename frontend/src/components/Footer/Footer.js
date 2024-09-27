import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-center lg:text-left mb-4 lg:mb-0">
          &copy; 2024 Flood Tracker. All rights reserved.
        </p>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-center">
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
