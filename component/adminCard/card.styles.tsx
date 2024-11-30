"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px;
  background: var(--primary-20);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1px 2px 2px rgba(76, 150, 132, 0.086);
    cursor: pointer;
    color: var(--color4);
  }


  
  border: 1px solid var(--primary);

 

  .value {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--primary-20);
    color: var(--colr2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
   font-size: 24px;
    font-weight: bold;
    color: var(--color4);
`;

