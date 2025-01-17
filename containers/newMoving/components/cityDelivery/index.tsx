"use client"; // Only if you’re on Next.js 13+ (app router) and need client-side rendering
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// ------ Styled Components ------ //

// A container with a subtle background, similar to Sustainable Detergent
const CityDeliveryContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

// Main flex container: text on the left, images on the right (on larger screens)
const CityDeliveryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  margin: 0 auto;
  width: 90%;
  gap: 30px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Text container (aligned left on large screens, centered on mobile)
const CityDeliveryTextContainer = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-bottom: 2rem;
    padding-bottom: 0rem;
    text-align: left; /* text on the left for larger screens */
  }
`;

// A button-like element (similar style to "SustainableDetergentButtonText")
const CityDeliveryButtonText = styled.button`
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

// Subtitle for the city delivery service
const CityDeliverySubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

// Paragraph text
const CityDeliveryDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

// Link styled like "Request a Quote"
const CityDeliveryLink = styled(Link)`
  color: #27a124;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: fit-content; /* so it only takes up the space of the text */

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

// Container for the group of images
const CityDeliveryInnerImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    margin: -2rem 0 0;
    overflow: hidden;
    /* This places the images on the right on larger screens */
  }
`;

// Individual styled images
const CityDeliveryImage = styled(Image)`
  border-radius: 0.6rem;
  /* Next.js <Image> is typically controlled by width/height props */
`;

// ------ Component Definition ------ //

const CityDelivery: React.FC = () => {
  return (
    <CityDeliveryContainer>
      <CityDeliveryContent>
        {/* Text Container (left on larger screens) */}
        <CityDeliveryTextContainer>
          <CityDeliveryButtonText>City Delivery</CityDeliveryButtonText>
          <CityDeliverySubtitle>Fast & Reliable City Delivery</CityDeliverySubtitle>
          <CityDeliveryDescription>
            Whether it’s important documents or bulky packages, our swift city
            delivery services keep you moving without the hassle. From pickup
            to drop-off, we ensure efficiency and peace of mind.
          </CityDeliveryDescription>
          <CityDeliveryLink href="/moving/request">
            Get Started
            <span className="get_started_icon">▶</span>
          </CityDeliveryLink>
        </CityDeliveryTextContainer>

        {/* Multiple small images (right on larger screens) */}
        <CityDeliveryInnerImages>
          <CityDeliveryImage
            src="/images/bike_delivery.png"
            alt="Delivery bike"
            width={400}
            height={400}
          />
          <CityDeliveryImage
            src="/images/paper_delivery.png"
            alt="Delivery parcel"
            width={400}
            height={400}
          />
          <CityDeliveryImage
            src="/images/delivery_bus.png"
            alt="Delivery bus"
            width={400}
            height={400}
          />
          <CityDeliveryImage
            src="/images/moving_quote.jpg"
            alt="boxes"
            width={400}
            height={400}
          />
        </CityDeliveryInnerImages>
      </CityDeliveryContent>
    </CityDeliveryContainer>
  );
};

export default CityDelivery;
