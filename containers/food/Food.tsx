import React, { useState, useEffect } from "react";
import axios from "axios";
import Discount from "./component/discount/Discount";
import CustomBooking from "./component/custombooking/CustomBooking";
import MostSold from "./component/mostsold/MostSold";
import { FoodData } from "@/utils/types/types";

interface FoodProps {
  params: {
    id: string;
  };
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

const Food: React.FC<FoodProps> = ({ params }) => {
  const { id } = params;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("All");
  const [foodData, setFoodData] = useState<FoodData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<FoodData[]>(`${url}/api/products`);
        setFoodData(response.data);
        console.log("Fetched food data:", response.data); // Log fetched data
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch food data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="food-container">
      <Discount />
      <CustomBooking
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <MostSold
        id={id}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeButton={activeButton}
        foodData={foodData} // Pass the fetched food data
      />
    </div>
  );
};

export default Food;
