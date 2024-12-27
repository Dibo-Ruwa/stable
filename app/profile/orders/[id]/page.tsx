"use client";

import React from "react";
import styled from "styled-components";
import { useParams, useSearchParams } from "next/navigation";
import { FoodOrderDetails } from "./components/FoodOrderDetails";
import { ServiceOrderDetails } from "./components/ServiceOrderDetails";

const OrderDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const OrderPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const orderType = searchParams.get('type'); // Get type from URL query parameter

  return (
    <OrderDetailsContainer>
      {orderType === 'order' ? (
        <FoodOrderDetails orderId={params.id as string} />
      ) : (
        <ServiceOrderDetails orderId={params.id as string} />
      )}
    </OrderDetailsContainer>
  );
};

export default OrderPage;