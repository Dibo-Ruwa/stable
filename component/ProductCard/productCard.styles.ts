"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  grid-gap: 15px;
  /* width: 100%; */
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CartOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-20);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;
`;
export const PrepTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-weight: bold;
    color: var(--color3);
  }
`;
export const CartBtn = styled.button`
  outline: none;
  cursor: pointer;

  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--primary);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div<{ disabled: boolean }>`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background: var(--primary-20);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  .discount_card {
    position: absolute;
    top: 10px;
    right: -20px;
    transform: rotate(45deg);
    background: red;
    color: #fff;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Additional styles for the discount element */
  }

  .vendor {
    position: absolute;
    font-size: 12px;
    bottom: 0;
    right: 0;
    background: #fff;
    color: var(--primary);
    border-top-left-radius: 8px;
    padding: 7px 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }

  &:hover {
    ${CartOverlay} {
      display: ${({ disabled }) => (disabled ? "none" : "flex")};
      opacity: 1;
    }
  }
`;
export const ProductImage = styled(Image)`
  /* width: 100%;
  height: 100%; */
`;

export const ProductInfo = styled.div`
  text-align: center;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #ccc;
    transition: all 0.33s ease-in-out;
    &:hover {
      color: var(--primary);
    }
  }
`;
export const ProductName = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #ccc;
  transition: all 0.33s ease-in-out;
  &:hover {
    color: var(--primary);
  }
`;
export const ProductPrice = styled.div`
  font-weight: light;
  font-size: 12px;
  color: var(--primary);
`;
