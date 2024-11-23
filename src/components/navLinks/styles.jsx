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
    top: -5vh;
    right: -100%;
    width: 50%;
    height: 100vh;

    align-items: flex-start;
    justify-content: flex-start;
    padding: 20vh 5% 0;
    box-shadow: 1px 1px 8px 9px rgba(0, 0, 0, 0.051);
    background: #fff;
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

  @media screen and (min-width: 900px) {
    position: relative;

    transition: all .3s ease;

    &:hover {
      color: var(--primary);
    }

    &::before {
      content: "";
      width: 0;
      height: 3px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--primary);
      transition: all 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
