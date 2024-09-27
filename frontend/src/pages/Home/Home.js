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
    renderer.setPixelRatio(window.devicePixelRatio);

    // Append the renderer's DOM element only if it doesn't already exist
    const earthModelContainer = document.getElementById("earth-model");
    if (earthModelContainer && !earthModelContainer.hasChildNodes()) {
      earthModelContainer.appendChild(renderer.domElement);
    }

    // Water-like sphere (larger)
    const geometry = new THREE.SphereGeometry(15, 64, 64); // Larger sphere
    const waterTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/waternormals.jpg" // High-resolution water texture
    );
    waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
    waterTexture.repeat.set(4, 4); // More tiling for detailed water ripples

    const material = new THREE.MeshPhongMaterial({
      color: 0x005f73, // Water-like color
      shininess: 150, // Increase glossiness
      bumpMap: waterTexture, // Use bump map for water ripples
      bumpScale: 0.6, // Larger bump scale for more pronounced ripples
      specular: 0x99ccff, // Light blue specular highlights
      reflectivity: 1, // Increase reflectivity for water effect
    });

    const waterSphere = new THREE.Mesh(geometry, material);
    scene.add(waterSphere);

    // Lighting to reflect on water surface
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // Bright ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    camera.position.z = 30; // Zoom out to keep the sphere large in view

    // Animation for waves (rotation and ripple effect)
    let clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      // Increase wave movement by distorting the bump map over time
      const time = clock.getElapsedTime();
      waterTexture.offset.x = time * 0.02; // Slow horizontal movement for bigger waves
      waterTexture.offset.y = time * 0.02; // Slow vertical movement

      waterSphere.rotation.y += 0.005; // Slow rotation of the sphere

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

      {/* Water Sphere Model */}
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
