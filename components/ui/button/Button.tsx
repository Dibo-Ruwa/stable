"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { BeatLoader } from "react-spinners";
import { Container, Icon, Text } from "./button.styles";

export type IButtonProps = {
  className?: string;
  text: string;
  icon?: string | ReactNode;
  color?: string;
  onPress?: () => void;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "bordered" | "flat" | "filled";
  loading?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
};

const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  color,
  onPress,
  className = "btn",
  fullWidth = false,
  size = "md",
  variant = "filled",
  loading = false,
  type,
  disabled,
}) => {
  return (
    <Container
      color={color}
      className={className}
      type={type}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      whileTap={!disabled || !loading ? { scale: "1.02" } : {}}
      onClick={loading ? undefined : onPress}
      disabled={loading || disabled}
    >
      {loading ? (
        <BeatLoader size={8} color="#fff" margin={2} />
      ) : (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {icon && <Icon>{icon}</Icon>}
          <Text>{text}</Text>
        </div>
      )}
    </Container>
  );
};

export default Button;
