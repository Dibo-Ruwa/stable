"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/useCart.store";
import axios from "axios";
import { interceptor } from "@/axios.config";
import { EmptyServices } from "@/containers/dasboard(client)/client.tyles";

// Styled Components
const SubscriptionHistoryContainer = styled.div`

  h1 {
    margin: 30px 0;
  }
`;

const SubscriptionListingContainer = styled.div`
  overflow-x: scroll;
`;
const SubscriptionListing = styled.div`
  border: 1px solid var(--primary-20);
  border-radius: 20px;
  overflow: hidden;
`;

const SubscriptionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  padding: 10px 25px;

  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color4-20);
  }
  &.header {
    background-color: var(--primary-20);
  }
`;

const ColumnHeader = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  padding: 8px;
`;

const ColumnData = styled.div`
  padding: 8px;

  button {
    outline: none;
    border: none;
    background: none;
    font-size: 20px;
    color: var(--primary);
    cursor: pointer;

  }
`;

// Subscription History Component
const SubscriptionList: React.FC = () => {
  const [subscriptions, setsubscriptions] = useState([]);

  const router = useRouter();

  const getSubscriptions = async () => {
    const res = await interceptor.get("/subscriptions/all");

    setsubscriptions(res.data.subscriptions);
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

 

  const handleSubscriptionClick = (subscriptionId: string) => {
    router.push(`/dashboard/subscriptions/${subscriptionId}`);
  };

  return (
    <SubscriptionHistoryContainer>
      <h1>Subscription History</h1>

      <SubscriptionListingContainer>
        {subscriptions.length >= 1 ? (
          <SubscriptionListing>
            <SubscriptionRow className="header">
              <ColumnHeader>Type</ColumnHeader>
              <ColumnHeader>Plan</ColumnHeader>
              <ColumnHeader>PaymentId</ColumnHeader>

              <ColumnHeader>Total</ColumnHeader>
            </SubscriptionRow>
            {subscriptions.map((subscription: any) => (
              <SubscriptionRow key={subscription._id}>
                <ColumnData>{subscription.type}</ColumnData>
                <ColumnData>{subscription.plan}</ColumnData>
                <ColumnData>
                  {subscription.paymentId ? subscription.paymentId : "--"}
                </ColumnData>

                <ColumnData>
                  {subscription.total ? `₦${subscription.total}` : "--"}
                </ColumnData>
                <ColumnData>
                  <button
                    onClick={() => handleSubscriptionClick(subscription._id)}
                  >
                    <EyeOpenIcon />
                  </button>
                </ColumnData>
              </SubscriptionRow>
            ))}
          </SubscriptionListing>
        ) :        <EmptyServices>
        <div className="image"></div>
        <h3>Oh No!!</h3>
        <p>You have no services yet.</p>
      </EmptyServices>}
      </SubscriptionListingContainer>
    </SubscriptionHistoryContainer>
  );
};

export default SubscriptionList;
