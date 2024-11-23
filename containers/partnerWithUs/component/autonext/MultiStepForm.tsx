import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./MultiStepForm.module.css";

const MultiStepForm: React.FC = () => {
  const controls = useAnimation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const autoHomeElement = document.getElementById("autohome");
      const navbarHeight = 60; // Adjust based on your navbar height
      const topPosition = autoHomeElement?.getBoundingClientRect().top;

      if (topPosition && topPosition <= navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFixed) {
      controls.start({
        y: 0,
        position: "fixed",
        top: "60px", // Adjust based on your navbar height
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    } else {
      controls.start({
        y: 0,
        position: "relative",
        top: "auto",
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  }, [isFixed, controls]);

  return (
    <motion.div
      id="autohome"
      className={styles.autoHome}
      animate={controls}
      initial={{ position: "relative", y: 0 }}
    >
      <h2>AutoHome Component</h2>
      {/* Add your AutoHome content here */}
    </motion.div>
  );
};

export default MultiStepForm;
