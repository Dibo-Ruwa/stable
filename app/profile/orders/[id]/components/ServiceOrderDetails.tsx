import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const OrderInfo = styled.div`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .order-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4CAF50;
    font-weight: 500;
  }
`;

const ServiceDetails = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProviderInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  
  .provider-image {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .provider-details {
    flex: 1;
    
    h3 {
      margin-bottom: 0.5rem;
    }
    
    .rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #FFA500;
      margin-bottom: 0.5rem;
    }
    
    .contact {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #666;
    }
  }
`;

const ServiceStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 8px;
  
  .status-item {
    text-align: center;
    
    .label {
      color: #666;
      font-size: 0.9rem;
    }
    
    .value {
      font-weight: 600;
      margin-top: 0.25rem;
    }
  }
`;

interface ServiceOrderDetailsProps {
  orderId: string;
}

export const ServiceOrderDetails: React.FC<ServiceOrderDetailsProps> = ({ orderId }) => {
  return (
    <>
      <OrderHeader>
        <OrderInfo>
          <h1>Service Order Details</h1>
          <span className="order-id">Order #{orderId}</span>
          <div className="order-status">
            <IoMdStopwatch />
            <span>In Progress</span>
          </div>
        </OrderInfo>
      </OrderHeader>

      <ServiceDetails>
        <h2>Service Information</h2>
        <p>Service Type: Moving Service</p>
        <p>Scheduled Date: February 5, 2024</p>
        <p>Time Slot: 2:00 PM - 4:00 PM</p>
        <p>Address: 123 Customer Street, City</p>
        
        <ProviderInfo>
          <div className="provider-image">
            <Image
              src="/images/provider-avatar.jpg"
              alt="Service Provider"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="provider-details">
            <h3>Provider Name</h3>
            <div className="rating">
              <FaStar />
              <span>4.8</span>
            </div>
            <div className="contact">
              <LuPhone />
              <span>+234 123 456 7890</span>
            </div>
          </div>
        </ProviderInfo>

        <ServiceStatus>
          <div className="status-item">
            <div className="label">Order Status</div>
            <div className="value">In Progress</div>
          </div>
          <div className="status-item">
            <div className="label">Payment Status</div>
            <div className="value">Paid</div>
          </div>
          <div className="status-item">
            <div className="label">Amount</div>
            <div className="value">₦15,000</div>
          </div>
        </ServiceStatus>
      </ServiceDetails>
    </>
  );
};
