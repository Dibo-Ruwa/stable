import React, { Fragment } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.span)`
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  
`;

const Word = styled(motion.span)`
  display: inline-flex;
 
`;

const AnimateWord = ({
  text,
  tag = "span",
  variants,
  duration = 0.5,
  transition = {},
  stagger = 0.3,
  ...restProps
}) => {
  const words = text.split(" ");

  const hasSpaces = words.length > 1;
  const spaceVariant = hasSpaces
    ? { visible: { opacity: 1 }, hidden: { opacity: 0 } }
    : {};

  const Tag = tag;

  return (
    <Wrapper
      as={Tag}
      variants={{ ...variants, space: spaceVariant }}
      initial="hidden"
      animate="visible"
      transition={transition}
      {...restProps}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <Word
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration, ...transition, delay: index * stagger }}
          >
            {word}
          </Word>
          {hasSpaces && index < words.length - 1 && (
            <span variants={{ space: spaceVariant }}>&nbsp;</span>
          )}
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default AnimateWord;
