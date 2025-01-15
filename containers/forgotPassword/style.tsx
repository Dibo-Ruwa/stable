"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;

  @media screen and (max-width: 568px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const FormControl = styled.div`
  display: grid;
  gap: 8px;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  a {
    color: var(--green-bg);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div<{ $type: "success" | "error" }>`
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  background-color: ${({ $type }) =>
    $type === "success" ? "rgba(0, 200, 83, 0.1)" : "rgba(255, 0, 0, 0.1)"};
  color: ${({ $type }) =>
    $type === "success" ? "rgb(0, 200, 83)" : "rgb(255, 0, 0)"};
  border: 1px solid ${({ $type }) =>
    $type === "success" ? "rgba(0, 200, 83, 0.2)" : "rgba(255, 0, 0, 0.2)"};
`;
