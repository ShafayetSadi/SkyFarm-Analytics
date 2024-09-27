import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container mt-20 mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you're looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
