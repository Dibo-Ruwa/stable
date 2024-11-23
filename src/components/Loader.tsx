import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.15);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const LoaderWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin: auto;
  border-radius: 50%;
  background: #ffffff;
  animation: ${pulseAnimation} 0.85s infinite linear;
`;

const Loader = () => {
  return <LoaderWrapper />;
};

export default Loader;
