"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)<{
  className: string;
  fullWidth?: boolean;
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: "bordered" | "flat" | "filled";
  loading?: boolean;
  disabled?: boolean;
}>`
  padding: ${({ size }) => {
    switch (size) {
      case "sm":
        return "10px 15px";
      case "md":
        return "15px 20px";
      case "lg":
        return "20px 25px";
      default:
        return "15px 20px";
    }
  }};
  border: ${({ variant, color }) => {
    switch (variant) {
      case "bordered":
        return `2px solid ${color ? color : "var(--green-bg)"}`;
      case "flat":
        return "none";
      case "filled":
      default:
        return "none";
    }
  }};
  background: ${({ color, variant, disabled, loading }) => {
    if (disabled || loading) {
      return "var(--disabled-green)";
    }
    if (variant === "filled") {
      return color ? color : "var(--green-bg)";
    }
    if (variant === "bordered") {
      return "transparent";
    }
    return "transparent";
  }};
  outline: none;
  color: ${({ variant, color }) =>
    variant === "bordered" ? (color ? color : "var(--green-bg)") : "#fff"};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: ${({ loading, disabled }) =>
    loading || disabled ? "not-allowed" : "pointer"};
`;

export const Icon = styled(motion.span)`
  font-size: 16px;
`;

export const Text = styled(motion.span)`
  font-size: 16px;
`;
