"use client";
import React, { useState, useEffect } from "react";
import { UserFoodOrders } from "./user-food-orders/UserFoodOrders";
import { UserServicesOrders } from "./user-services-orders/UserServicesOrders";
import './user-food-orders/user-food-orders.css'
import './user-services-orders/user-services-orders.css'
import useOrder from "@/hooks/useOrder";

type TabType = "food" | "services";

const UserOrders = () => {
  const [activeTab, setActiveTab] = useState<TabType>("food"); // Initialize active tab to "food"
  const { orders, getOrders, loading } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    // Store active tab in local storage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    // Retrieve active tab from local storage on mount
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab as TabType); // Type assertion
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="user_foodOrders_container">
      <div className="foodAnd_service_tab">
        <p
          className={`foodAnd_service_tabText ${
            activeTab === "food" ? "active" : ""
          }`}
          onClick={() => handleTabChange("food")}
        >
          Food
        </p>
        <p
          className={`foodAnd_service_tabText ${
            activeTab === "services" ? "active" : ""
          }`}
          onClick={() => handleTabChange("services")}
        >
          Services
        </p>
      </div>
      <div className="user_card_overflow">
        {activeTab === "food" ? <UserFoodOrders orders={orders} loading={loading} /> : <UserServicesOrders />}
      </div>
    </div>
  );
};

export default UserOrders;
