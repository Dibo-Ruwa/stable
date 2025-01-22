"use client"; // If you're using Next.js 13+ app router and need client-side rendering
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ---------- Styled Components ---------- //

// Outer container with your greenish background
const OfficeCleaningContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

// Wrapper for content layout
const OfficeCleaningContent = styled.div`
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

// Text section styling
const OfficeCleaningTextContainer = styled.div`
  flex: 1;
  text-align: center;
  order: 2; /* Ensure text comes second on mobile */

  @media (min-width: 900px) {
    text-align: left;
    order: 1; /* Ensure text comes first on desktop */
  }
`;

// Button-like tag for "Office Cleaning"
const OfficeCleaningButton = styled.button`
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
const OfficeCleaningSubtitle = styled.h4`
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
const OfficeCleaningDescription = styled.p`
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
const OfficeCleaningLink = styled(Link)`
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

// Image section styling
const OfficeCleaningImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  order: 1; /* Ensure image comes first on mobile */

  @media (min-width: 900px) {
    justify-content: flex-end;
    order: 2; /* Ensure image comes second on desktop */
  }
`;

// Main image styling
const OfficeCleaningImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

// ---------- Component Definition ---------- //

export default function OfficeCleaning() {
  return (
    <OfficeCleaningContainer>
      <OfficeCleaningContent>
        {/* Image Section */}
        <OfficeCleaningImageWrapper>
          <OfficeCleaningImage
            src="/images/office_cleaning.jpg"
            alt="Professional office cleaning service"
            width={500}
            height={500}
          />
        </OfficeCleaningImageWrapper>

        {/* Text Section */}
        <OfficeCleaningTextContainer>
          <OfficeCleaningButton>Office Cleaning</OfficeCleaningButton>
          <OfficeCleaningSubtitle>
            Pristine Offices, Better Productivity
          </OfficeCleaningSubtitle>
          <OfficeCleaningDescription>
            A clean office isn’t just about aesthetics—it’s about fostering a
            healthy, productive workspace. Our specialized office cleaning
            services are designed to create a welcoming and efficient
            environment tailored to your team’s needs.
          </OfficeCleaningDescription>
          <OfficeCleaningLink href="/cleaning/request">
            Get a Quote
            <span className="get_started_icon">▶</span>
          </OfficeCleaningLink>
        </OfficeCleaningTextContainer>
      </OfficeCleaningContent>
    </OfficeCleaningContainer>
  );
}
