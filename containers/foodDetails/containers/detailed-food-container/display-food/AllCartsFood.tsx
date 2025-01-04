import React, { useRef } from "react";
import styled from "styled-components";
import { AboutFoodCart } from "../about-food/AboutFoodCart";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useFoodItem } from "@/context/FooItemProvider";
import { useCartItems } from "@/context/CartItems";

// Styled components
const Container = styled.section`
  width: 100%;
`;

const DisplayImg = styled.div`
  /* additional styles can be added here if needed */
`;

const OnDisplayImg = styled.img`
  height: 329px;
  border-radius: 20px;
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

const SelectedImg = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  padding: 0 3.5rem;
  margin: 1rem 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  position: relative;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const OnSelectedImg = styled.img`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

const ItemTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`;

const PrevBtn = styled(TfiAngleLeft)`
  display: flex;
  width: 3rem;
  padding: 10px;
  height: 3rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #fff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const NextBtn = styled(TfiAngleRight)`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #eaebee;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

export const AllCartsFood = () => {
  const { selectedItem, setSelectedItem } = useFoodItem();
  const { cartItems } = useCartItems();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Function to handle item click
  const handleItemClick = (item: typeof cartItems[0]) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <SelectedImg ref={scrollRef}>
        <PrevBtn onClick={scrollLeft} />
        {cartItems.map((item) => (
          <ItemContainer key={item._id} onClick={() => handleItemClick(item)}>
            <OnSelectedImg src={item.imageUrl} alt={item.title} />
            <ItemTitle>{item.title}</ItemTitle>
          </ItemContainer>
        ))}
        <NextBtn onClick={scrollRight} />
      </SelectedImg>
      <DisplayImg>
        <OnDisplayImg src={selectedItem?.imageUrl} alt="on display" />
      </DisplayImg>
      <AboutFoodCart selectedItem={selectedItem} />
    </Container>
  );
};