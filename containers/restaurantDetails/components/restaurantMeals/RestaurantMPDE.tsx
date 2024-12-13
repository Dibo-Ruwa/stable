import React, { useState, useEffect } from "react";
import "./restaurant-meal.css";
import { RestaurantMeal } from "./RestaurantMeal";
import { RestaurantProtein } from "./RestaurantProtein";
import { RestaurantDrink } from "./RestaurantDrink";
import { RestaurantExtras } from "./RestaurantExtras";

type TabType = "Meal" | "Protein" | "Drink" | "Extras";

interface RestaurantMPDEProps {
  activeButton: string; // Accept the active button state
  searchQuery: string;
}

export const RestaurantMPDE: React.FC<RestaurantMPDEProps> = ({
  activeButton,
  searchQuery,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("Meal");

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab as TabType);
    }
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="MPDE_Container">
      <div className="MPDE_Tabs">
        {["Meal", "Protein", "Drink", "Extras"].map((tab) => (
          <div
            key={tab}
            className={`MPDE_Tab ${activeTab === tab ? "Active" : ""}`}
            onClick={() => handleTabChange(tab as TabType)}
          >
            <p className="MPDE_TabText">{tab}</p>
            {activeTab === tab && <div className="MPDE_ActiveTabLine"></div>}
          </div>
        ))}
      </div>
      <hr />
      {activeTab === "Meal" && (
        <RestaurantMeal selectedTime={activeButton} searchQuery={searchQuery} />
      )}
      {activeTab === "Protein" && (
        <RestaurantProtein
          selectedTime={activeButton}
          searchQuery={searchQuery}
        />
      )}
      {activeTab === "Drink" && (
        <RestaurantDrink
          selectedTime={activeButton}
          searchQuery={searchQuery}
        />
      )}
      {activeTab === "Extras" && (
        <RestaurantExtras
          selectedTime={activeButton}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
};
