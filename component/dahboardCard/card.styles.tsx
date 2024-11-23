"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px;
  background: var(--primary-20);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  /* width: 100%; */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1px 2px 2px rgba(76, 150, 132, 0.086);
    cursor: pointer;
    color: var(--color4);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-size: 20px;
  width: 120px;
`;
export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--primary-20);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled(Image)`
  width: 100%;
`;
