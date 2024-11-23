"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  height: 300px;
  /* min-width: 600px; */
  overflow: hidden;
  @media screen and (max-width: 900px) {
 min-height: 400px;
  }
`;

const Carousel = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Slide = styled(motion.div)`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Button = styled.button`
  margin: 0 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: var(--primary);
  color: white;
  cursor: pointer;
`;

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 16px;
  position: absolute;
  top: 3%;
  left: 0;
`;

const PaginationItem = styled.li<{ isActive: boolean }>`
  margin: 0 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "var(--primary)" : "gray")};
  cursor: pointer;
`;

interface Feedback {
  id: number;
  message: string;
}

const feedbackData: Feedback[] = [
  {
    id: 1,
    message:
      "Their cleaning experts have an eye for detail that I haven’t seen elsewhere. Every nook and cranny sparkles, and the sense of ease this brings to my daily routine? Absolutely priceless.",
  },
  {
    id: 2,
    message:
      "The first time I used Diboruwa, they were 2 days late in delivering my clothes. They informed me in advance that there would be a delay. Customer service like this is hard to find in Kano. Since then, I have been doing my laundry with them. And they always deliver on time.",
  },
  {
    id: 3,
    message:
      "Turning to Diboruwa for my everyday needs was one of my best decisions. My weekends used to be a blur of chores, but now? I’ve reclaimed them. Laundry feels like a luxury, not a task. And the best part? My everyday wear, especially the delicate ones, come back looking brand new, every single time.",
  },
  {
    id: 4,
    message:
      "Diboruwa adds simplicity to our routine. Their food delivery just makes evenings so much easier!",
  },
  
];

const FeedbackCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <CarouselContainer>
        <Carousel
          initial={{ x: 0 }}
          animate={{ x: -activeIndex * 100 + "%" }}
          transition={{ duration: 0.5 }}
        >
          {feedbackData.map((feedback, index) => (
            <Slide key={feedback.id}>&rdquo;{feedback.message}&rdquo;</Slide>
          ))}
        </Carousel>
      </CarouselContainer>
      <Navigation>
        <Button onClick={handlePrev}>
          <ArrowLeftIcon />
        </Button>
        <Button onClick={handleNext}>
          <ArrowRightIcon />
        </Button>
      </Navigation>
      <Pagination>
        {feedbackData.map((_, index) => (
          <PaginationItem
            key={index}
            isActive={index === activeIndex}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </Pagination>
    </Container>
  );
};

export default FeedbackCarousel;
