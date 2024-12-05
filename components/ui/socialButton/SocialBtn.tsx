"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styled from "styled-components";

export type ISocialBtnProps = {
  icon: ReactNode;
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Container = styled(motion.button)`
  padding: 10px 20px;
  outline: none;
  border: none;
  background: var(--input-bg);
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

export const Icon = styled(motion.span)`
  font-size: 20px;
`;

export const Text = styled(motion.span)`
  font-size: 16px;
  font-weight: 400;
`;

const SocialBtn: React.FC<ISocialBtnProps> = ({ icon, onPress, text, disabled }) => {
  return (
    <Container 
      onClick={disabled ? undefined : onPress} 
      whileTap={disabled ? undefined : {scale: "1.02"}}
      disabled={disabled}
    >
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Container>
  );
};

export default SocialBtn;
