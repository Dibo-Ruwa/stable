import React from 'react';
import { StyledButton } from './styles';


const Button = ({ size, color, bordered = false, text, onClick }) => {
  return (
    <StyledButton
      size={size}
      color={color}
      bordered={bordered}
      onClick={() => window.open("https://wa.link/fjurh5")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
