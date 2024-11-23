"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import styled from "styled-components";
import { sublinks } from "@/constants";
import { assets } from "@/public/assets";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

const FooterContainer = styled.footer`
  background-color: #ebebeb;
  color: #000000;
  padding: 4% 5%;

  .logo {
    position: relative;
    width: 100px;
    height: 40px;
  }
`;

const FooterContent = styled.div``;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media screen and (max-width: 768px) {
          width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
  }
`;

const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #2b2b2b;
  font-family: 'Poppins', sans-serif;
`;

const SublinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Sublink = styled.li`
  margin-bottom: 8px;
  color: #2b2b2b;
`;
const SubRoutes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SublinkAnchor = styled.a`
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Column 1 */}
          <Column>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",
                  marginBottom: "16px",
                }}
                className="logo"
              >
                <Logo src="/logo.png" fill={true} alt="Logo" />
              </div>
              <p style={{ color: "#2b2b2b", marginBottom: "16px" }}>
                Making life easier, one service at a time.
              </p>
            </div>

            {/* <SubRoutes> */}
            {sublinks.map((column, index) => (
              <Column key={index}>
                <SublinkList>
                  <Title>{column.title}</Title>
                  {column.links.map((link, index) => (
                    <Sublink key={index}>
                      <SublinkAnchor href={link.path}>
                        {link.name}
                      </SublinkAnchor>
                    </Sublink>
                  ))}
                </SublinkList>
              </Column>
            ))}
            {/* </SubRoutes> */}
          </Column>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Title>Follow Us</Title>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: " -12px",
              }}
            >
              <Link
                href="https://web.facebook.com/people/Dibo-Ruwa/100091340989617/"
                style={{ color: "var(--content)", fontSize: "24px" }}
              >
                <FiFacebook />
              </Link>
              <Link
                href="https://twitter.com/DiboRuwa"
                style={{ color: "var(--content)", fontSize: "24px" }}
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/diboruwa/"
                style={{ color: "var(--content)", fontSize: "24px" }}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dibo-ruwa"
                style={{ color: "var(--content)", fontSize: "24px" }}
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </FooterGrid>

        {/* Copyright */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <p style={{ color: "#ccc", fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} DiboRuwa. All rights reserved.
          </p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
