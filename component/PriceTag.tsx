"use client";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

const PriceCardContainer = styled.div`
  background-color: #fff;
  height: auto;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  z-index: 3;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: auto;
  }
`;

const PrimaryBackground = styled.div`
  background-color: var(--primary);
  height: 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

const ContentContainer = styled.div`
  padding: 8%;
`;

// const PriceTag = styled.h3`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: var(--color4);

//   @media screen and (max-width: 768px) {
//     font-size: 1.6rem;
//   }
// `;

const PriceTag = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color4);

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const OriginalPrice = styled.span`
  font-size: 1.5rem;
  color: var(--color2);
  text-decoration: line-through;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 130%;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CTAIcon = styled(RiArrowRightSLine)`
  margin-left: 0.5rem;
  font-size: 15px;
  display: none;
  transition: display 0.3s;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;

  /* background-color: var(--primary-20); */
  color: var(--color4);
  /* padding: 5px 10px; */
  text-decoration: none;
  border-radius: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #2563eb; */

    ${CTAIcon} {
      display: block;
    }
  }
`;

const CTAButtonWrapper = styled.div``;

const PriceCard = () => {
  return (
    <PriceCardContainer>
      <PrimaryBackground />
      <ContentContainer>
        <PriceContainer>
          <OriginalPrice>₦8,990</OriginalPrice>
          <PriceTag>₦6,990/month</PriceTag>
        </PriceContainer>
        <Description>
          Never be without a clean outfit again. Our specially designed Diboruwa
          Laundry Bag ensures your clothes remain organized and ready for
          pickup. Just fill, schedule, and relax.
        </Description>
        <CTAButton
          href={{ pathname: "/subscriptions", query: { tabName: "Laundry" } }}
        >
          Subscribe now
          <CTAButtonWrapper>
            <CTAIcon />
          </CTAButtonWrapper>
        </CTAButton>
      </ContentContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
