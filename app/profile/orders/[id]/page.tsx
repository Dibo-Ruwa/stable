"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useSearchParams } from "next/navigation";
import { FoodOrderDetails } from "./components/FoodOrderDetails";
import { ServiceOrderDetails } from "./components/ServiceOrderDetails";
import useQuote from "@/hooks/useQuote";

const OrderDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const OrderPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const orderType = searchParams.get('type');
  const { quote, getQuoteById } = useQuote();

  useEffect(() => {
    if (params.id) {
      getQuoteById(params.id as string);
    }
  }, [params.id]);

  return (
    <OrderDetailsContainer>
      {orderType === 'order' ? (
        <FoodOrderDetails orderId={params.id as string} />
      ) : (
        <ServiceOrderDetails orderId={params.id as string} quote={quote} />
      )}
    </OrderDetailsContainer>
  );
};

export default OrderPage;