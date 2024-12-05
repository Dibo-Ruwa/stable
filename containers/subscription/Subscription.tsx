"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Loader from "@/component/ui/loader/Loader";
// import { BackBtn } from "../profile/profile.styles";
import BackButton from "@/component/ui/BackButton/BackButton";
import useCartStore from "@/store/useCart.store";
import axios from "axios";
import { Subscription } from "@/utils/types/types";
import { interceptor } from "@/axios.config";
import moment from "moment";

// Styled Components
const SubscriptionContainer = styled.div`
  padding: 5% 8%;
`;

const SubscriptionTitle = styled.h2`
  margin-bottom: 10px;
`;

const SubscriptionDetails = styled.div`
  bsubscription: 1px solid var(--primary-20);
  bsubscription-radius: 12px;
  padding: 20px;
`;

const SubscriptionData = styled.div`
  margin-bottom: 10px;
`;

// Single Subscription Page Component
const SingleSubscriptionPage = ({ id }: { id: any }) => {
  const [subscription, setsubscription] = useState<any>(null);

  const getSubscription = async (id: string) => {
    const res = await interceptor.get(
      `/subscriptions/${id}`
    );

    setsubscription(res.data.subscription);
  };

  useEffect(() => {
    getSubscription(id);
  }, []);

  return (
    <SubscriptionContainer>
      {/* <BackBtn> */}
        <BackButton />
      {/* </BackBtn> */}
      <SubscriptionTitle>Subscription Details</SubscriptionTitle>

      {subscription && (
        <SubscriptionDetails>
          <SubscriptionData>
            <strong>Type:</strong> {subscription?.type}
          </SubscriptionData>

          <SubscriptionData>
            <strong>Plan:</strong> {subscription?.plan}
          </SubscriptionData>
          <SubscriptionData>
            <strong>Total:</strong> ₦{subscription?.total}
          </SubscriptionData>

          <SubscriptionData>
            <strong>Start:</strong> {moment(subscription?.start).format("MMMM D, YYYY")} 
          </SubscriptionData>

          <SubscriptionData>
            <strong>Due:</strong> {moment(subscription?.due).format("MMMM D, YYYY")}
          </SubscriptionData>
        </SubscriptionDetails>
      )}
    </SubscriptionContainer>
  );
};

export default SingleSubscriptionPage;
