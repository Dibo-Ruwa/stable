'use client'
import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import PaymentButton from "@/component/paymentButton/PayButton";
import Lottie from "lottie-react";
import MovingAnimation from "./MovingAnimation.json";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import useQuote from "@/hooks/useQuote";
import useOrder from "@/hooks/useOrder";


const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;
`;

const RequestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RequestCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ServiceType = styled.h3`
  font-size: 1rem;
  color: #333;
`;

const Status = styled.span<{ status: 'processing' | 'delivered' | 'pending' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  background: ${props => 
    props.status === 'delivered' ? '#4CAF50' :
    props.status === 'processing' ? '#FFA500' : '#666'};
  color: white;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  margin: 8px 0;
  font-size: 0.9rem;
`;

const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 0.9rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const PaymentActions = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  
  .btn {
    button {
      background: var(--primary);
      font-size: 14px;
      padding: 5px 15px;
    }
  }
`;

interface MovingRequest {
  id: string;
  type: string;
  status: 'processing' | 'delivered' | 'pending';
  location: string;
  destination: string;
  paymentStatus: string;
  amount: string;
}

export const CurrentMovingItems = () => {

    const { quotes, getQuotes } = useQuote();
    const { openModal, handleRequestPayment } = useOrder();
    const referenceId = nanoid(8);

    useEffect(() => {
      getQuotes(); 
    }, []);

  const onSuccess = async (id: string) => {
    await handleRequestPayment(referenceId, id);
    setTimeout(() => {
      getQuotes();
    }, 1500);
  };

  const onClose = () => {
    console.log("closed");
  };

  // Filter quotes to show only moving type requests
  const movingRequests = quotes?.filter(quote => quote.type === 'moving') || [];

  if (movingRequests.length === 0) {
    return (
      <div className="OrdersFromRestaurant_container">
        <p className="OrdersFromRestaurant_title">
          Current Moving Requests
        </p>
        <div className="lottie_Orders">
          <Lottie animationData={MovingAnimation} loop={true} className="lottie_Orders_animation"/>
          <p className="lottie_Text">You haven't made any moving requests yet</p>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Title>Current Moving Requests</Title>
      <RequestsList>
        {movingRequests?.map((request) => (
          <RequestCard key={request._id}>
            <RequestHeader>
              <ServiceType>{request?.type === 'moving' ? 'Moving / Delivery' : ''}</ServiceType>
              <Status status={request.status}>
                {request?.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </Status>
            </RequestHeader>
            <LocationInfo>
              <IoLocationOutline />
              <span>From: {request?.currentLocation}</span>
            </LocationInfo>
            <LocationInfo>
              <IoLocationOutline />
              <span>To: {request?.deliveryLocation}</span>
            </LocationInfo>
            <PaymentInfo>
              <FaMoneyBillWave />
              <span> 
                Price: {request?.total ? `₦${request.total}` : "--"}
              </span>
            </PaymentInfo>
            {!request.isPaid && request.total && (
              <PaymentActions>
                <div className="btn">
                <PaymentButton
                    totalPrice={request?.total}
                    openModal={openModal}
                    buttonText="Pay Now"
                    bgColor="rgba(183, 224, 182, 0.2)"
                    color="black"
                    onSuccess={() => onSuccess(request._id)}
                    onClose={onClose}
                    referenceId={referenceId}
                    disabled={false}
                
                  />
                </div>
              </PaymentActions>
            )}
          </RequestCard>
        ))}
      </RequestsList>
    </Container>
  );
};
