"use client";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-20);
  padding: 20px;
  border-radius: 20px;
  display: grid;
  grid-gap: 20px;
`;
export const Column = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .select {
    width: 140px;
  }

  strong {
    font-size: 20px;
    font-weight: bold;
    color: var(--content);
    text-transform: capitalize;
  }

  span {
    font-size: 18px;
  }
`;

export const PayButton = styled.button`
  padding: 12px 25px;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
`;
// export const Container = styled.div``;