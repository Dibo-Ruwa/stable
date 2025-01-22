"use client"; // If you're using Next.js 13+ app router and need client-side rendering
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ---------- Styled Components ---------- //

// Outer container with your greenish background
const HomeCleaningContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 3rem 1rem;
`;

// Wrapper for content layout
const HomeCleaningContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

// Wrapper for the image section
const HomeCleaningImageWrapper = styled.div`
  flex: 1;
  position: relative; /* Enables absolute positioning for inner images */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

// Main image styling
const MainImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: 400px; /* Adjust height */
  object-fit: cover;
  max-width: 600px;
`;

// Wrapper for the text section
const HomeCleaningTextContainer = styled.div`
  flex: 1;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-top: 0;
    text-align: left;
  }
`;

// Button-like tag
const HomeCleaningTag = styled.button`
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
const HomeCleaningSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

// Description paragraph
const HomeCleaningDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

// Link for "Request a Quote"
const HomeCleaningLink = styled(Link)`
  color: #27a124;
  font-size: 17px;
  font-weight: 400;
  display: inline-flex;
  margin-top: 2rem;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  /* For the arrow icon */
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

// ---------- Component Definition ---------- //

export default function HomeCleaning() {
  return (
    <HomeCleaningContainer>
      <HomeCleaningContent>
        {/* Image Section */}
        <HomeCleaningImageWrapper>
          <MainImage
            src="/images/WhatsApp Image 2024-12-06 at 15.56.10_2231738e.jpg"
            alt="Professional Home Cleaning"
            width={600}
            height={400}
          />
        </HomeCleaningImageWrapper>

        {/* Text Section */}
        <HomeCleaningTextContainer>
          <HomeCleaningTag>Home Cleaning</HomeCleaningTag>
          <HomeCleaningSubtitle>Transform Your Space with Expert Cleaning</HomeCleaningSubtitle>
          <HomeCleaningDescription>
            Experience the joy of a sparkling clean home, customized to meet your
            unique needs. Our expert team ensures every corner of your space is
            spotless, creating a healthy, comfortable, and inviting environment.
            Let us handle the hard work so you can focus on what truly matters.
          </HomeCleaningDescription>
          <HomeCleaningDescription>
            With flexible scheduling, eco-friendly products, and meticulous
            attention to detail, we provide unparalleled home cleaning services
            that fit seamlessly into your lifestyle.
          </HomeCleaningDescription>
          <HomeCleaningLink href="/cleaning/request">
            Get Started
            <span className="get_started_icon">▶</span>
          </HomeCleaningLink>
        </HomeCleaningTextContainer>
      </HomeCleaningContent>
    </HomeCleaningContainer>
  );
}
