"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
from {
          transform: rotate(0deg);
}

to {
          transform: rotate(360deg);
}

`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled(Image)`
  width: 50px;
  height: 50px;
  object-fit: cover;
  animation: ${spinAnimation} 2s linear infinite;
`;
