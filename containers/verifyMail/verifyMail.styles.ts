"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;
export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  color: black;
  border: 1px solid red;
  text-align: center;
  border-radius: 16px;
  width: 25%;

@media screen and (max-width: 768px) {
  width: 80%;
}
`;
export const SuccessContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  color: black;
  border: 1px solid var(--primary);
  text-align: center;
  border-radius: 16px;
  width: 25%;

@media screen and (max-width: 768px) {
  width: 80%;
}
`;
