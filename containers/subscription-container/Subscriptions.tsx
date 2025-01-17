"use client";
import React, { useState, useEffect } from "react";
import './subscription-card.css'
import { LaundrySubscription } from "./components/LaundrySubscription";
import { CleaningSubscription } from "./components/CleaningSubscription";
import { FoodSubscription } from "./components/FoodSubscription";

type TabType = "food" | "laundry" | "cleaning";

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
            activeTab === "cleaning" ? "active" : ""
          }`}
          onClick={() => handleTabChange("cleaning")}
        >
          Cleaning
        </p>
      </div>
      {activeTab === "food" && <FoodSubscription />}
      {activeTab === "laundry" && <LaundrySubscription />}
      {activeTab === "cleaning" && <CleaningSubscription />}
    </div>
  );
};
