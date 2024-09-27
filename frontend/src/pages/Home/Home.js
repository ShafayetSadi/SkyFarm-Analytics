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
    const material = new THREE.MeshBasicMaterial({ color: 0x0077be });
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
    <div className="relative h-screen bg-black text-white">
      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full text-center z-10 p-6">
        <h1 className="text-6xl font-extrabold mb-4 mt-72 neon-text">
          Welcome to Flood Tracker
        </h1>
        <p className="text-xl neon-subtext">
          Track real-time flood warnings and risks with our interactive tool.
        </p>
      </div>

      {/* Earth Model */}
      <div
        id="earth-model"
        className="absolute top-0 left-0 w-full h-full"
      ></div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
    </div>
  );
};

export default Home;
