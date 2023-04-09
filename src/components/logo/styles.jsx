import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 20px;
  align-items: center;
  overflow: hidden;
color: #2F6634;
  img {
    width: 40px;
    margin-top: -3px;
  }

  h3 {
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const SLogan = styled.p`
color: #2F6634;
font-weight: bold;

`;