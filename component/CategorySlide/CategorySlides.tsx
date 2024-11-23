"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const CategorySliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  position: relative;
  /* overflow: auto; */
  border-bottom: 1px solid var(--primary-20);

  .custom {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--primary);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    font-size: 24px;
    color: #fff;
    top: 25%;
    cursor: pointer;
  }

  .custom-prev-button {
    left: 0px;
  }
  .custom-next-button {
    right: 0px;
  }
`;

const CategoryItem = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 5px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.active ? "var(--primary)" : "#ccc")};
  transition: color 0.2s ease;
  z-index: -1;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => (props.active ? "var(--primary)" : "none")};
    position: absolute;
    bottom: 0;
  }

  &:hover {
    border-color: #007bff;
  }
`;

interface CategorySlideProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export default function CategorySlide({
  categories,
  onCategorySelect,
}: CategorySlideProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories[0]
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Send the selected category to the parent component
  };

  // Custom navigation buttons
  const CustomPrevButton = () => (
    <div className="custom custom-prev-button">
      <ArrowLeftIcon />
    </div>
  );
  const CustomNextButton = () => (
    <div className="custom custom-next-button">
      <ArrowRightIcon />
    </div>
  );

  return (
    <CategorySliderContainer>
      <Swiper
        style={{
          padding: "0 30px",
        }}
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryItem
              active={category === selectedCategory}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </CategoryItem>
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </CategorySliderContainer>
  );
}
