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

  .LogoAndToggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1000px) {
    .LogoAndToggle {
      width: 100%;
    }
  }

  .logo {
    position: relative;
    width: 100px;
    height: 40px;
  }

  .mobile-cart-toggle {
    display: none;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1000px) {
      display: flex;
    }
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
    margin-right: 60px; /* Add margin to separate from the toggle button */

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

    .CartDropdown {
      position: absolute;

      top: 100%; // Position below the cart icon
      right: 0; // Align to the right edge of the cart icon
      width: 300px; // Adjust width to fit within the screen
      padding: 1rem;
      background: #fefefe;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .CartDropdown_mobile {
      position: absolute;
      top: 100%; // Position below the cart icon
      left: 0; // Align to the left edge of the cart icon
      width: 100%; // Adjust width to fit within the screen
      padding: 1rem;

      background: #fefefe;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .CartDropdown2 {
      position: absolute;
      top: 1.6rem;
      right: 13rem;
      // width: fit-content;
      // max-width: 100%;
      transform: translate(16rem, 2rem);
      padding: 0.7rem 2rem 2rem;
      // background: red;
      background: #fefefe;
      border-radius: 0.1rem;
    }
  }

  .SA_location {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .SA_location_icon {
      width: 28px;
      height: 28px;
      color: var(--Red, #ef5a5a);
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

export const Mobile = styled.div`
  display: none;
  // gap: 12px;
  color: #48db45;
  cursor: pointer;
  // position: relative;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    // background: red;
    gap: 10px;
    // right: 1.5rem;
  }

  .Cart_mobile {
    // background: red;
    padding: 10px;
    // background: rgba(39, 161, 36, 0.1);
    border-radius: 100px;
    color: #fff;
    // position: relative;
    // right: 1rem;
  }
`;

export const Toggle = styled.div`
  display: none;
  font-size: 24px;
  color: #48db45;
  cursor: pointer;

  z-index: 10;

  @media screen and (max-width: 1000px) {
    display: block;
    height: fit-content;
    // margin: auto;
    // position: absolute;
    // right: 1rem;
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
    l transition: color 0.3s ease; 

    &:hover {
    }

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
  @media screen and (max-width: 1000px) {
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
  // background: var(--primary-20);
  // backdrop-filter: blur(5px);
  z-index: 20;
`;

export const MobileMenu = styled(motion.ul)`
  transform-origin: top;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10vh;
  right: 0;
  left: 0;
  border-radius: 10px;
  background-color: #fff;
  z-index: 50;
  width: 94%;
  height: 80vh;
  margin: 0 auto;
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

    .CartDropdown_mobile {
      position: absolute;
      top: 100%; // Position below the cart icon
      left: 0; // Align to the left edge of the cart icon
      width: 320px; // Adjust width to fit within the screen
      padding: 1rem;
      background: #fefefe;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  }

  .SA_location {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .SA_location_icon {
      width: 28px;
      height: 28px;
      color: var(--Red, #ef5a5a);
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
