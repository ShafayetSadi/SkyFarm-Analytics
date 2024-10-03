import React from "react";
import Menu from "../../components/Menu/Menu"; // Assuming Menu component has the hamburger menu
import SkyFarmBot from "../SkyFarmBot/SkyFarmBot";

const Contact = () => {
  return (
    <div className="Contact_page">
      <div className="Menu absolute top-5 left-5">
        {/* Hamburger Menu */}
        <Menu />
      </div>

      <div className="container mx-auto pt-32 p-6 bg-dark-futuristic min-h-screen relative">
        {/* Contact Us Heading */}
        <h1 className="text-3xl font-bold text-center mb-8 text-neon-blue glow-effect">
          Contact Us
        </h1>

        {/* Contact Form */}
        <form className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
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
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
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

      {/* SkyFarmBot Component */}
      <SkyFarmBot />
    </div>
  );
};

export default Contact;
