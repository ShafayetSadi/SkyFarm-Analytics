// pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="container pt-32 mx-auto p-4 bg-gray-950 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">
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
