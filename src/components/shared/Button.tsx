import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
}) => {
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
