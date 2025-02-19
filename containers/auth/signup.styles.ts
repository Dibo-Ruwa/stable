'use client'

import styled from "styled-components";

interface StyledProps {
  $isModal?: boolean;
  $fullWidth?: boolean;
  $type?: "success" | "error" | "info";
}

export const Container = styled.div<StyledProps>`
  ${({ $isModal }) => !$isModal && `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    border-radius: 10px;
    width: 100%;
    padding: 0; // Remove padding on mobile
    
    @media screen and (min-width: 769px) {
      padding: 20px;
      height: 100vh;
    }
  `}
`;

export const FormWrapper = styled.div<StyledProps>`
  width: ${({ $isModal }) => $isModal ? '100%' : '30%'};
  margin: auto;
  padding: 30px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-size: 45px;
  font-weight: 300;
  text-align: center;
  margin: 10px 0 10px; // Reduced bottom margin from 20px to 10px
  
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin: 10px 0 10px; // Consistent spacing on mobile
  }
`;

export const Socials = styled.div`
  display: grid;
  gap: 14px;
  filter: blur(3px);
  opacity: 0.6;
  pointer-events: none;
  .facebook {
    color: #1b79f5;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #797979;
  margin: 20px 0;
  position: relative;

  &:before {
    content: "Or Sign up with";
    position: absolute;
    top: -12px;
    left: 36%;
    font-size: 12px;
    background: #fff;
    padding: 5px 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  margin-top: 0; // Remove any top margin
  
  @media screen and (max-width: 768px) {
    justify-content: center; // Center content vertically
  }
`;

export const FormControl = styled.div`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px) {
    gap: 12px;
    margin-bottom: 15px;
  }
`;

export const ErrorMessage = styled.div<{ $type?: 'error' | 'success' }>`
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
  background-color: ${({ $type }) => 
    $type === "success" ? "rgba(0, 200, 83, 0.1)" :
    $type === "error" ? "rgba(255, 0, 0, 0.1)" :
    "rgba(0, 149, 255, 0.1)"
  };
  color: ${({ $type }) => ($type === 'success' ? '#4caf50' : '#f44336')};
  border: 1px solid ${({ $type }) => 
    $type === "success" ? "rgba(0, 200, 83, 0.2)" :
    $type === "error" ? "rgba(255, 0, 0, 0.2)" :
    "rgba(0, 149, 255, 0.2)"
  };
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

export const Button = styled.button`
  background: #0070f3;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0051cc;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 12px;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    margin-top: -15px; // Negative margin to pull it up
    padding-bottom: 20px; // Add some bottom padding
    position: relative; // Add positioning context
  }

  a {
    font-size: 12px;
    width: max-content;
    color: var(--green-bg);
    margin-left: 5px;
  }
`;

export const Link = styled.a`
  color: #0070f3;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
