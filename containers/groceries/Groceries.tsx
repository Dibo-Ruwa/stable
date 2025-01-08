
import React, { useState, useEffect } from "react";
import axios from "axios";
import Discount from "./component/discount/Discount";
import GCustomBooking from "./component/custombooking/CustomBooking";
import GMostSold from "./component/mostsold/MostSold";

interface FoodProps {
  params: {
    id: string;
  };
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

const Groceries: React.FC<FoodProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("all");



  return (
    <div className="food-container">
      <Discount />
      {/* <GCustomBooking
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSearchQuery={setSearchQuery}
      /> */}
      
        <GMostSold
          
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeButton={activeButton}
          // foodData={filteredFoodData} // Pass the filtered food data
        />
      
      {/* <MinsMeals searchQuery={searchQuery} activeButton={activeButton} /> */}
      {/* <FreeDelivery searchQuery={searchQuery} activeButton={activeButton} /> */}
    </div>
  );
};

export default Groceries;