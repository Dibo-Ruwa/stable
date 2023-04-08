import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: 0 0;
  backdrop-filter: blur(20px);
  padding: 0 5%;
  z-index: 999;
  max-width: 1800px;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: top 0.3s;
  ${({ visible }) =>
    !visible &&
    `
    top: -50px;
  `}

a {
      color: #333;
      transition: all .3s ease;

      &:hover {
          color: var(--primary);

      }
    }

  .socials {
    display: flex;
    gap: 20px;

  
  }
`;

const ContactBar = ({ visible }) => (
  <TopBar visible={visible}>
    <div> Contact Us: <a href="tel:+2348059303261">+2348059303261</a>
       </div>
    <div className="socials">
      <a rel="noreferrer" target="_blank" href="https://web.facebook.com/people/Dibo-Ruwa/100091340989617/">
        <FaFacebook />
      </a>
      <a rel="noreferrer" target="_blank" href="https://twitter.com/DiboRuwa">
        <FaTwitter />
      </a>
      <a rel="noreferrer" target="_blank" href="https://www.instagram.com/diboruwa/">
        <FaInstagram />
      </a>
    </div>
  </TopBar>
);

export default ContactBar;
