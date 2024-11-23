import UserOrders from "@/containers/profile/user-orders/UserOrders";
import React from "react";
import '../../../containers/profile/user-orders/user-food-orders/user-food-orders.css'

const page = () => {
  return (
    <div className="user_order_container">
      <UserOrders />
    </div>
  );
};

export default page;
