import React from "react";
import styled from "styled-components";
import { IoMdStopwatch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaBoxes, FaMoneyBillWave } from "react-icons/fa";
import PaymentButton from "@/component/paymentButton/PayButton";
import useOrder from "@/hooks/useOrder";
import { nanoid } from "nanoid";

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

const MainInfo = styled.div`
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
    background: ${props => props.isPaid ? '#e8f5e9' : '#fff3e0'};
    color: ${props => props.isPaid ? '#2e7d32' : '#f57c00'};
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

export const ServiceOrderDetails: React.FC<ServiceOrderDetailsProps> = ({ orderId, quote }) => {
  const { openModal, handleRequestPayment } = useOrder();
  const referenceId = nanoid(8);

  const onSuccess = () => {
    handleRequestPayment(referenceId, orderId);
  };

  const onClose = () => {
    console.log("closed");
  };

  if (!quote) return (
    <Container>
      <Card style={{ display: 'block', padding: '2rem', textAlign: 'center' }}>
        <IoMdStopwatch style={{ fontSize: '2rem', color: '#666', marginBottom: '1rem' }} />
        <h2>Loading service details...</h2>
      </Card>
    </Container>
  );

  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>{quote.type.charAt(0).toUpperCase() + quote.type.slice(1)} Service</h1>
          <div className="status-badge">
            {quote.status} • {quote.isPaid ? "Paid" : "Pending Payment"}
          </div>
        </CardHeader>

        <CardBody>
          <MainInfo isPaid={quote.isPaid}>
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

            {quote.type === 'moving' && (
              <InfoSection>
                <div className="label">
                  <IoLocationOutline />
                  Route
                </div>
                <div className="value">
                  From: {quote.currentLocation}<br />
                  To: {quote.deliveryLocation}
                </div>
              </InfoSection>
            )}

            {(quote.type === 'cleaning' || quote.type === 'laundry') && (
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
                {quote.items.map(item => (
                  <div key={item._id} className="item">
                    {item.name}<span>×{item.amount}</span>
                  </div>
                ))}
              </ItemsGrid>
            </InfoSection>
          </ServiceInfo>
        </CardBody>

        {!quote.isPaid  && (
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
      </Card>
    </Container>
  );
};
