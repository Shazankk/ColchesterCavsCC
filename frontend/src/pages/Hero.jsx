/* eslint-disable react/no-unknown-property */
// src/components/Hero.jsx
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion";

function CricketBallModel() {
  const { scene } = useGLTF("/cricket_ball_sports/scene.gltf");

  // Increased size of the 3D model
  return <primitive object={scene} scale={5} />; // Increased scale to 14
}

const Hero = () => {
  // Framer Motion variants for slide-in animation
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-auto h-auto flex justify-center items-center bg-transparent">
      <div className="flex flex-col lg:flex-row w-full max-w-9xl mx-auto items-center justify-between">
        {/* Left Section: Welcome Message */}
        <motion.div
          className="lg:w-1/2 bg-gray-200 ease-in-out transition-all overflow-hidden dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-10 lg:mb-0 text-center lg:text-left px-4 py-8 lg:py-0"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to the <br />
            <span className="text-blue-600 dark:text-blue-400">
              Colchester Cavaliers CC
            </span>{" "}
            🎉🏏
          </h1>
          <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
            Join us for exciting cricket matches, community events, and more! We
            welcome players of all skill levels to become part of our cricket
            family.
          </p>
          {/* Buttons to Contact Us and Players sections */}
          <div className="mt-8 space-x-4 px-2 py-3">
            <a href="#contactus">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </a>
            <a href="#players">
              <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">
                Meet the Players
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Section: 3D Model */}
        <motion.div
          className="lg:w-1/2 w-full h-full flex items-center justify-center"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          style={{ height: "60vh" }} // Adjust height to make the model visible
        >
          <Canvas style={{ width: "100%", height: "100%" }}>
            <Suspense
              fallback={
                <Html>
                  <div className="loader">Loading 3D model...</div>
                </Html>
              }
            >
              {/* Lights and Controls */}
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} />
              {/* 3D Model */}
              <CricketBallModel />
              {/* Controls for interaction */}
              <OrbitControls autoRotate autoRotateSpeed={0.3} />{" "}
              {/* Speed set to 1 */}
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
