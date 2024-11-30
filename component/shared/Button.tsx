import React from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
interface AuthButtonProps {
  text: string;
  icon: IconType;
  className?: string;
  AuthIcon?: string;
  FacebookColorClass?: string;
  buttonTextClass?: string;
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
export const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  icon: Icon,
  className = "",
  AuthIcon = "",
  FacebookColorClass = "",
  buttonTextClass="",
  onClick,
}) => {
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      <Icon className={`icon ${AuthIcon} ${FacebookColorClass}`} />
      <span className={`btnText ${buttonTextClass}`}>{text}</span>
    </button>
  );
};
