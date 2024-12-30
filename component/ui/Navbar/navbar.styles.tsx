"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const NavbarContainer = styled.section`
  background: rgb(255, 255, 255);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 50;
  transition: all 200ms;
  border-bottom: 1px solid var(--primary-20);
`;

export const NavbarFrame = styled.div`
  width: min(93%, 1440px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem auto;
  gap: 20px;

  .logo {
    position: relative;
    width: 100px;
    height: 40px;
  }

  .cart {
    width: 50px;
    height: 50px;
    padding: 10px;
    gap: 10px;
    background: rgba(39, 161, 36, 0.1);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;

    .badge {
      width: 20px;
      height: 20px;
      background: #27a124;
      color: #fff;
      position: absolute;
      border-radius: 50%;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }

    .cart_icon {
      display: flex;
      width: 24px;
      height: 24px;
      justify-content: center;
      align-items: center;
    }
  }

  .SA_location {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .SA_location_icon {
      width: 28px;
      height: 28px;
      color: var(--Red, #EF5A5A);
    }

    p.SA_location_text {
      color: #000000;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-style: normal;
      line-height: normal;
    }
  }
`;

export const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const Toggle = styled.div`
  display: none;
  font-size: 24px;
  color: #48db45;
  cursor: pointer;

  z-index: 10;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 2rem;
  }
`;

export const MenuList = styled(motion.ul as any)`
  display: flex;
  gap: 30px;
  align-items: center;

  list-style: none;

  .menu {
    display: flex;
    align-items: center;
  }

  a.link {
    color: #2a2a2a;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;

    &.dropdown {
      display: flex;
      gap: 10px;
      align-items: center;

      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--primary-20);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SMCDI = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const MobileMenuBackdrop = styled(motion.div as any)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  padding: 16px;
  font-size: 16px;
  background: var(--primary-20);
  backdrop-filter: blur(5px);
  z-index: 20;
`;

export const MobileMenu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10vh;
  right: 20%;
  border-radius: 10px;
  background-color: #fff;
  z-index: 50;
  width: 20rem;
  height: 70vh;
  padding: 30px;
  list-style-type: none;
  backdrop-filter: blur(8px);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  gap: 20px;

  .menu {
    display: flex;
    align-items: center;
  }

  a.link {
    text-decoration: none;
    color: #5b5959;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

export const Cta = styled.a`
  text-decoration: none;
  color: white;
  background: var(--primary);
  padding: 8px 20px;
  border-radius: 6px;

  @media screen and (max-width: 900px) {
    padding: 8px 14px;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Toast = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  z-index: 1000;
  animation: ${(props) => (props.$isVisible ? slideIn : fadeOut)} 0.3s
    ease-in-out;

  svg {
    font-size: 1.2rem;
  }
`;