import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { Button as SharedButton } from "@/component/shared/Button"; // Import the Button component

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  position: absolute; /* Ensure it stays within the viewport */
  top: 100%; /* Position below the cart icon */
  left: 0;
  padding: 1rem; /* Add padding for mobile */
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const CartDropdownCheckAndClear = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartDropdownClear = styled.button`
  color: red;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CartDropdownCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-height: 85vh;
  overflow: auto;
`;

export const CartDropdownCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
//   flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

export const CartDropdownCardTop = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CartDropdownDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartDropdownDetailsImage = styled.div`
  display: flex;
  background-color: gray;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 10px;
  width: 100%; /* Ensure it fits within the screen */
  height: auto; /* Ensure it fits within the screen */
`;

export const CartTitleRatingAndTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: fit-content;
  max-width: 150px;
  margin-right: 0.25rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CartTitleRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const CartTitle = styled.p`
  color: #333;
  width: 100px;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartRatingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CartRatingStar = styled(FaStar)`
  width: 15px;
  height: 15px;
  color: gold;
`;

export const CartRatingNumber = styled.p`
  font-size: 14px;
  color: #999;
`;

export const CartTimeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CartTimeClock = styled(CiClock2)`
  width: 18px;
  height: 18px;
  color: #333;
`;

export const CartTimeClockText = styled.p`
  font-size: 14px;
  color: #333;
`;

export const CartODAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const CartOD = styled.small`
  font-size: 12px;
  color: green;
`;

export const CartAmount = styled.p`
  color: #333;
`;

export const CartDropdownCardDown = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CartCheckboxStock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CounterContainer = styled.div`
  background-color: transparent;
`;

export const CounterButton = styled.button`
  display: flex;
  border-radius: 50%;
  background-color: #ddd;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export const BtnCheckout = styled(SharedButton)`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  border: 1px solid #4bb149;
  background-color: #b7e0b6;
  color: #333;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;
