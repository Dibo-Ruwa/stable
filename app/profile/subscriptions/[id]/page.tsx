"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { interceptor } from "@/axios.config";
import { IoCheckmarkSharp } from "react-icons/io5";

const SubscriptionDetailsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubscriptionCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SubscriptionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #333;
`;

const SubscriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubscriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubscriptionLabel = styled.span`
  font-weight: bold;
  color: #555;
`;

const SubscriptionValue = styled.span`
  color: #777;
`;

const SubscriptionPage = () => {
  const params = useParams();
  const [subscription, setSubscription] = useState<any>(null);

  const getSubscriptionById = async (id: string) => {
    const res = await interceptor.get(`/subscriptions/${id}`);
    setSubscription(res.data.subscription);
  };

  useEffect(() => {
    if (params.id) {
      getSubscriptionById(params.id as string);
    }
  }, [params.id]);

  return (
    <SubscriptionDetailsContainer>
      {subscription ? (
        <SubscriptionCard>
          <SubscriptionTitle>Subscription Details</SubscriptionTitle>
          <SubscriptionInfo>
            <SubscriptionItem>
              <SubscriptionLabel>Plan:</SubscriptionLabel>
              <SubscriptionValue>{subscription.plan}</SubscriptionValue>
            </SubscriptionItem>
            <SubscriptionItem>
              <SubscriptionLabel>Type:</SubscriptionLabel>
              <SubscriptionValue>{subscription.type}</SubscriptionValue>
            </SubscriptionItem>
            <SubscriptionItem>
              <SubscriptionLabel>Total:</SubscriptionLabel>
              <SubscriptionValue>₦{subscription.total}</SubscriptionValue>
            </SubscriptionItem>
            <SubscriptionItem>
              <SubscriptionLabel>Start Date:</SubscriptionLabel>
              <SubscriptionValue>{new Date(subscription.start).toLocaleDateString()}</SubscriptionValue>
            </SubscriptionItem>
            <SubscriptionItem>
              <SubscriptionLabel>Due Date:</SubscriptionLabel>
              <SubscriptionValue>{new Date(subscription.due).toLocaleDateString()}</SubscriptionValue>
            </SubscriptionItem>
            <SubscriptionItem>
              <SubscriptionLabel>Status:</SubscriptionLabel>
              <SubscriptionValue>{subscription.isPaid ? "Paid" : "Unpaid"}</SubscriptionValue>
            </SubscriptionItem>
          </SubscriptionInfo>
        </SubscriptionCard>
      ) : (
        <p>Loading...</p>
      )}
    </SubscriptionDetailsContainer>
  );
};

export default SubscriptionPage;