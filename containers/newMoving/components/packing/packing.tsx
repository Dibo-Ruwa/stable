"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const PackingUnpackingContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

/* Reduced gap from 20px to 10px (or any smaller value you prefer) */
const PackingUnpackingContent = styled.div`
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

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const PackingUnpackingImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
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

const PackingUnpackingTag = styled.button`
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

const PackingUnpackingSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

const PackingUnpackingDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

const PackingUnpackingLink = styled(Link)`
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

export default function PackingUnpacking() {
  return (
    <PackingUnpackingContainer>
      <PackingUnpackingContent>
       
        <TextContainer>
          <PackingUnpackingTag>Packing & Unpacking</PackingUnpackingTag>
          <PackingUnpackingSubtitle>Stress-Free Packing</PackingUnpackingSubtitle>
          <PackingUnpackingDescription>
            Keep your belongings safe with our expert packing and unpacking 
            services. We handle all the details so you can settle in quickly.
          </PackingUnpackingDescription>
          <PackingUnpackingLink href="/moving/request">
            Get Started
            <span className="get_started_icon">▶</span>
          </PackingUnpackingLink>
        </TextContainer>

        <ImageWrapper>
          <PackingUnpackingImage
            src="/images/fd2.png"
            alt="Packing & Unpacking"
            width={800}
            height={600}
          />
        </ImageWrapper>
      </PackingUnpackingContent>
    </PackingUnpackingContainer>
  );
}
