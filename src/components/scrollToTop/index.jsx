import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTopContainer = styled(motion.div)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.031);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  z-index: 999;
`;

const ScrollToTopIcon = styled(FaArrowUp)`
  color: #ffffff;
  font-size: 20px;
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <ScrollToTopContainer
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible && { opacity: 1, y: 0 }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        exit={{ opacity: 0, y: 100 }}
      >
        <ScrollToTopIcon />
      </ScrollToTopContainer>
    </AnimatePresence>
  );
};

export default ScrollToTop;
