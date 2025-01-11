"use client"; // If you're using Next.js 13+ app directory and need client-side rendering
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// ------ Styled Components ------ //

// The top-level <section> container with the greenish background
const SustainableDetergentContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

// The main content wrapper that handles spacing and layout
const SustainableDetergentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  margin: 0 auto;
  width: 90%;
  gap: 20px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Text block container with a centered layout
const SustainableDetergentTextContainer = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    margin-bottom: 2rem;
    padding-bottom: 0rem;
  }
`;

// The "Sustainable Detergent" button
const SustainableDetergentButtonText = styled.button`
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

// Subtitle (e.g., "Eco-Friendly Sustainable Detergent")
const SustainableDetergentSubtitle = styled.h4`
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
const SustainableDetergentDescription = styled.p`
  color: #565656;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 14px;
  }
`;

// "Request a Quote" link
const SustainableDetergentLink = styled(Link)`
  color: #27a124;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: fit-content; /* so it only takes up the space of the text */

  /* Icon next to text */
  .get_started_icon {
    width: 15px;
    height: 15px;
  }

  @media (min-width: 900px) {
    font-size: 15px;
    display: inline-block;
  }
`;

// Container for the image group
const SustainableDetergentInnerImages = styled.div`
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
  }
`;

// Styled image (optional if you want to apply consistent styling to images)
const SustainableDetergentImage = styled(Image)`
  /* For general styling—Next.js <Image> 
     is typically controlled by width/height props */
  border-radius: 0.6rem;
`;

// ------ Component Definition ------ //

const SustainableDetergent: React.FC = () => {
  return (
    <SustainableDetergentContainer>
      <SustainableDetergentContent>
        <SustainableDetergentTextContainer>
          <SustainableDetergentButtonText>
            Sustainable Detergent
          </SustainableDetergentButtonText>
          <SustainableDetergentSubtitle>
            Eco-Friendly Sustainable Detergent
          </SustainableDetergentSubtitle>
          <SustainableDetergentDescription>
            Our sustainable detergent service uses eco-friendly products to clean
            your clothes, ensuring a minimal environmental impact. We care about
            your laundry and our planet, providing a safe and effective cleaning
            solution for your garments.
          </SustainableDetergentDescription>
          <SustainableDetergentLink href="/laundry/request">
            Request a Quote
            <span className="get_started_icon">▶</span>
          </SustainableDetergentLink>
        </SustainableDetergentTextContainer>

        <SustainableDetergentInnerImages>
          {/* Placeholder images: repeat the same or switch them out as needed */}
          <SustainableDetergentImage
            src="/images/laundry_machine.jpg"
            alt="Sustainable detergent"
            width={400}
            height={400}
          />
          <SustainableDetergentImage
            src="/images/laundry_machine.jpg"
            alt="Eco-friendly detergent"
            width={400}
            height={400}
          />
          <SustainableDetergentImage
            src="/images/laundry_machine.jpg"
            alt="Environmentally safe detergent"
            width={400}
            height={400}
          />
           <SustainableDetergentImage
            src="/images/laundry_machine.jpg"
            alt="Environmentally safe detergent"
            width={400}
            height={400}
          />
        </SustainableDetergentInnerImages>
      </SustainableDetergentContent>
    </SustainableDetergentContainer>
  );
};

export default SustainableDetergent;
