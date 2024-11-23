"use client";

import React from "react";
import styled from "styled-components";
import CSSProperties from "styled-components";
import { motion } from "framer-motion";

type ButtonProps = {
  color?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const ButtonContainer = styled(motion.button)<{
  color?: string;
  size?: "small" | "medium" | "large";
}>`
  padding: ${(props) => getSize(props.size)};
  background-color: ${(props) => `var(--${props.color})` || "blue"};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const getSize = (size?: "small" | "medium" | "large"): string => {
  switch (size) {
    case "small":
      return "8px 16px";
    case "medium":
      return "12px 24px";
    case "large":
      return "16px 32px";
    default:
      return "12px 24px";
  }
};

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  onClick,
  children,
  disabled,
}) => {
  return (
    <ButtonContainer
      color={color}
      size={size}
      onClick={disabled ? undefined : onClick}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
