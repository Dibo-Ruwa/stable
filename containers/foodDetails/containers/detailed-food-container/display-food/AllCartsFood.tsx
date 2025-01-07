import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { AboutFoodCart } from "../about-food/AboutFoodCart";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useFoodItem } from "@/context/FooItemProvider";
import useCartStore from "@/store/useCart.store";
import { CartItem, FoodData } from "@/utils/types/types";

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
  // width: 100%;
  max-width: 1000px;
  scroll-behavior: smooth;
  position: relative;
  height: 150px; // Ensure the container has a fixed height
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  min-width: 120px; // Ensure each item has a minimum width
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
  const { cartItems, getCart } = useCartStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCart();
  }, [getCart]);

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
  const handleItemClick = (item: CartItem) => {
    const selectedFoodItem: FoodData = {
      _id: item._id || "",
      title: item.title,
      prep_time: item.prep_time,
      categories: item.categories,
      price: item.price,
      imageUrl: item.imageUrl,
      vendor: {
        ...item.vendor,
        owner: "",
        branch: [],
        operations: []
      },
      discount: item.discount || 0,
      extras: item.extras || [],
      createdAt: "",
      updatedAt: "",
      slug: item.slug,
      __v: 0,
      id: item.id.toString(), // Ensure id is a string
      quantity: item.quantity
    };
    setSelectedItem(selectedFoodItem);
  };

  useEffect(() => {
    if (cartItems.length > 0 && !selectedItem) {
      handleItemClick(cartItems[0]);
    }
  }, [cartItems, selectedItem]);

  console.log(selectedItem, "ITEM");

  return (
    <Container>
      {cartItems.length > 1 ? (
        <SelectedImg ref={scrollRef}>
          <PrevBtn onClick={scrollLeft} />
          {cartItems?.map((item) => (
            <ItemContainer key={item._id} onClick={() => handleItemClick(item)}>
              <OnSelectedImg src={item.imageUrl || "/placeholder.png"} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
            </ItemContainer>
          ))}
          <NextBtn onClick={scrollRight} />
        </SelectedImg>
      ) : (
        <DisplayImg>
          <OnDisplayImg src={selectedItem?.imageUrl || "/placeholder.png"} alt="on display" />
        </DisplayImg>
      )}
      <AboutFoodCart selectedItem={selectedItem} cartsFood={true} />
    </Container>
  );
};