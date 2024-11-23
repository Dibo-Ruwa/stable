"use client";
import Link from "next/link";

import styled from "styled-components";

export const ServiceCardContainer = styled.div<{ bg: string }>`
  /* display: flex;
  flex-direction: column; */

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 20px 30px;
  border-radius: 8px;
  background-color: ${(props) => `var(--${props.bg})`};
  width: 100%;
  height: 300px;

  max-width: 350px;
  z-index: 5;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ServiceCardImage = styled.div<{ bg: string }>`
  width: 80px;
  height: 80px;
  background-color: ${(props) => `var(--${props.bg})`};
  border-radius: 50%;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 50%;
  }

 
`;

export const ServiceCardTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 8px;
  color: #000;
`;

export const ServiceCardContent = styled.p`
  font-size: 18px;
  color: var(--content);
`;

export const ServiceCardCTA = styled(Link)<{
  ctaTextColor: string;
  bg: string;
}>`
  display: inline-flex;
  align-items: center;
  color: ${(props) => `var(--${props.ctaTextColor})`};
  background-color: ${(props) => `var(--${props.bg})`};
  margin-top: 16px;
  transition: color 0.3s;
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 20px;
  transition: all 0.5s ease;

  .arrow-icon {
    display: none;
    transition: display 0.5s ease;
  }

  &:hover {
    .arrow-icon {
      display: flex;
    }
  }
`;

export const ServiceCardArrowIcon = styled.span`
  margin-left: 4px;
`;
