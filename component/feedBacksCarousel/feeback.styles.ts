import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
`;

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  height: 300px;
  /* min-width: 600px; */
  overflow: hidden;
  @media screen and (max-width: 900px) {
    min-height: 400px;
  }
`;

export const Carousel = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Slide = styled(motion.div)`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.button`
  margin: 0 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: var(--primary);
  color: white;
  cursor: pointer;
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 16px;
  position: absolute;
  top: 3%;
  left: 0;
`;

export const PaginationItem = styled.li<{ isActive: boolean }>`
  margin: 0 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "var(--primary)" : "gray")};
  cursor: pointer;
`;
