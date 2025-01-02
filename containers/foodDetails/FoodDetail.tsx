"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "@/component/ui/BackButton/BackButton";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { FoodData } from "@/utils/types/types";

// Styled components remain the same...
const FoodDetailsContainer = styled.section`
  background: var(--Background-color, #f8f8f8);
`;

const FoodDetailsFrame = styled.div`
  margin: auto;
  margin-top: 6rem;
  width: min(95%, 1440px);

  @media (max-width: 900px) {
    width: min(95%, 1440px);
  }
`;

const DFCS = styled.div`
  display: flex;
  gap: 3%;
  justify-content: space-between;
  position: relative;

  @media (max-width: 900px) {
    gap: 0%;
    flex-direction: column;
  }
`;

const DFCSFood = styled.div`
  flex-basis: 67%;

  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

const DFCSCheck = styled.div`
  flex-basis: 30%;

  @media (max-width: 900px) {
    position: fixed;
    width: 400px;
    max-width: 90%;
    height: fit-content;
    top: 100px;
    right: 0;
  }
`;

const ClearOut = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  left: 0;
  top: 0;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #888;
`;

const FoodDetail: React.FC = () => {
  const [foodDetail, setFoodDetail] = useState<FoodData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        // Debug: Log all localStorage keys
        console.log("All localStorage keys:", Object.keys(localStorage));

        // Debug: Log the raw localStorage value
        const rawSavedFood = localStorage.getItem("selectedFoodItem");
        console.log("Raw localStorage value:", rawSavedFood);

        if (!rawSavedFood) {
          console.warn("selectedFood is null or undefined in localStorage");
          setError("No food found in localStorage");
          return;
        }

        // Debug: Log the actual string content
        console.log("localStorage content length:", rawSavedFood.length);
        console.log("First 100 characters:", rawSavedFood.substring(0, 100));

        try {
          const parsedFood = JSON.parse(rawSavedFood);
          console.log("Successfully parsed food details:", parsedFood);

          // Debug: Verify the parsed data structure
          if (!parsedFood || typeof parsedFood !== "object") {
            console.error("Parsed food is not an object:", parsedFood);
            setError("Invalid food data structure");
            return;
          }

          // Debug: Log expected properties
          console.log("Parsed food properties:", Object.keys(parsedFood));

          setFoodDetail(parsedFood);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
          console.error("Attempted to parse:", rawSavedFood);
          setError("Failed to parse food data");
          return;
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred";
        console.error("Main try-catch error:", errorMessage);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    // Debug: Log when effect runs
    console.log("Effect running - attempting to fetch food detail");
    fetchFoodDetail();
  }, []);

  // Debug: Log component state
  console.log("Component State - isLoading:", isLoading);
  console.log("Component State - error:", error);
  console.log("Component State - foodDetail:", foodDetail);

  if (isLoading) {
    return <Loader>Loading food details...</Loader>;
  }

  if (error) {
    return (
      <FoodDetailsContainer>
        <FoodDetailsFrame>
          <div className="btn">
            <BackButton />
          </div>
          <p style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
            Error: {error}
            <br />
            <small style={{ fontSize: "16px" }}>
              Please check browser console for detailed information.
            </small>
          </p>
        </FoodDetailsFrame>
      </FoodDetailsContainer>
    );
  }

  return (
    <FoodDetailsContainer>
      <FoodDetailsFrame>
        <div className="btn">
          <BackButton />
        </div>
        <DFCS>
          <DFCSFood>
            {foodDetail ? (
              <DisplayFood food={foodDetail} />
            ) : (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 500,
                }}
              >
                No food details available. Please select a food item.
              </p>
            )}
          </DFCSFood>
          <DFCSCheck>
            <ClearOut />
            <CheckoutStore />
          </DFCSCheck>
        </DFCS>
      </FoodDetailsFrame>
    </FoodDetailsContainer>
  );
};

export default FoodDetail;
