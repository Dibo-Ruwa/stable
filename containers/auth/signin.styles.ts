'use client'

import styled from "styled-components";

interface StyledProps {
  $isModal?: boolean;
  $fullWidth?: boolean;
  $type?: "success" | "error" | "info";
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 30px;
  border-radius: 30px;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 568px) {
    width: 100%;
    border-radius: 20px;
  }
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
`;

export const Title = styled.h3`
  font-size: 45px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 568px) {
    font-size: 35px;
  }
`;

export const Socials = styled.div`
  width: 100%;
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
    content: "Or Login with";
    position: absolute;
    top: -12px;
    left: 36%;
    font-size: 12px;
    background: #fff;
    padding: 5px 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 10px;
`;

export const FormControl = styled.div`
  display: grid;
  gap: 15px;
  margin-bottom: 25px;

  a {
    font-size: 12px;
    width: max-content;
    color: var(--green-bg);
    margin-left: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 15px;

  p {
    display: flex;
    gap: 5px;
  }

  a {
    color: var(--primary);
    font-weight: 500;
    text-decoration: none;
  }
`;


export const ErrorMessage = styled.div<StyledProps>`
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
  color: ${({ $type }) => 
    $type === "success" ? "rgb(0, 200, 83)" :
    $type === "error" ? "rgb(255, 0, 0)" :
    "rgb(0, 149, 255)"
  };
  border: 1px solid ${({ $type }) => 
    $type === "success" ? "rgba(0, 200, 83, 0.2)" :
    $type === "error" ? "rgba(255, 0, 0, 0.2)" :
    "rgba(0, 149, 255, 0.2)"
  };
`;