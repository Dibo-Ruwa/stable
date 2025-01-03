"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const ToastWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  gap: 10px;
  animation: ${fadeInOut} 3s ease-in-out;
  z-index: 1000;
`;

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide toast after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <ToastWrapper $isVisible={isVisible}>
      <FaCheckCircle />
      {message}
    </ToastWrapper>
  );
};