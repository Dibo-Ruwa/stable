"use client";
import React, { useState, useEffect } from "react";
import './subscription-card.css'
import { LaundrySubscription } from "./components/LaundrySubscription";
import { GroomingSubscription } from "./components/GroomingSubscription";
import { FoodSubscription } from "./components/FoodSubscription";


type TabType = "food" | "laundry" | "grooming";

export const Subscription = () => {
  const [activeTab, setActiveTab] = useState<TabType>("food"); // Initialize active tab to "food"

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
    <div className="sub_container">
      <div className="sub_FLG_tab">
        <p
          className={`sub_FLG_tabText ${activeTab === "food" ? "active" : ""}`}
          onClick={() => handleTabChange("food")}
        >
          Food
        </p>
        <p
          className={`sub_FLG_tabText ${
            activeTab === "laundry" ? "active" : ""
          }`}
          onClick={() => handleTabChange("laundry")}
        >
          Laundry
        </p>
        <p
          className={`sub_FLG_tabText ${
            activeTab === "grooming" ? "active" : ""
          }`}
          onClick={() => handleTabChange("grooming")}
        >
          Grooming
        </p>
      </div>
      {activeTab === "food" && <FoodSubscription />}
      {activeTab === "laundry" && <LaundrySubscription />}
      {activeTab === "grooming" && <GroomingSubscription />}
    </div>
  );
};
