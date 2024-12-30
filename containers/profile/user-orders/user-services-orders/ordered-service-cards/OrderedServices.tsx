import React from "react";
import { UserOrdersCard } from "../../UserOrdersCard";
import "../user-services-orders.css";
import { IoMdStopwatch } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import styled from "styled-components";

interface QuoteItem {
  name: string;
  amount: number;
  _id: string;
}

interface Quote {
  _id: string;
  type: string;
  status: string;
  currentLocation?: string;
  deliveryLocation?: string;
  from?: string;
  date: string;
  description?: string;
  isPaid: boolean;
  image?: string;
  items: QuoteItem[];
  user: {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
  };
}

interface OrderedServicesProps {
  quote: Quote;
}

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.3rem;
  width: 100%;
  background: white;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.15) 100%
    );
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  .service-type {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  .status-badge {
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 0.8rem;
    background: ${props => props.isPaid ? '#e8f5e9' : '#fff3e0'};
    color: ${props => props.isPaid ? '#2e7d32' : '#f57c00'};
  }
`;

const ServiceInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 0.5rem;

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #666;

    svg {
      color: #888;
      font-size: 1.1rem;
    }
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;

  .item-tag {
    background: #f5f5f5;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    color: #666;

    span {
      font-weight: 500;
      color: #333;
    }
  }
`;

export const OrderedServices: React.FC<OrderedServicesProps> = ({ quote }) => {
  const getServiceImage = (type: string) => {
    const defaultImages = {
      // Fix the path - remove extra 'images' directory
      moving: '/images/Frame 2610552 (1).png',
      cleaning: '/images/to clean.png',
      laundry: '/images/laundry4.png',
      default: '/images/Frame 2610552 (1).png'
    };
    
    // Add console.log to debug
    console.log('Image path:', quote.image || defaultImages[type as keyof typeof defaultImages] || defaultImages.default);
    
    if (quote.image && quote.image.trim().length > 0) {
      return quote.image;
    }

    return defaultImages[type as keyof typeof defaultImages] || defaultImages.default;
  };

  const renderServiceDetails = () => {
    switch (quote.type) {
      case 'moving':
        return (
          <>
            <div className="info-item location">
              From: {quote.currentLocation}
            </div>
            <div className="info-item location">
              To: {quote.deliveryLocation}
            </div>
          </>
        );
      
      case 'laundry':
      case 'cleaning':
        return (
          <>
            <div className="info-item location">
              Address: {quote.from || quote.user.address}
            </div>
            <ItemsList>
              {quote.items.map(item => (
                <div key={item._id} className="item-tag">
                  {item.name} <span>×{item.amount}</span>
                </div>
              ))}
            </ItemsList>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="user_cards_container">
      <UserOrdersCard
        className="user_card"
        id={quote._id}
        type={quote.type}
      >
        <CardWrapper>
          <CardImageWrapper>
            <img
              src={getServiceImage(quote.type)}
              alt="service image"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </CardImageWrapper>

          <ContentWrapper>
            <ServiceHeader isPaid={quote.isPaid}>
              <span className="service-type">
                {quote.type.charAt(0).toUpperCase() + quote.type.slice(1)} Service
              </span>
              <span className="status-badge">
                {quote.isPaid ? "Paid" : "Pending Payment"}
              </span>
            </ServiceHeader>

            <ServiceInfo>
              <div className="info-item">
                <IoMdStopwatch />
                <span>{new Date(quote.date).toLocaleDateString()}</span>
              </div>
              <div className="info-item">
                <LuPhone />
                <span>{quote.user.phone}</span>
              </div>
              {renderServiceDetails()}
              <div className="info-item">
                <span>Status: {quote.status}</span>
              </div>
            </ServiceInfo>
          </ContentWrapper>
        </CardWrapper>
      </UserOrdersCard>
    </div>
  );
};
