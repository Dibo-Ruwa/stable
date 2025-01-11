"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const OfficeMovingContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const OfficeMovingContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Text left
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

// A button-like tag
const OfficeMovingTag = styled.button`
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

const OfficeMovingSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

const OfficeMovingDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

const OfficeMovingLink = styled(Link)`
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
  }

  @media (min-width: 900px) {
    font-size: 15px;
    display: inline-block;
  }
`;

// Image right
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const OfficeMovingImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 700px;
`;

export default function OfficeMoving() {
  return (
    <OfficeMovingContainer>
      <OfficeMovingContent>
       

        {/* Image right */}
        <ImageWrapper>
          <OfficeMovingImage
            src="/images/fd2.png" // Replace with a bigger office-moving image
            alt="Office moving"
            width={800}
            height={600}
          />
        </ImageWrapper>

         {/* Text left */}
         <TextContainer>
          <OfficeMovingTag>Office Moving</OfficeMovingTag>
          <OfficeMovingSubtitle>Seamless Office Relocation</OfficeMovingSubtitle>
          <OfficeMovingDescription>
            Relocate your office quickly and efficiently, minimizing downtime 
            while ensuring the safety of your furniture and equipment.
          </OfficeMovingDescription>
          <OfficeMovingLink href="/moving/request">
            Get Started
            <span className="get_started_icon">▶</span>
          </OfficeMovingLink>
        </TextContainer>
      </OfficeMovingContent>
    </OfficeMovingContainer>
  );
}
