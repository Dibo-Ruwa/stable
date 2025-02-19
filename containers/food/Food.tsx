import React, { useState, useEffect } from "react";
import axios from "axios";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import { HJRDiscountSales, HJRDiscountSalesData } from "./component/HJRDiscountSales/HJRDiscountSales";
import { RedHJRDiscountSales, RedHJRDiscountSalesData } from "./component/RedHJRDiscountSales/RedHJRDiscountSales";
import { useSearchParams } from 'next/navigation';

interface FoodProps {
  params: {
    id: string;
  };
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

const Food: React.FC<FoodProps> = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>(
    searchParams.get("category") || "all"
  );

  // Add effect to update active button when URL changes
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveButton(category);
      setSearchQuery(category);
    } else {
      setActiveButton("all");
      setSearchQuery("");
    }
  }, [searchParams]);

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      
        <MostSold
        type="food"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeButton={activeButton}
          // foodData={filteredFoodData} // Pass the filtered food data
        />
      {/* <HJRDiscountSales data={HJRDiscountSalesData} /> */}
      {/* <RedHJRDiscountSales data={RedHJRDiscountSalesData} /> */}
      {/* <MinsMeals searchQuery={searchQuery} activeButton={activeButton} /> */}
      {/* <FreeDelivery searchQuery={searchQuery} activeButton={activeButton} /> */}
    </div>
  );
};

export default Food;