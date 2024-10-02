import React, { useEffect } from "react";
import * as THREE from "three";

const About = () => {
  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const container = document.getElementById("threejs-container");

    // Make the renderer responsive
    const resizeRenderer = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Set initial size and attach the renderer to the DOM
    resizeRenderer();
    if (container && !container.hasChildNodes()) {
      container.appendChild(renderer.domElement);
    }

    // Create a floating, rotating cube with accent color
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0bc5ea });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.y = Math.sin(Date.now() * 0.002) * 0.5; // Floating effect
      renderer.render(scene, camera);
    };

    animate();

    // Listen to window resize and adjust the renderer size
    window.addEventListener("resize", resizeRenderer);

    // Clean up the renderer and event listeners when the component unmounts
    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      window.removeEventListener("resize", resizeRenderer);
    };
  }, []);

  return (
    <div className="container mx-auto p-6">
      <section className="text-center bg-secondary p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-lightText">
          About Flood Tracker
        </h1>
        <p className="text-lg mb-6 text-lightText">
          Flood Tracker provides real-time flood alerts using cutting-edge
          technologies. Our mission is to ensure the safety and awareness of
          people during critical events.
        </p>
      </section>

      <div
        id="threejs-container"
        className="w-full h-96 max-w-full p-6 relative overflow-hidden bg-primary"
      ></div>
    </div>
  );
};

export default About;
