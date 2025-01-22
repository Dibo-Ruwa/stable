"use client"; // If you're using Next.js 13+ app directory and need client-side rendering
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// ------ Styled Components ------ //

const EcoFriendlyLaundryContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

const EcoFriendlyLaundryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin: 0 auto;
  width: 90%;
  gap: 20px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const EcoFriendlyLaundryTextContainer = styled.div`
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    margin-top: 0;
  }
`;

const EcoFriendlyLaundryButtonText = styled.button`
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
  border-radius: 60px;
  margin: 1rem 0;
`;

const EcoFriendlyLaundrySubtitle = styled.h4`
  color: #2a2a2a;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

const EcoFriendlyLaundryDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const EcoFriendlyLaundryLink = styled(Link)`
  color: #27a124;
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  margin-top: 1.5rem;
  align-items: center;
  text-decoration: none;

  .get_started_icon {
    width: 15px;
    height: 15px;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
`;

const EcoFriendlyLaundryInnerImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const EcoFriendlyLaundryImage = styled(Image)`
  border-radius: 0.6rem;
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 900px) {
    width: calc((100% - 4rem) / 2);
  }
`;

const EcoFriendlyLaundryImageDesktop = styled(EcoFriendlyLaundryImage)`
  @media (max-width: 900px) {
    display: none;
  }
`;

const TopEcoFriendlyLaundryImage = styled(EcoFriendlyLaundryImage)`
  display: none;
  @media (max-width: 900px) {
    display: block;
    width: 800px; /* Increase width for top image on mobile */
    height: 400px; /* Reduce height for top image on mobile */
  }
`;

// ------ Component Definition ------ //

const EcoFriendlyLaundry: React.FC = () => {
  return (
    <EcoFriendlyLaundryContainer>
      <EcoFriendlyLaundryContent>
        {/* Multiple small images (first image on top for mobile) */}
        <EcoFriendlyLaundryInnerImages>
          <TopEcoFriendlyLaundryImage
            src="/images/laundry_machine.jpg"
            alt="High-efficiency laundry machines"
            width={400}
            height={300}
          />
        </EcoFriendlyLaundryInnerImages>

        <EcoFriendlyLaundryTextContainer>
          <EcoFriendlyLaundryButtonText>
            Eco-Friendly Laundry
          </EcoFriendlyLaundryButtonText>
          <EcoFriendlyLaundrySubtitle>
            Sustainable Laundry Solutions for a Cleaner Future
          </EcoFriendlyLaundrySubtitle>
          <EcoFriendlyLaundryDescription>
            Embrace sustainability with our eco-friendly laundry services. From
            energy-efficient washing to biodegradable detergents, we ensure
            every step of your laundry journey is kind to the planet. Join us in
            making a positive impact on the environment without compromising on
            cleanliness and care.
          </EcoFriendlyLaundryDescription>
          <EcoFriendlyLaundryLink href="/laundry/request">
            Request a Quote
            <span className="get_started_icon">▶</span>
          </EcoFriendlyLaundryLink>
        </EcoFriendlyLaundryTextContainer>

        <EcoFriendlyLaundryInnerImages>
          <EcoFriendlyLaundryImage
            src="/images/eco.jpg"
            alt="Biodegradable detergents"
            width={400}
            height={300}
          />
          <EcoFriendlyLaundryImage
            src="/images/dan-gold-aJN-jjFLyCU-unsplash.jpg"
            alt="Fresh laundry with minimal environmental impact"
            width={400}
            height={300}
          />
          <EcoFriendlyLaundryImageDesktop
            src="/images/laundry_machine.jpg"
            alt="High-efficiency laundry machines"
            width={400}
            height={300}
          />
          <EcoFriendlyLaundryImage
            src="/images/Rectangle 181.png"
            alt="Sustainable laundry practices"
            width={400}
            height={300}
          />
        </EcoFriendlyLaundryInnerImages>
      </EcoFriendlyLaundryContent>
    </EcoFriendlyLaundryContainer>
  );
};

export default EcoFriendlyLaundry;
