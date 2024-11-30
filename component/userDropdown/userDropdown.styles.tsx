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
`;
