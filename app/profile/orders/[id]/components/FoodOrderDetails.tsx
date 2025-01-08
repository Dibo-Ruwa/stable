import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa"; // Importing a vendor/store icon

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
    color: #4caf50;
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
      color: #ffa500;
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
  order: any;
}

export const FoodOrderDetails: React.FC<FoodOrderDetailsProps> = ({
  orderId,
  order,
}) => {
  if (!order) {
    return <div>Loading...</div>;
  }

  const shortOrderId = orderId.slice(0, 5);

  // Access the branch data properly
  const branch = order?.orderItems[0]?.vendor?.branch[0];
  const vendorName = order?.orderItems[0]?.vendor?.name;
  
  return (
    <>
      <OrderHeader>
        <OrderInfo>
          <h1>Food Order Details</h1>
          <span className="order-id">Order #{shortOrderId}</span>
          <div className="order-status">
            <IoMdStopwatch />
            <span>{order?.status}</span>
          </div>
        </OrderInfo>
      </OrderHeader>

      <FoodDetails>
        <OrderItems>
          {order?.orderItems.map((item: any) => (
            <div className="order-item" key={item._id}>
              <div className="item-image">
                <Image
                  src={item?.imageUrl}
                  alt={item?.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="item-details">
                <h3>{item?.title}</h3>
                <div className="quantity">Quantity: {item.quantity}</div>
                <div className="price">₦{item.price}</div>
              </div>
            </div>
          ))}
        </OrderItems>

        <RestaurantInfo>
          <div className="restaurant-image">
            {branch?.imageUrl ? (
              <Image
                src={branch.imageUrl}
                alt={order?.vendor?.name}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <div className="card_image" style={{ background: "#fff" }}>
                  <FaStore
                    className="card_img"
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      // color: "#90EE90",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="restaurant-details">
            <h3>{vendorName}</h3>
            <div className="rating">
              <FaStar />
              <span>{order?.vendor?.rating || "4.5"}</span>
            </div>
            <div className="contact">
              <IoLocationOutline />
              <span>
                {branch?.location?.city?.name}, {branch?.location?.region?.name}
              </span>
            </div>
          </div>
        </RestaurantInfo>

        <OrderSummary>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{order.total - order.deliveryFee}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦{order.deliveryFee}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₦{order?.total}</span>
          </div>
        </OrderSummary>
      </FoodDetails>
    </>
  );
};
