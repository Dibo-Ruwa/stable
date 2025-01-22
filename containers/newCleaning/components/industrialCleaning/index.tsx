"use client"; // If you're using Next.js 13+ app router and need client-side rendering
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ---------- Styled Components ---------- //

// Outer container with a greenish background
const IndustrialCleaningContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

// Wrapper for content layout
const IndustrialCleaningContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

// Image section styling
const IndustrialCleaningImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

// Main image styling
const IndustrialCleaningImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

// Text section styling
const IndustrialCleaningTextContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

// Button-like tag for "Industrial Cleaning"
const IndustrialCleaningButton = styled.button`
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
const IndustrialCleaningSubtitle = styled.h4`
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
const IndustrialCleaningDescription = styled.p`
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
const IndustrialCleaningLink = styled(Link)`
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

export default function IndustrialCleaning() {
  return (
    <IndustrialCleaningContainer>
      <IndustrialCleaningContent>
        {/* Image Section */}
        <IndustrialCleaningImageWrapper>
          <IndustrialCleaningImage
            src="/images/industrial_clean.jpg"
            alt="Professional industrial cleaning service"
            width={600}
            height={400}
          />
        </IndustrialCleaningImageWrapper>

        {/* Text Section */}
        <IndustrialCleaningTextContainer>
          <IndustrialCleaningButton>Industrial Cleaning</IndustrialCleaningButton>
          <IndustrialCleaningSubtitle>
            Clean Spaces, Safe Operations
          </IndustrialCleaningSubtitle>
          <IndustrialCleaningDescription>
            Our industrial cleaning services are designed to meet the unique challenges of large-scale facilities. From factories to warehouses, we ensure every space is spotless and ready for efficient operations.
          </IndustrialCleaningDescription>
          <IndustrialCleaningDescription>
            With advanced techniques and eco-friendly solutions, we guarantee a clean, safe, and sustainable environment tailored to your needs.
          </IndustrialCleaningDescription>
          <IndustrialCleaningLink href="/cleaning/request">
            Get a Quote
            <span className="get_started_icon">▶</span>
          </IndustrialCleaningLink>
        </IndustrialCleaningTextContainer>
      </IndustrialCleaningContent>
    </IndustrialCleaningContainer>
  );
}
