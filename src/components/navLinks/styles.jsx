import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const NavLinksContainer = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  list-style: none;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
   
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20vh 5% 0;
    box-shadow: 1px 1px 8px 9px rgba(0, 0, 0, 0.051);
   background: #fff


  }
`;

export const NavItem = styled(motion.li)`
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`;
