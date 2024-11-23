"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 5%;
  position: fixed;
  gap: 20px;
  left: 0;
  top: 0;
  z-index: 50;
  transition: all 200ms;

  .logo {
    position: relative;
    width: 100px;
    height: 40px;

    a {
      &::after {
        content: "beta";
        position: absolute;
        top: -10px;
        left: 70%;
        padding: 3px 8px;
        color: #fff;
        border-radius: 20px;
        font-size: 14px;
        background: var(--primary);
      }
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
      color: #27a124;
    }

    p.SA_location_text {
      color: #000000;
      font-family: 'Poppins', sans-serif;
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
    margin-left: auto;
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
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;

    &.dropdown {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px;

      &:hover {
        background: var(--primary-20);
        border-radius: 10px;
      }

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
  width: 50%;
  height: auto;
  padding: 30px;
  list-style-type: none;
  backdrop-filter: blur(8px);
  font-family: 'Poppins', sans-serif;
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
    display: none;
  }
`;
