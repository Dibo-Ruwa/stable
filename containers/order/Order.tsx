"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Order } from "@/utils/types/types";
import useOrder from "@/hooks/useOrder";
import Loader from "@/component/ui/loader/Loader";
// import { BackBtn } from "../profile/profile.styles";
import {BackButton} from "@/component/ui/BackButton/BackButton";
import moment from "moment";

// Styled Components
const OrderContainer = styled.div`
  padding: 5% 8%;
`;

const OrderTitle = styled.h2`
  margin-bottom: 10px;
`;

const OrderDetails = styled.div`
  border: 1px solid var(--primary-20);
  border-radius: 12px;
  padding: 20px;
`;

const OrderData = styled.div`
  margin-bottom: 10px;
`;

const OrderItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

// Single Order Page Component
const SingleOrderPage = ({ id }: { id: any }) => {
  const { order, getOrderById, isSubmitting } = useOrder();
  useEffect(() => {
    getOrderById(id);
  }, []);
  console.log(order)
  // console.log(order?.deliveryFee)

  if (isSubmitting) return <Loader />;

  return (
    <OrderContainer>
      {/* <BackBtn> */}
        <BackButton />
      {/* </BackBtn> */}
      <OrderTitle>Order Details</OrderTitle>

      {order && (
        <OrderDetails>
          <OrderData>
            <strong>Type:</strong> {order?.type}
          </OrderData>
          <OrderData>
            <strong>Email:</strong> {order?.email}
          </OrderData>
          <OrderData>
            <strong>Address:</strong> {order?.address}
          </OrderData>
          <OrderData>
            <strong>Phone:</strong> {order?.phone}
          </OrderData>
          {order?.type === "cart" && (
            <>
              <OrderData>
                <strong>Payment ID:</strong> {order?.paymentId}
              </OrderData>
         
              
              {order?.orderItems &&
                order?.orderItems.map((item: any) => (
                  <div key={item?._id} className="item">
                    <span>
                      {item?.title} - ₦{item?.total.toFixed(2)} (Quantity:
                      {item?.quantity})
                    </span>
                  </div>
                ))}
              <OrderData>
                <strong>Delivery Fee:</strong> ₦{order?.deliveryFee}
              </OrderData>
              <OrderData>
                <strong>Total:</strong> ₦{order?.total + order?.deliveryFee}
              </OrderData>
               <OrderData>
                <strong>Date:</strong> {moment(order?.createdAt).format("MMMM DD, YYYY")}
              </OrderData>
            </>
          )}
          {order?.type === "session" && (
            <>
              <OrderData>
                <strong>Payment ID:</strong> {order?.paymentId}
              </OrderData>
              <OrderData>
                <strong>Total:</strong> ₦{order?.total.toFixed(2)}
              </OrderData>

              <OrderData>
                <strong>Plan:</strong> {order?.orderItems?.plan}
              </OrderData>
              <OrderData>
                <strong>Date:</strong> {moment(order?.createdAt).format("MMMM DD, YYYY")}
              </OrderData>
            </>
          )}
        </OrderDetails>
      )}
    </OrderContainer>
  );
};

export default SingleOrderPage;
