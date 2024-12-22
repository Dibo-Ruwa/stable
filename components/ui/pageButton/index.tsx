import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-greenBg hover:bg-disabledGreen text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
