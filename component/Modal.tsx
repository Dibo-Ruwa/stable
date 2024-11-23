"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";

const Overlay = styled(motion.div)<{ open: boolean }>`
  position: ${({ open }) => (open ? "fixed" : "")};
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: ${({ open }) =>
    open ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: ${({ open }) => (open ? "blur(10px)" : "none")};
`;

const ModalContainer = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  width: 80%;
  max-width: 400px;
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1444px;
    padding: 30px 0 7px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  color: #999;
  transition: color 0.15s;
  outline: none;
  border: none;
  background: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #f00;
  }
`;

interface ModalProps {
  open: boolean;

  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <Overlay
      open={open}
      initial="hidden"
      animate="visible"
      variants={overlayVariants}
      transition={{ duration: 0.3 }}
    >
      <ModalContainer
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        {open && (
          <CloseButton onClick={onClose}>
            <VscClose size={20} />
          </CloseButton>
        )}

        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
