import React from "react";
import styled from "styled-components";

const InfoPassContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 13.565px;
  margin: 0 auto 2rem;
`;

const InfoPassText = styled.p`
  color: var(--Black-100, #2a2a2a);
  font-family: Poppins;
  font-size: 13.565px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.129px;
`;

const InfoPassTextarea = styled.textarea`
  width: 100%;
  height: 150.342px;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 8px;
  background: rgba(233, 233, 233, 0.31);
  resize: none;
`;

export const InfoPass = () => {
  return (
    <InfoPassContainer>
      <InfoPassText>Want to pass an info?</InfoPassText>
      <InfoPassTextarea
        placeholder="Write..."
        name="message"
        rows={4}
        cols={50}
      ></InfoPassTextarea>
    </InfoPassContainer>
  );
};
