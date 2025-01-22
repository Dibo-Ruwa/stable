'use client'

import styled from "styled-components";

export const ModalWrapper = styled.div<{ isModal?: boolean }>`
  display: ${({ isModal }) => (isModal ? "block" : "none")};
  justify-content: center;
  align-items: center;
  position: ${(isModal) => (isModal ? "fixed" : "relative")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: ${(isModal) => (isModal ? "blur(8px)" : "none")};
  z-index: 999;
  background: ${(props) => (props.isModal ? "rgba(0, 0, 0, 0.5)" : "none")};
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--input-bg);
  color: #fff;
  transition: all 0.5s ease-in-out;
  z-index: 999;

  @media screen and (max-width: 768px) {
    top: 30px;
    right: 30px;
    background: rgba(241, 27, 98, 0.391);
  }

  &:hover {
    background: rgba(241, 27, 98, 0.391);
    transform: scale(1.2);
  }
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
`;
