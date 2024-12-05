'use client'

import styled from "styled-components";

interface StyledProps {
  $fullWidth?: boolean;
  $sizes?: "sm" | "md" | "lg";
  $variants?: "bordered" | "flat";
  $progress?: number;
  $error?: string;
}

export const Container = styled.div<StyledProps>`
  display: grid;
  gap: 4px;
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  font-size: 16px;
  text-transform: capitalize;
`;

export const InputEl = styled.input<StyledProps>`
  padding: ${({ $sizes }) =>
    $sizes === "sm" ? "10px" : $sizes === "lg" ? "20px" : "15px"}
    20px;
  background-color: var(--input-bg);
  outline: none;
  border: ${({ $variants }) =>
    $variants === "bordered" ? "1px solid var(--border-color)" : "none"};
  border-radius: 8px;
  font-size: 16px;
  z-index: 5;
  width: 100%;

  &::placeholder {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div<StyledProps>`
  position: relative;
  width: 100%;
`;

export const Toggle = styled.div`
  position: absolute;
  right: 10px;
  top: 25%;
`;

export const Error = styled.span<StyledProps>`
  color: rgba(255, 0, 0, 0.469);
  position: absolute;
  transition: all 0.3s ease-in-out;
  bottom: ${({ $error }) => ($error ? "-25px" : "5px")};
  right: 0;
  z-index: 1;
  opacity: ${({ $error }) => ($error ? 1 : 0)};
`;

export const PasswordMeter = styled.div<StyledProps>`
  height: 8px;
  background: 
    ${({ $progress }) =>
      $progress < 33 ? "#FF6565" : $progress < 66 ? "#FED330" : "#2ECC71"}
  ;
  border-radius: 4px;
  margin-top: 5px;
  width: ${({ $progress }) => `${$progress}%`};
  transition: width 0.3s ease-in-out;
`;
