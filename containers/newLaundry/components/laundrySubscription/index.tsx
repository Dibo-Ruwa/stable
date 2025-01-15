"use client"; // If you're on Next.js 13+ app router and need client-side rendering
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ------ Styled Components ------ //

const LaundrySubscriptionContainer = styled.section`
  /* Similar greenish background, top & bottom spacing as in your moving pages */
  background: rgba(218, 250, 217, 0.16);

  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

// The main content wrapper that handles spacing and layout
const LaundrySubscriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 20px;
  padding-top: 1rem;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

// The left container for your subscription image
const SubscriptionImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

// The Next.js Image component, styled
const SubscriptionImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

// The right container for your text
const SubscriptionTextContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-top: 0;
    text-align: left;
  }
`;

// A pill-shaped button (tag) for "Laundry Subscription"
const SubscriptionButton = styled.button`
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

// The subtitle (e.g., "Monthly Laundry Subscription")
const SubscriptionSubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

// Paragraph description text
const SubscriptionDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

// The "Subscribe Now" link
const SubscriptionLink = styled(Link)`
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

// ------ Component Definition ------ //

export default function LaundrySubscription() {
  return (
    <LaundrySubscriptionContainer>
      <LaundrySubscriptionContent>
        {/* Image left */}
        <SubscriptionImageWrapper>
          <SubscriptionImage
            src="/the bag.png"
            alt="Convenient laundry subscription service"
            width={500}
            height={500}
          />
        </SubscriptionImageWrapper>

        {/* Text right */}
        <SubscriptionTextContainer>
          <SubscriptionButton>Laundry Subscription</SubscriptionButton>
          <SubscriptionSubtitle>
            Effortless Laundry, Every Month
          </SubscriptionSubtitle>
          <SubscriptionDescription>
            Say goodbye to laundry day stress. Enjoy scheduled pickups and swift
            deliveries with our flexible monthly plans tailored to your needs.
          </SubscriptionDescription>
          <SubscriptionLink href="/laundry/request">
            Subscribe
            <span className="get_started_icon">▶</span>
          </SubscriptionLink>
        </SubscriptionTextContainer>
      </LaundrySubscriptionContent>
    </LaundrySubscriptionContainer>
  );
}
