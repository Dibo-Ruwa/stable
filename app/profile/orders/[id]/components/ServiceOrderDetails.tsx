import React, { useState } from "react";
import styled from "styled-components";
import { IoMdStopwatch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaBoxes, FaMoneyBillWave } from "react-icons/fa";
import PaymentButton from "@/component/paymentButton/PayButton";
import useOrder from "@/hooks/useOrder";
import { nanoid } from "nanoid";
import { ServiceOrderDetailsProps, StatusConfig } from "@/types/service.types";
import { MdPayments, MdPending } from "react-icons/md";
import { FaCheckCircle, FaTruck, FaBoxOpen, FaSpinner } from "react-icons/fa";

const capitalizeStatus = (status: string): string => {
  return status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase();
};

const getStatusConfig = (status: string): StatusConfig => {
  switch (status?.toLowerCase()) {
    case "processing":
      return {
        bg: "#e3f2fd",
        text: "#1976d2",
        icon: <FaSpinner className="animate-spin" />,
        label: "Processing",
      };
    case "dispatched":
      return {
        bg: "#fff3e0",
        text: "#f57c00",
        icon: <FaTruck className="animate-bounce" />,
        label: "On the way",
      };
    case "delivered":
      return {
        bg: "#e8f5e9",
        text: "#2e7d32",
        icon: <FaCheckCircle />,
        label: "Completed",
      };
    default:
      return {
        bg: "#f3e5f5",
        text: "#7b1fa2",
        icon: <MdPending />,
        label: "Pending",
      };
  }
};

const getPaymentBadge = (isPaid: boolean) => ({
  bg: isPaid ? "#e8f5e9" : "#fff3e0",
  text: isPaid ? "#2e7d32" : "#f57c00",
  icon: isPaid ? <FaCheckCircle /> : <MdPayments className="animate-pulse" />,
  label: isPaid ? "Paid" : "Payment Required",
});

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

const CardHeader = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-bottom: 1px solid #eee;

  h1 {
    margin-bottom: 15px;
  }
`;

const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #eee;
  flex: 1;
`;

const PaymentSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .amount {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: #1a1a1a;

    svg {
      color: #666;
    }
  }

  .btn {
    button {
      background: var(--primary);
      font-size: 14px;
      padding: 8px 20px;
      border-radius: 8px;
    }
  }
`;

const MainInfo = styled.div<{ statusColor: Pick<StatusConfig, "bg" | "text"> }>`
  background: white;
  padding: 1.5rem;

  h1 {
    font-size: 1.3rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .status-badge {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    background: ${(props) => props.statusColor.bg};
    color: ${(props) => props.statusColor.text};
  }
`;

const ServiceInfo = styled.div`
  background: white;
  padding: 1.5rem;
`;

const InfoSection = styled.div`
  margin-bottom: 1rem;

  .label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .value {
    color: #1a1a1a;
  }
`;

const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;

  .item {
    background: #f1f5f9;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 0.85rem;
    color: #475569;

    span {
      font-weight: 500;
      color: #333;
      margin-left: 0.25rem;
    }
  }
`;

const StatusBadge = styled.div<{ config: StatusConfig }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${(props) => props.config.bg};
  color: ${(props) => props.config.text};

  .icon {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }

  .divider {
    margin: 0 0.5rem;
    opacity: 0.5;
  }
`;

const StatusBadges = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ServiceOrderDetails: React.FC<ServiceOrderDetailsProps> = ({
  orderId,
  quote,
}) => {
  const { openModal, handleRequestPayment, isSubmitting } = useOrder();
  const referenceId = nanoid(8);
  const statusConfig = getStatusConfig(quote?.status);
  const paymentConfig = getPaymentBadge(quote?.isPaid);

  const onSuccess = async () => {
    await handleRequestPayment(referenceId, orderId);
  };

  const onClose = () => {
    console.log("closed");
  };

  if (!quote)
    return (
      <Container>
        <Card
          style={{ display: "block", padding: "2rem", textAlign: "center" }}
        >
          <IoMdStopwatch
            style={{ fontSize: "2rem", color: "#666", marginBottom: "1rem" }}
          />
          <h2>Loading service details...</h2>
        </Card>
      </Container>
    );

  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>{capitalizeStatus(quote.type)} Service</h1>
          <StatusBadges>
            <StatusBadge config={statusConfig}>
              <span className="icon">{statusConfig.icon}</span>
              <span>Status: {capitalizeStatus(quote.status)}</span>
            </StatusBadge>
            <StatusBadge config={paymentConfig}>
              <span className="icon">{paymentConfig.icon}</span>
              <span>{paymentConfig.label}</span>
            </StatusBadge>
          </StatusBadges>
        </CardHeader>

        <CardBody>
          <MainInfo statusColor={statusConfig}>
            <InfoSection>
              <div className="label">
                <IoMdStopwatch />
                Schedule
              </div>
              <div className="value">
                {new Date(quote.date).toLocaleDateString()}
                {quote.pickUpTime && ` at ${quote.pickUpTime}`}
              </div>
            </InfoSection>

            {quote.type === "moving" && (
              <InfoSection>
                <div className="label">
                  <IoLocationOutline />
                  Route
                </div>
                <div className="value">
                  From: {quote.currentLocation}
                  <br />
                  To: {quote.deliveryLocation}
                </div>
              </InfoSection>
            )}

            {(quote.type === "cleaning" || quote.type === "laundry") && (
              <InfoSection>
                <div className="label">
                  <IoLocationOutline />
                  Service Location
                </div>
                <div className="value">{quote.from || quote.user.address}</div>
              </InfoSection>
            )}
          </MainInfo>

          <ServiceInfo>
            <InfoSection>
              <div className="label">
                <FaBoxes />
                Service Items
              </div>
              <ItemsGrid>
                {quote.items.map((item) => (
                  <div key={item._id} className="item">
                    {item.name}
                    <span>×{item.amount}</span>
                  </div>
                ))}
              </ItemsGrid>
            </InfoSection>
          </ServiceInfo>
        </CardBody>

        {!quote.isPaid && !isSubmitting && (
          <PaymentSection>
            <div className="amount">
              <FaMoneyBillWave />
              Total: ₦{quote.total}
            </div>
            <div className="btn">
              <PaymentButton
                totalPrice={quote.total}
                openModal={openModal}
                buttonText="Pay Now"
                color="primary"
                onSuccess={onSuccess}
                onClose={onClose}
                referenceId={referenceId}
              />
            </div>
          </PaymentSection>
        )}

        {isSubmitting && (
          <div className="flex justify-center p-4">
            <span>Processing payment...</span>
          </div>
        )}
      </Card>
    </Container>
  );
};
