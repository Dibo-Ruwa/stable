"use client"; // If you’re on Next.js 13+ app router
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

/* --- Styled Components --- */
const HomeMovingContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const HomeMovingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
  gap: 30px;

  @media (min-width: 900px) {
    flex-direction: row; 
    justify-content: space-between;
  }
`;

// Image on the left
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

const HomeMovingImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  /* "Bigger" image example: set a max-width to control it */
  max-width: 700px;
  
`;

const TextContainer = styled.div`
  flex: 1;
  margin-top: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-bottom: 2rem;
    padding-bottom: 0;
    text-align: left;
  }
`;

// A small button that acts like a "tag"
const HomeMovingTag = styled.button`
  font-size: 13px;
  background: #565656;
  color: #fefefe;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 900px) {
    padding: 8px 25px;
  }
`;

const HomeMovingSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

const HomeMovingDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

const HomeMovingLink = styled(Link)`
  color: #27a124;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: fit-content;

  .get_started_icon {
    width: 15px;
    height: 15px;
    margin-left: 0.5rem;
  }

  @media (min-width: 900px) {
    font-size: 15px;
    display: inline-block;
  }
`;

/* --- Component Definition --- */
export default function HomeMoving() {
  return (
    <HomeMovingContainer>
      <HomeMovingContent>
        {/* Image Left */}
        <ImageWrapper>
          <HomeMovingImage
            src="/images/fd2.png" // Replace with your bigger home-moving image
            alt="Home moving"
            width={800}
            height={600}
          />
        </ImageWrapper>

        {/* Text Right */}
        <TextContainer>
          <HomeMovingTag>Home Moving</HomeMovingTag>
          <HomeMovingSubtitle>Hassle-Free Home Relocation</HomeMovingSubtitle>
          <HomeMovingDescription>
            Our home moving services ensure a smooth transition for your household items, 
            giving you peace of mind and an easy move into your new home.
          </HomeMovingDescription>
          <HomeMovingLink href="/moving/request">
            Get Started
            <span className="get_started_icon">▶</span>
          </HomeMovingLink>
        </TextContainer>
      </HomeMovingContent>
    </HomeMovingContainer>
  );
}
