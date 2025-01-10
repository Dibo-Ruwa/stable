"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { interceptor } from "@/axios.config";
import { FaCheckCircle, FaMoneyBillWave, FaSpinner } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { format } from "date-fns";

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const GradientCard = styled.div`
  position: relative;
  background: var(--primary);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: -60px;
  width: 150px;
  height: 150px;
  background: var(--primary-20);
  border-radius: 50%;
  filter: blur(50px);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    color: white;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const CardBody = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const InfoTile = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  flex: 1;
  min-width: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label {
    font-size: 0.9rem;
    color: var(--content);
  }

  .value {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--primary);
  }
`;

const PaymentSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .amount {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: var(--content);
    }
  }

  button {
    background: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #4ec14c;
    }
  }
`;

const Loader = styled.div`
  text-align: center;
  color: var(--content);
  padding: 2rem;

  svg {
    font-size: 2rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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

  if (!subscription) {
    return (
      <Container>
        <Loader>
          <FaSpinner />
          <p>Loading subscription details...</p>
        </Loader>
      </Container>
    );
  }

  const isPaid = subscription.isPaid;

  return (
    <Container>
      <GradientCard>
        <CardOverlay />
        <CardHeader>
          <h1>Subscription Details</h1>
          <div className="status">
            {isPaid ? <FaCheckCircle /> : <MdPending />}
            {isPaid ? "Paid" : "Payment Required"}
          </div>
        </CardHeader>
      </GradientCard>

      <CardBody>
        <InfoTile>
          <span className="label">Plan</span>
          <span className="value">{subscription.plan}</span>
        </InfoTile>
        <InfoTile>
          <span className="label">Type</span>
          <span className="value">{subscription.type}</span>
        </InfoTile>
        <InfoTile>
          <span className="label">Start Date</span>
          <span className="value">
             {format(new Date(subscription.start), "MMMM do, yyyy")}
          </span>
        </InfoTile>
        <InfoTile>
          <span className="label">Due Date</span>
          <span className="value">
            {format(new Date(subscription.due), "MMMM do, yyyy")}
          </span>
        </InfoTile>
        <InfoTile>
          <span className="label">Total</span>
          <span className="value">₦{subscription.total}</span>
        </InfoTile>
      </CardBody>

      {!isPaid && (
        <PaymentSection>
          <div className="amount">
            <FaMoneyBillWave />
            ₦{subscription.total}
          </div>
          <button>Pay Now</button>
        </PaymentSection>
      )}
    </Container>
  );
};

export default SubscriptionPage;
