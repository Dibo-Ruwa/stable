import React from "react";
import logo from "../../assets/dibo_ruwa_logo.png";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { transition } from "../../exports";

export default function Logo() {
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <Container whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.04 }}>
      <motion.img
        variants={item}
        transition={transition}
        initial="hidden"
        animate="show"
        src={logo}
        alt="dibo_ruwa"
      />
      <motion.h3
        variants={item}
        transition={transition}
        initial="hidden"
        animate="show"
      >
        Dibo Ruwa
      </motion.h3>
    </Container>
  );
}
