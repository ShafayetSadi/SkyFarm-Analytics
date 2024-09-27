import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Home = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 0); // Transparent background

    const canvasContainer = document.getElementById("earth-model");
    if (canvasContainer && !canvasContainer.hasChildNodes()) {
      canvasContainer.appendChild(renderer.domElement);
    }

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.maxDistance = 3;

    // Earth geometry and material
    const earthGeometry = new THREE.SphereGeometry(0.6, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/assets/img/earthmap1k.jpg"),
      bumpMap: new THREE.TextureLoader().load("/assets/img/earthbump.jpg"),
      bumpScale: 0.2,
      specularMap: new THREE.TextureLoader().load("/assets/img/earthspec.jpg"),
      shininess: 10,
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Cloud geometry and material
    const cloudGeometry = new THREE.SphereGeometry(0.63, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/assets/img/earthCloud.png"),
      transparent: true,
    });

    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Galaxy background (star field) with less clutter
    const starGeometry = new THREE.SphereGeometry(50, 64, 64); // Smaller radius
    const starMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/assets/img/galaxy.png"),
      side: THREE.BackSide,
      opacity: 0.6, // Reduce the brightness and density
      transparent: true,
    });

    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    // Atmospheric glow around the Earth
    const vertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
        gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity; // Glow color
        gl_FragColor.a *= intensity; // Gradient fade outwards
      }
    `;

    const glowMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const glowMesh = new THREE.Mesh(new THREE.SphereGeometry(0.68, 64, 64), glowMaterial);
    scene.add(glowMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);


    // Resize handling
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth and clouds
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      starMesh.rotation.y -= 0.0005;

      controls.update();
      renderer.render(scene, camera);
     
    };

    animate();

    // Cleanup on unmount
    return () => {
      
      window.removeEventListener("resize", handleResize);
      if (canvasContainer) {
        canvasContainer.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1c1c1e] text-white">
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 space-y-6">
        <h1 className="text-6xl font-bold mb-4 text-white tracking-wide">
          Welcome to Flood Tracker

        </h1>
        <p className="text-lg text-gray-400 max-w-lg">
          Track real-time flood warnings and risks with our interactive tool,
          designed to keep you safe and informed.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Learn More
        </button>
      </div>

      {/* Earth Model */}
      <div id="earth-model" className="absolute top-0 left-0 w-full h-full"></div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Home;
