"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  .link {
    text-decoration: none;
    color: #5b5959;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    padding: 7px;

    &:hover {
      background: var(--primary-20);
      border-radius: 10px;
    }
  }

  .userDropdownMenu {
    position: absolute;
    right: 0;
    top: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 200px; // Adjust width to fit within the screen
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 768px) {
      right: 10px; // Adjust positioning for mobile
      width: 90%; // Adjust width for mobile
      left: 5%; // Ensure it fits within the screen
    }
  }
`;
