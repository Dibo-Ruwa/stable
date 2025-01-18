"use client";
import React from "react";
import styled from "styled-components";

// Swiper 11+ imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// --------- Styled Components ---------

// Outer container with your greenish background and spacing
const CarouselContainer = styled.section`
  background: rgba(218, 250, 217, 0.16);
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 3rem 1rem;
`;

// Inner wrapper to constrain width and center content
const CarouselContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const CarouselTitle = styled.h2`
  font-size: 1.8rem;
  color: #2a2a2a;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

// Custom Styled Swiper to override default arrow/pagination styles
const StyledSwiper = styled(Swiper)`
  /* Make sure the swiper takes full width inside the container */
  width: 100%;
  /* Optional: Add any additional spacing or styling here */

  /* Override arrow colors (Swiper 11+ uses these class names) */
  .swiper-button-next,
  .swiper-button-prev {
    color: #565656; /* dark gray arrow */
    &:hover {
      color: #444444; /* slightly darker on hover */
    }
  }

  /* Override pagination bullet styles */
  .swiper-pagination-bullet {
    background: #27a124; /* your brand green for the bullets */
    opacity: 0.7; /* slightly transparent */
  }
  .swiper-pagination-bullet-active {
    background: #27a124; /* fully opaque for active bullet */
    opacity: 1;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 0.6rem;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  text-align: left; /* Ensure text is left-aligned in the card */
`;

const TestimonialText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #565656;
  margin-bottom: 1.5rem;

  /* Larger font on bigger screens if desired */
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2a2a2a;
`;

const TestimonialLocation = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.3rem;
`;

// --------- Types (optional, if using TypeScript) ---------
interface TestimonialItem {
  text: string;
  name: string;
  location: string; // e.g., "Kano"
}

interface TestimonialCarouselProps {
  title?: string;
  items: TestimonialItem[];
}

// --------- Component Definition ---------
export default function TestimonialCarousel({
  title = "What Our Customers Say",
  items,
}: TestimonialCarouselProps) {
  return (
    <CarouselContainer>
      <CarouselContent>
        <CarouselTitle>{title}</CarouselTitle>
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={1} // Default to 1 slide on mobile
          breakpoints={{
            // Adjust slidesPerView for different screen sizes
            600: { slidesPerView: 1 }, // 1 slide on screens >= 600px
            900: { slidesPerView: 2 }, // 2 slides on screens >= 900px
            1200: { slidesPerView: 3 }, // 3 slides on screens >= 1200px
          }}
        >
          {items.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard>
                <TestimonialText>“{testimonial.text}”</TestimonialText>
                <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
                <TestimonialLocation>{testimonial.location}</TestimonialLocation>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CarouselContent>
    </CarouselContainer>
  );
}