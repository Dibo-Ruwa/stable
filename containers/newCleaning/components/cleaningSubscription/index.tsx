"use client"; // If you're on Next.js 13+ app router and need client-side rendering
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// ------ Styled Components ------ //

const CleaningSubscriptionContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

const CleaningSubscriptionContent = styled.div`
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

const SubscriptionImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  order: 1; /* Ensure image comes first on mobile */

  @media (min-width: 900px) {
    justify-content: flex-end;
    order: 2; /* Ensure image comes second on desktop */
  }
`;

const SubscriptionImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

const SubscriptionTextContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  text-align: center;
  order: 2; /* Ensure text comes second on mobile */

  @media (min-width: 900px) {
    margin-top: 0;
    text-align: left;
    order: 1; /* Ensure text comes first on desktop */
  }
`;

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

const SubscriptionLink = styled(Link)`
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

export default function CleaningSubscription() {
  return (
    <CleaningSubscriptionContainer>
      <CleaningSubscriptionContent>
        <SubscriptionImageWrapper>
          <SubscriptionImage
            src="/images/cleaning_sub.jpg"
            alt="Convenient cleaning subscription service"
            width={500}
            height={500}
          />
        </SubscriptionImageWrapper>

        <SubscriptionTextContainer>
          <SubscriptionButton>Cleaning Subscription</SubscriptionButton>
          <SubscriptionSubtitle>Effortless Cleaning, Every Month</SubscriptionSubtitle>
          <SubscriptionDescription>
            Enjoy a spotless environment with our monthly cleaning subscription.
            Our flexible plans ensure regular, thorough cleaning tailored to your needs.
          </SubscriptionDescription>
          <SubscriptionLink href="/cleaning/request">
            Subscribe
            <span className="get_started_icon">▶</span>
          </SubscriptionLink>
        </SubscriptionTextContainer>
      </CleaningSubscriptionContent>
    </CleaningSubscriptionContainer>
  );
}
