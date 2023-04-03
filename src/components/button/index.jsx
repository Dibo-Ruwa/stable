import React from 'react';
import { StyledButton } from './styles';


const Button = ({ size, color, bordered = false, text, onClick }) => {
  return (
    <StyledButton
      size={size}
      color={color}
      bordered={bordered}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
