import React from "react";
import { UserOrdersCard } from "../UserOrdersCard";
import { FaStore } from "react-icons/fa"; // Importing a vendor/store icon
import "./user-food-orders.css";
import styled from "styled-components";
import Lottie from "lottie-react";
import MovingAnimation from "./MovingAnimation.json";
import Loader from "@/component/ui/loader/Loader";

interface UserFoodOrdersProps {
  orders: any[];
  loading: boolean;
}

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 400px;

  .animation-container {
    width: 200px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  .animation-container {
    width: 150px;
  }
`;

export const UserFoodOrders: React.FC<UserFoodOrdersProps> = ({ orders, loading }) => {
  console.log("UserFoodOrders", orders);

  // Helper function to safely get vendor location
  const getVendorLocation = (order: any) => {
    const vendor = order?.orderItems[0]?.vendor;
    const branch = vendor?.branch?.[0];
    const city = branch?.location?.city?.name || '';
    const region = branch?.location?.region?.name || '';

    if (city && region) {
      return `${city}, ${region}`;
    } else if (city) {
      return city;
    } else if (region) {
      return region;
    }
    return 'Location not available';
  };

  if (loading) {
    return (
      <LoadingState>
        <Loader />
      </LoadingState>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <EmptyState>
        <div className="animation-container">
          <Lottie animationData={MovingAnimation} loop={true} />
        </div>
        <h3>No Food Orders</h3>
        <p>You don't have any food orders at the moment</p>
      </EmptyState>
    );
  }

  return (
    <div className="user_card_overflow">
      <div className="user_cards_container">
        {orders?.map((order) => (
          <div
            className="user_cards"
            key={order?._id}
          >
            {/* Render Food Item */}
            {order?.orderItems?.[0] && (
              <UserOrdersCard
                className="user_card"
                id={order?._id}
                type={order?.type}
              >
                <div className="card_image">
                  <img
                    src={order.orderItems[0].imageUrl || '/default-food-image.png'}
                    alt={order.orderItems[0].title || "food image"}
                    className="card_img"
                  />
                </div>
                <div className="card_content">
                  <div className="card_foodAndRating">
                    <div className="card_food_quantity">
                      <p className="card_food_name">
                        {order?.orderItems[0]?.title}
                      </p>

                      {order?.orderItems.length > 1 && (
                        <p className="card_food_quantityNum">
                          +{order?.orderItems.length - 1}
                        </p>
                      )}
                    </div>
                    <div className="card_rating">
                      <span className="card_rating_staricon">⭐</span>
                      <p className="card_rating_num">
                        {order?.orderItems[0]?.rating || "4.5"}
                      </p>
                    </div>
                  </div>
                  <div className="card_time_content">
                    <p className="card_time">
                      Prep time: {order?.orderItems[0]?.prep_time} mins
                    </p>
                  </div>
                  <div className="card_offer_money">
                    <div className="card_offer_dot"></div>
                    <p className="card_offer_amount">
                      Total: ₦{order?.total}
                    </p>
                  </div>
                </div>
              </UserOrdersCard>
            )}

            {/* Render Vendor Details */}
            {order?.orderItems[0]?.vendor && (
              <UserOrdersCard
                className="user_card"
                id={order.orderItems[0].vendor._id}
                type={order.type}
              >
                <div className="vendor_icon_container">
                  {order.orderItems[0].vendor.imageUrl ? (
                    <div className="card_image">
                      <img
                        src={order.orderItems[0].vendor.imageUrl}
                        alt={order.orderItems[0].vendor.name || "vendor"}
                        className="card_img"
                      />
                    </div>
                  ) : (
                    <div className="card_image" style={{ background: "#fff" }}>
                      <FaStore className="card_img" style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }} />
                    </div>
                  )}
                </div>
                <div className="card_restcontent">
                  <p className="restaurant_name">
                    {order.orderItems[0].vendor.name || "Restaurant Name Unavailable"}
                  </p>
                  <div className="rating_and_phone">
                    <div className="The_rating">
                      <span className="ratingStar_icon">⭐</span>
                      <p className="rating_num">
                        {order?.orderItems[0]?.vendor?.rating || "4.5"}
                      </p>
                    </div>
                    <div className="location_text">
                      {getVendorLocation(order)}
                    </div>
                  </div>
                </div>
              </UserOrdersCard>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
