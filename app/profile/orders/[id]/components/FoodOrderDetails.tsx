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

const FoodDetails = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const OrderItems = styled.div`
  .order-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .item-image {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
    }

    .item-details {
      flex: 1;

      h3 {
        margin-bottom: 0.25rem;
      }

      .quantity {
        color: #666;
        font-size: 0.9rem;
      }

      .price {
        font-weight: 600;
        color: #007bff;
      }
    }
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  
  .restaurant-image {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .restaurant-details {
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

const OrderSummary = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 8px;

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    &.total {
      font-weight: 600;
      font-size: 1.1rem;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px dashed #ddd;
    }
  }
`;

interface FoodOrderDetailsProps {
  orderId: string;
}

export const FoodOrderDetails: React.FC<FoodOrderDetailsProps> = ({ orderId }) => {
  return (
    <>
      <OrderHeader>
        <OrderInfo>
          <h1>Food Order Details</h1>
          <span className="order-id">Order #{orderId}</span>
          <div className="order-status">
            <IoMdStopwatch />
            <span>Delivered</span>
          </div>
        </OrderInfo>
      </OrderHeader>

      <FoodDetails>
        <OrderItems>
          <div className="order-item">
            <div className="item-image">
              <Image
                src="/images/jollof-rice.jpg"
                alt="Jollof Rice"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="item-details">
              <h3>Jollof Rice</h3>
              <div className="quantity">Quantity: 2</div>
              <div className="price">₦3,000</div>
            </div>
          </div>
          <div className="order-item">
            <div className="item-image">
              <Image
                src="/images/chicken.jpg"
                alt="Grilled Chicken"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="item-details">
              <h3>Grilled Chicken</h3>
              <div className="quantity">Quantity: 1</div>
              <div className="price">₦2,500</div>
            </div>
          </div>
        </OrderItems>

        <RestaurantInfo>
          <div className="restaurant-image">
            <Image
              src="/images/restaurant-logo.jpg"
              alt="Restaurant"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="restaurant-details">
            <h3>Restaurant Name</h3>
            <div className="rating">
              <FaStar />
              <span>4.8</span>
            </div>
            <div className="contact">
              <LuPhone />
              <span>+234 123 456 7890</span>
            </div>
            <div className="contact">
              <IoLocationOutline />
              <span>123 Restaurant Street, City</span>
            </div>
          </div>
        </RestaurantInfo>

        <OrderSummary>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦5,500</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦500</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₦6,000</span>
          </div>
        </OrderSummary>
      </FoodDetails>
    </>
  );
};
