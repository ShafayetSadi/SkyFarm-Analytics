import React, { useEffect } from "react";
import * as THREE from "three";

const Home = () => {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer's DOM element only if it doesn't already exist
    const earthModelContainer = document.getElementById("earth-model");
    if (earthModelContainer && !earthModelContainer.hasChildNodes()) {
      earthModelContainer.appendChild(renderer.domElement);
    }

    // Create Earth sphere
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x005f73 });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      // Remove the renderer from the DOM and dispose of resources
      earthModelContainer.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen bg-[#1c1c1e] text-white">
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-5xl font-bold mb-4 text-white tracking-wide">
          Welcome to Flood Tracker
        </h1>
        <p className="text-lg text-gray-400 max-w-md">
          Track real-time flood warnings and risks with our interactive tool,
          designed to keep you safe and informed.
        </p>
      </div>

      {/* Earth Model */}
      <div
        id="earth-model"
        className="absolute top-0 left-0 w-full h-full"
      ></div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Home;
