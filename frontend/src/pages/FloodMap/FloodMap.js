import React, { useEffect, useRef } from "react";
import L from "leaflet";
import * as THREE from "three";
import "leaflet/dist/leaflet.css";
import "./FloodMap.css";

const FloodMap = () => {
  // Refs for Leaflet map and Three.js renderer
  const mapRef = useRef(null);
  const threeJsRef = useRef(null);

  useEffect(() => {
    // Leaflet map setup
    const map = L.map(mapRef.current).setView([51.505, -0.09], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add marker for flood alerts
    const marker = L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup("Flood alert here!")
      .openPopup();

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeJsRef.current.appendChild(renderer.domElement);

    // Create a sphere in Three.js
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize for Three.js
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Clean-up function when component unmounts
    return () => {
      map.remove(); // Clean up Leaflet map
      renderer.dispose(); // Clean up Three.js renderer
      window.removeEventListener("resize", handleResize); // Remove resize listener
    };
  }, []);

  return (
    <div className="container mx-auto p-6">
      <section className="map-container mt-16">
        <h1 className="text-3xl font-bold mb-4">Flood Map</h1>
        <div
          id="map"
          ref={mapRef}
          className="h-96 w-full rounded-md shadow-lg mb-6"
        ></div>
        <div
          id="threejs-map"
          ref={threeJsRef}
          className="w-full h-96 rounded-md shadow-lg"
        ></div>
      </section>
    </div>
  );
};

export default FloodMap;
