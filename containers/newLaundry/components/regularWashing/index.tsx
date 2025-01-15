"use client"; // If you’re on Next.js 13+ with the app router
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ------ Styled Components ------ //

// Main container with a consistent background and spacing
const RegularWashingContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  padding: 3rem 1rem;
`;

// A flexible wrapper for layout
const RegularWashingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 20px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

// Image container
const WashingImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

// Styled Next.js Image
const WashingImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

// Text container
const WashingTextContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-top: 0;
    text-align: left;
  }
`;

// Button tag
const WashingButton = styled.button`
  font-size: 13px;
  background: #565656;
  color: #fefefe;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  display: inline-flex;
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

// Subtitle styling
const WashingSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

// Description text
const WashingDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

// Link for CTA
const WashingLink = styled(Link)`
  color: #27a124;
  font-size: 17px;
  font-weight: 400;
  display: inline-flex;
  margin-top: 2rem;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  .get_started_icon {
    width: 15px;
    height: 15px;
    margin-bottom: 0.5rem;
    margin-left: 0.1rem;
  }

  @media (min-width: 900px) {
    font-size: 15px;
  }
`;

// ------ Component Definition ------ //

export default function RegularWashing() {
  return (
    <RegularWashingContainer>
      <RegularWashingContent>
        {/* Image Section */}
        <WashingImageWrapper>
          <WashingImage
            src="/laundry to.png"
            alt="Freshly cleaned laundry"
            width={500}
            height={500}
          />
        </WashingImageWrapper>

        {/* Text Section */}
        <WashingTextContainer>
          <WashingButton>Regular Washing</WashingButton>
          <WashingSubtitle>Everyday Laundry Made Simple</WashingSubtitle>
          <WashingDescription>
            Trust us to keep your daily wear fresh and spotless. Our expert team
            uses premium detergents and care to ensure your clothes always feel new.
          </WashingDescription>
          <WashingLink href="/laundry/request">
            Request a Quote
            <span className="get_started_icon">▶</span>
          </WashingLink>
        </WashingTextContainer>
      </RegularWashingContent>
    </RegularWashingContainer>
  );
}
