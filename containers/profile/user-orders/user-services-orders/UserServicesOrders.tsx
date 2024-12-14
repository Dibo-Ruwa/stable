"use client";
import React, { useEffect, useState } from "react";
import { OrderedServices1 } from "./ordered-service-cards/OrderedServices1";
import { OrderedServices2 } from "./ordered-service-cards/OrderedServices2";
import { OrderedServices3 } from "./ordered-service-cards/OrderedServices3";
import { OrderedServices4 } from "./ordered-service-cards/OrderedServices4";
import { OrderedServices5 } from "./ordered-service-cards/OrderedServices5";
import { OrderedServices6 } from "./ordered-service-cards/OrderedServices6";
import { OrderedServices7 } from "./ordered-service-cards/OrderedServices7";
import "./user-services-orders.css";

type TabType = "Active" | "Rendered";
export const UserServicesOrders = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Active"); // Initialize active tab to "food"

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
    <>
      <div className="card_active_container">
        <button
          className={`services_btn ${
            activeTab === "Active" ? "active_services" : ""
          }`}
          onClick={() => handleTabChange("Active")}
        >
          Active
        </button>
        <button
          className={`services_btn ${
            activeTab === "Rendered" ? "active_services" : ""
          }`}
          onClick={() => handleTabChange("Rendered")}
        >
          Rendered
        </button>
      </div>
      <div className="user_card_overflow">
        {activeTab === "Active" ? (
          <>
            <OrderedServices1 />
            <OrderedServices2 />
            <OrderedServices3 />
            <OrderedServices4 />
            <OrderedServices5 />
            <OrderedServices6 />
            <OrderedServices7 />
          </>
        ) : (
          <>
            <OrderedServices1 />
            <OrderedServices2 />
            <OrderedServices3 />
            <OrderedServices4 />
          </>
        )}
      </div>
    </>
  );
};
