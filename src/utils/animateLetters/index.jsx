import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.span)`
  display: inline-flex;
`;

const Char = styled(motion.span)`
  display: inline-block;
`;

const AnimateLetter = ({
  text,
  tag = "span",
  variants,
  duration = 0.5,
  transition = {},
  stagger = 0.05,
  ...restProps
}) => {
  const characters = text.split("");

  const Tag = tag;

  return (
    <Wrapper
      as={Tag}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={transition}
      {...restProps}
    >
      {characters.map((char, index) => (
        <Char
          key={`${char}-${index}`}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration, ...transition, delay: index * stagger }}
        >
          {char === " " ? "\u00A0" : char}
        </Char>
      ))}
    </Wrapper>
  );
};

export default AnimateLetter;
