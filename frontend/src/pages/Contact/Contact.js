import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom for navigation

const Contact = () => {
  return (
    <div className="container mx-auto pt-32 p-6 bg-dark-futuristic min-h-screen relative">
      <Link to="/" className="home-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 9l9 -6l9 6v11a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-7h-4v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
        </svg>
      </Link>
      <h1 className="text-3xl font-bold text-center mb-8 text-neon-blue glow-effect">
        Contact Us
      </h1>
      <form className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-cyan-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-500 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
