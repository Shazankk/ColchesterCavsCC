import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the intersection observer
import { styles } from "../styles"; // Import your custom styles
import { staggerContainer } from "../utils/motion"; // Import the stagger animation utility

const SectionWrapper = (Component, idName) => {
  const HOC = () => {
    // Intersection Observer to detect when the section is in view
    const [ref, inView] = useInView({
      threshold: 0.25, // Trigger when 25% of the section is visible
      triggerOnce: true, // Trigger only once per section
    });

    useEffect(() => {
      if (inView) {
        console.log(`${idName} section is now in view.`);
      }
    }, [inView, idName]);

    return (
      <motion.section
        ref={ref} // Attach the intersection observer ref
        variants={staggerContainer(0.2, 0.1)} // Use framer-motion's variants for animation
        initial="hidden" // Set the initial state to hidden
        animate={inView ? "show" : "hidden"} // Animate only if the section is in view
        viewport={{ once: true, amount: 0.25 }} // Viewport properties for visibility detection
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Hash link span for navigation */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component /> {/* Render the passed component */}
      </motion.section>
    );
  };

  HOC.displayName = `SectionWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return HOC;
};

export default SectionWrapper;
