import { motion } from "framer-motion";
import styled from "styled-components";

export const AccordionContainer = styled(motion.div)`
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.089);
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  width: 60%;
  margin: 20px auto;
  @media screen and (max-width: 900px) {
      width: 100%;
}
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 20px;
  /* font-weight: bold; */
  cursor: pointer;
  color: #2F6634;
`;

export const AccordionContent = styled(motion.div)`
  padding: 1rem;
  overflow: hidden;
  color: var(--sub-text);
`;