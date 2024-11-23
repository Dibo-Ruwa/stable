"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  margin: 0 auto;
`;
export const CounterBtn = styled.button`
  outline: none;
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--primary-20);
  color: #fff;
  border: 1px solid var(--primary);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background: var(--primary);
  }
`;
export const CounterValue = styled.div``;
