"use client";
import React, { useState, useEffect } from "react";
// import Discount from "../food/component/discount/Discount";
import CustomBooking from "../food/component/custombooking/CustomBooking";
import MostSold from "../food/component/mostsold/MostSold";
import Discount from "./component/discount/Discount";


interface FoodProps {
  params: {
    id: string;
  };
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

const Groceries: React.FC<FoodProps> = ({ params }) => {
  const { id } = params;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("all");


  // const { modal, closeModal } = useCartStore();

  // const { data: session } = useSession();
  // const router = useRouter();

  return (
    <div className="food-container">
      <Discount />
      {/* <CustomBooking
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      /> */}
      
        <MostSold
        type="grocery"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeButton={activeButton}
          // foodData={filteredFoodData} // Pass the filtered food data
        />
    </div>
  );
};

export default Groceries;


