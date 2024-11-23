"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const AccordionWrapper = styled(motion.div)`
  border-radius: 12px;
  background-color: var(--primary-20);
  height: auto;
  max-width: 500px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AccordionButton = styled(motion.button)`
  display: flex;
  padding: 18px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  color: #333;
  text-align: left;
  outline: none;
  border: none;
  background: transparent;
  font-size: 18px;
  border-radius: 12px;
  transition: background 0.5s ease;

  &.active {
    background: var(--primary-20);
  }

  &:hover {
     background: var(--primary-20);
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
    font-size: 15px;
  }
`;

export const AccordionContent = styled(motion.div)`
  &.collapse {
    position: relative;
    height: 0;
    overflow: hidden;
    color: #22223b;
    transition: height 0.5s ease;

    &.show {
      height: auto;
    }
  }

  p {
    line-height: 1.3;
    padding: 15px;
  }
`;
