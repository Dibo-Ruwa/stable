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
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DisplayImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const OnDisplayImg = styled.img`
  height: 400px;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  object-fit: cover;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 30%;
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
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

const ItemTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NextBtn = styled(TfiAngleRight)`
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
  right: -1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
      id: item.id?.toString() || "", // Ensure id is a string
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
        <CarouselContainer>
          {cartItems.length > 5 && <PrevBtn onClick={scrollLeft} />}
          <Carousel ref={scrollRef}>
            {cartItems?.map((item) => (
              <ItemContainer key={item._id} onClick={() => handleItemClick(item)}>
                <OnSelectedImg src={item.imageUrl || "/placeholder.png"} alt={item.title} />
                <ItemTitle>{item.title}</ItemTitle>
              </ItemContainer>
            ))}
          </Carousel>
          {cartItems.length > 5 && <NextBtn onClick={scrollRight} />}
        </CarouselContainer>
      ) : (
        <DisplayImg>
          <OnDisplayImg src={selectedItem?.imageUrl || "/placeholder.png"} alt="on display" />
        </DisplayImg>
      )}
      <AboutFoodCart selectedItem={selectedItem} cartsFood={true} />
    </Container>
  );
};